// src/App.tsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import TasksList from './pages/TasksList';
import ItemDetail from './components/ItemDetail';
import EditItemForm from './components/EditItemForm';
import NotFound from './pages/AddTask';
import { TodoItem } from './data'; // Import TodoItem
import { fetchTodos, deleteTodo } from './services/api'; // Import fetchTodos and deleteTodo

const App: React.FC = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]); // Initialize with an empty array

  // Fetch todos when the app mounts
  useEffect(() => {
    const loadTodos = async () => {
      try {
        const fetchedTodos = await fetchTodos();
        setTodos(fetchedTodos);
      } catch (error) {
        console.error('Failed to fetch todos:', error);
      }
    };

    loadTodos();
  }, []);

  const handleEdit = (updatedItem: TodoItem) => {
    setTodos((prevTodos) => 
      prevTodos.map((todo) => (todo.id === updatedItem.id ? updatedItem : todo))
    );
  };

  const handleDelete = async (id: number) => {
    try {
      await deleteTodo(id); // Call the deleteTodo API service
      setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id)); // Update state after successful delete
    } catch (error) {
      console.error('Failed to delete todo:', error);
    }
  };

  return (
    <Router>
      <NavBar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<h2>Welcome to Lex's To-Do App</h2>} />
          <Route path="/tasks" element={<TasksList todos={todos} onDelete={handleDelete} />} />
          <Route path="/tasks/:id" element={<ItemDetail />} />
          <Route 
            path="/edit-item/:id" 
            element={<EditItemWithParams todos={todos} onEdit={handleEdit} />} 
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

// Component to handle editing with params
const EditItemWithParams: React.FC<{ todos: TodoItem[]; onEdit: (item: TodoItem) => void }> = ({ todos, onEdit }) => {
  const { id } = useParams<{ id: string }>();
  const todoId = id ? Number(id) : NaN; // Convert id to number
  const todoItem = todos.find((todo) => todo.id === todoId);

  if (!todoItem) {
    return <NotFound />; // Handle case where item is not found
  }

  return (
    <EditItemForm item={todoItem} onEdit={onEdit} /> // Pass item to EditItemForm
  );
};

export default App;
