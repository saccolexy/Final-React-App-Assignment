// src/pages/TasksList.tsx
import React from 'react';
import { TodoItem } from '../data'; // Import the TodoItem type definition
import ItemsList from '../components/ItemsList'; // Import the ItemsList component

// Define the props interface for the TasksList component
interface TasksListProps {
  todos: TodoItem[];              // Accept an array of TodoItem objects as a prop
  onDelete: (id: number) => void;  // Function to handle deletion of a todo item
}

// Define a functional component named TasksList that accepts TasksListProps
const TasksList: React.FC<TasksListProps> = ({ todos, onDelete }) => {
  return (
    <div>
      {/* Render the ItemsList component and pass todos and onDelete props */}
      <ItemsList items={todos} onDelete={onDelete} />
    </div>
  );
};

// Export the TasksList component for use in other parts of the application
export default TasksList;
