// src/pages/TasksList.tsx
import React from 'react';
import { TodoItem } from '../data'; // Adjust if needed
import ItemsList from '../components/ItemsList'; // Ensure the import path is correct

interface TasksListProps {
  todos: TodoItem[]; // Accept todos as a prop
  onDelete: (id: number) => void; // Include onDelete if needed
}

const TasksList: React.FC<TasksListProps> = ({ todos, onDelete }) => {
  return (
    <div>
      <ItemsList items={todos} onDelete={onDelete} />
    </div>
  );
};

export default TasksList;
