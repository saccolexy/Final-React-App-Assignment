// src/pages/NotFound.tsx
import React, { useState } from 'react';
import AddItem from '../components/AddItem'; // Adjust the import path if necessary
import { TodoItem } from '../data'; // Ensure this import is correct

const NotFound: React.FC = () => {
  const [items, setItems] = useState<TodoItem[]>([]); // State to hold todo items

  const handleAddItem = (item: TodoItem) => {
    setItems((prevItems) => [...prevItems, item]); // Add the new item to the state
    console.log('Added item:', item); // You can handle this further, e.g., sending to API
  };

  return (
    <div className="text-center mt-5">
      <AddItem onAdd={handleAddItem} /> {/* Include AddItem component */}
      
      {/* Display the list of added items */}
      <h3>Added Tasks</h3>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <strong>{item.task}</strong>: {item.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotFound;
