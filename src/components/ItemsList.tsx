import React, { useState } from 'react';
import ItemCard from './ItemCard'; // Import the ItemCard component
import { TodoItem } from '../data'; // Import the TodoItem type from data
import ItemFilter from './ItemFilter'; // Import the ItemFilter component
import Header from './Header'; // Import the Header component

// Define the props interface for the ItemsList component
interface ItemsListProps {
  items: TodoItem[];                // Array of TodoItem objects
  onDelete: (id: number) => void;   // Function to handle deletion of an item
}

// Define a functional component named ItemsList that accepts ItemsListProps
const ItemsList: React.FC<ItemsListProps> = ({ items, onDelete }) => {
  const [filter, setFilter] = useState(''); // State to hold the current filter value

  // Filter the items based on the selected filter
  const filteredItems = filter
    ? items.filter((item) => (filter === 'completed' ? item.completed : !item.completed))
    : items;

  return (
    <div>
      {/* Render the header with title and subtitle */}
      <Header title="Task List" subtitle="Manage your tasks" />
      
      {/* Render the ItemFilter component for filtering items */}
      <ItemFilter filter={filter} onFilterChange={setFilter} />
      
      {/* Conditionally render a message or the list of filtered items */}
      {filteredItems.length === 0 ? (
        <p>No tasks available</p> // Message when no tasks are available
      ) : (
        // Map over filtered items and render an ItemCard for each
        filteredItems.map((item) => (
          <ItemCard key={item.id} item={item} onDelete={onDelete} />
        ))
      )}
    </div>
  );
};

// Export the ItemsList component for use in other parts of the application
export default ItemsList;
