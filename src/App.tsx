import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import TasksList from './pages/TasksList';
import ItemDetail from './components/ItemDetail';
import EditItemForm from './components/EditItemForm';
import NotFound from './pages/AddTask';
import { TodoItem, todoData } from './data'; // Adjust the import based on your project structure

const App: React.FC = () => {
  const [todos, setTodos] = useState<TodoItem[]>(todoData); // Replace with your actual data fetching logic

  const handleEdit = (updatedItem: TodoItem) => {
    setTodos((prevTodos) => 
      prevTodos.map((todo) => (todo.id === updatedItem.id ? updatedItem : todo))
    );
  };

  return (
    <Router>
      <NavBar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<h2>Welcome to Lex's To-Do App</h2>} />
          <Route path="/tasks" element={<TasksList />} />
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
    <EditItemForm item={todoItem} onEdit={onEdit} />
  );
};

export default App;
