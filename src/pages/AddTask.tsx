// src/pages/AddTask.tsx
import React, { useState } from 'react';
import AddItem from '../components/AddItem'; // Import the AddItem component for adding tasks
import { TodoItem } from '../data'; // Import the TodoItem type definition

// Define a functional component named AddTask
const AddTask: React.FC = () => {
  // State to hold the list of todo items
  const [items, setItems] = useState<TodoItem[]>([]); 

  // Handler for adding a new item to the list
  const handleAddItem = (item: TodoItem) => {
    setItems((prevItems) => [...prevItems, item]); // Add the new item to the existing state
    console.log('Added item:', item); // Log the added item for debugging purposes
  };

  return (
    <div className="text-center mt-5"> {/* Center the content with margin */}
      <AddItem onAdd={handleAddItem} /> {/* Include AddItem component and pass the handler */}
      
      {/* Display the header for added tasks */}
      <h3>Added Tasks</h3>
      <ul>
        {/* Map over the items array to display each added task */}
        {items.map((item) => (
          <li key={item.id}> {/* Use item id as the key for list items */}
            <strong>{item.task}</strong>: {item.description} {/* Display task and its description */}
          </li>
        ))}
      </ul>
    </div>
  );
};

// Export the AddTask component for use in other parts of the application
export default AddTask;
