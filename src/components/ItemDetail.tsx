import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { TodoItem, todoData } from '../data';
import { Card, Button } from 'react-bootstrap';

const ItemDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const item: TodoItem | undefined = todoData.find((todo) => todo.id === Number(id));

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
