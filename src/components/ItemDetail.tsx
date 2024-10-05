import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { TodoItem } from '../data';
import { Card, Button } from 'react-bootstrap';
import { fetchTodos } from '../services/api'; // Ensure this import exists

const ItemDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [item, setItem] = useState<TodoItem | null>(null);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const todos = await fetchTodos(); // Fetch all todos
        console.log('Fetched todos:', todos); // Log the fetched todos
        const foundItem = todos.find((todo) => todo.id === Number(id));
        setItem(foundItem || null); // Set the found item or null if not found
      } catch (error) {
        console.error('Failed to fetch item:', error);
      }
    };

    fetchItem();
  }, [id]);

  if (!item) {
    return <h2>Item not found</h2>;
  }

  return (
    <Card>
      <Card.Body>
        <Card.Title>{item.task}</Card.Title>
        <Card.Text>{item.description}</Card.Text>
        <Link to={`/edit-item/${item.id}`}>
          <Button variant="primary">Edit</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default ItemDetail;
