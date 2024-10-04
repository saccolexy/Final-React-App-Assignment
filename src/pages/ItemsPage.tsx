// src/pages/ItemsPage.tsx

import React, { useState } from 'react';
import TodoItem from '../components/ToDoItem';
import { Container } from 'react-bootstrap';

const ItemsPage: React.FC = () => {
  const [todos, setTodos] = useState([
    { id: 1, task: 'Learn React', completed: false },
    { id: 2, task: 'Build a To-Do App', completed: false },
  ]);

  const handleDelete = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleEdit = (id: number) => {
    const newTask = prompt('Enter new task name:');
    if (newTask) {
      setTodos(todos.map(todo => (todo.id === id ? { ...todo, task: newTask } : todo)));
    }
  };

  return (
    <Container>
      <h2>Todo List</h2>
      {todos.map(todo => (
        <TodoItem 
          key={todo.id} 
          id={todo.id} 
          task={todo.task} 
          completed={todo.completed} 
          onDelete={handleDelete} 
          onEdit={handleEdit} 
        />
      ))}
    </Container>
  );
};

export default ItemsPage;
