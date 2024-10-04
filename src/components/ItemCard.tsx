// src/components/ItemCard.tsx

import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { TodoItem } from '../data';
import { Link } from 'react-router-dom';

interface ItemCardProps {
  item: TodoItem;
  onDelete: (id: number) => void;
}

const ItemCard: React.FC<ItemCardProps> = ({ item, onDelete }) => {
  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>{item.task}</Card.Title>
        <Card.Text>{item.description}</Card.Text>
        {/* Use Link directly with Bootstrap button classes */}
        <Link to={`/items/${item.id}`} className="btn btn-primary">
          View Details
        </Link>
        <Button variant="danger" onClick={() => onDelete(item.id)}>Delete</Button>
      </Card.Body>
    </Card>
  );
};

export default ItemCard;
