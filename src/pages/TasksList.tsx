import React, { useState } from 'react'; // Import necessary React hooks
import { todoData, TodoItem } from '../data'; // Import sample data and TodoItem interface
import ItemCard from '../components/ItemCard'; // Import the ItemCard component for displaying tasks

const TasksList: React.FC = () => {
  // Use state to manage the list of tasks, initialized with sample data from todoData
  const [items, setItems] = useState<TodoItem[]>(todoData); // Use the sample data directly for testing

  // Function to handle the deletion of a task by its ID
  const handleDelete = (id: number) => {
    // Update the state by filtering out the item with the specified ID
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <div>
      <h2>Tasks List</h2> {/* Header for the tasks list */}
      {items.length === 0 ? ( // Check if there are no tasks
        <p>No tasks available.</p> // Display message if no tasks are present
      ) : (
        // Map through the items array to render each ItemCard for the existing tasks
        items.map((item) => (
          <ItemCard key={item.id} item={item} onDelete={handleDelete} /> // Render ItemCard for each task
        ))
      )}
    </div>
  );
};

export default TasksList; // Export the TasksList component for use in other parts of the app
