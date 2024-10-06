import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom'; // Import hooks for routing
import { TodoItem } from '../data'; // Import the TodoItem type from data
import { Card, Button } from 'react-bootstrap'; // Import Card and Button components from React Bootstrap
import { fetchTodos } from '../services/api'; // Import the fetchTodos function from the API service

const ItemDetail: React.FC = () => {
  // Extract the id parameter from the URL
  const { id } = useParams<{ id: string }>();
  
  // State to hold the fetched TodoItem or null if not found
  const [item, setItem] = useState<TodoItem | null>(null);

  // Fetch the item details when the component mounts or id changes
  useEffect(() => {
    const fetchItem = async () => {
      try {
        const todos = await fetchTodos(); // Fetch all todos from the API
        console.log('Fetched todos:', todos); // Log the fetched todos for debugging
        // Find the todo item that matches the id from the URL
        const foundItem = todos.find((todo) => todo.id === Number(id));
        setItem(foundItem || null); // Set the found item or null if not found
      } catch (error) {
        console.error('Failed to fetch item:', error); // Log any errors during fetch
      }
    };

    fetchItem(); // Call the fetch function
  }, [id]); // Dependency array ensures this runs when id changes

  // If the item is not found, display a message
  if (!item) {
    return <h2>Item not found</h2>;
  }

  return (
    <Card>
      <Card.Body>
        {/* Display the task title */}
        <Card.Title>{item.task}</Card.Title>
        {/* Display the task description */}
        <Card.Text>{item.description}</Card.Text>
        {/* Link to the edit page for this item */}
        <Link to={`/edit-item/${item.id}`}>
          <Button variant="primary">Edit</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

// Export the ItemDetail component for use in other parts of the application
export default ItemDetail;
