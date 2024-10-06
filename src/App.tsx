// src/App.tsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import NavBar from './components/NavBar'; // Navigation bar component
import Footer from './components/Footer'; // Footer component
import TasksList from './pages/TasksList'; // Tasks list page
import ItemDetail from './components/ItemDetail'; // Component to show item details
import EditItemForm from './components/EditItemForm'; // Component to edit a task
import AddTask from './pages/AddTask'; // Updated: Page to handle task adding and unknown routes
import { TodoItem } from './data'; // Import TodoItem interface
import { fetchTodos, deleteTodo, updateTodo } from './services/api'; // API service functions to fetch, delete, and update todos

const App: React.FC = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]); // State to store the list of todo items

  // Fetch todos when the app mounts
  useEffect(() => {
    const loadTodos = async () => {
      try {
        const fetchedTodos = await fetchTodos(); // Fetch todos from API
        setTodos(fetchedTodos); // Set the fetched todos to state
      } catch (error) {
        console.error('Failed to fetch todos:', error); // Log error if fetching fails
      }
    };

    loadTodos(); // Call the loadTodos function when the component mounts
  }, []);

  // Handle editing a todo item
  const handleEdit = async (updatedItem: TodoItem) => {
    console.log('Editing item:', updatedItem); // Log the item being edited
    try {
      const response = await updateTodo(updatedItem); // Call the update API
      console.log('Update Response:', response); // Log the response from the update
      setTodos((prevTodos) => 
        prevTodos.map((todo) => (todo.id === updatedItem.id ? response : todo)) // Update the item if the IDs match
      );
    } catch (error) {
      console.error('Failed to update todo:', error); // Log error if update fails
    }
  };

  // Handle deleting a todo item
  const handleDelete = async (id: number) => {
    console.log('Attempting to delete item with ID:', id); // Log the ID being deleted
    try {
      await deleteTodo(id); // Call the delete API to remove the todo
      setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id)); // Remove the item from state after successful deletion
      console.log('Todo deleted with ID:', id); // Log the ID of the deleted todo
    } catch (error) {
      console.error('Failed to delete todo:', error); // Log error if deletion fails
    }
  };

  return (
    <Router>
      <NavBar /> {/* Render the navigation bar */}
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<h2>Welcome to Lex's To-Do App</h2>} /> {/* Welcome page */}
          <Route 
            path="/tasks" 
            element={<TasksList todos={todos} onDelete={handleDelete} />} // Render the tasks list and pass delete handler
          />
          <Route path="/tasks/:id" element={<ItemDetail />} /> {/* Render task details based on id */}
          <Route 
            path="/edit-item/:id" 
            element={<EditItemWithParams todos={todos} onEdit={handleEdit} />} // Render edit form and pass edit handler
          />
          <Route path="*" element={<AddTask />} /> {/* Updated: Render AddTask for unknown routes */}
        </Routes>
      </div>
      <Footer /> {/* Render the footer */}
    </Router>
  );
};

// Component to handle editing a todo item with route parameters
const EditItemWithParams: React.FC<{ todos: TodoItem[]; onEdit: (item: TodoItem) => void }> = ({ todos, onEdit }) => {
  const { id } = useParams<{ id: string }>(); // Get the id from route parameters
  const todoId = id ? Number(id) : NaN; // Convert id to number
  const todoItem = todos.find((todo) => todo.id === todoId); // Find the todo item by id

  if (!todoItem) {
    return <AddTask />; // Updated: If no item is found, render AddTask
  }

  return (
    <EditItemForm item={todoItem} onEdit={onEdit} /> // Pass the item to the edit form
  );
};

export default App;
