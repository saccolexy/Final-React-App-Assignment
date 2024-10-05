// src/components/ItemCard.tsx
import React from 'react';
import { TodoItem } from '../data';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

interface ItemCardProps {
  item: TodoItem;
  onDelete: (id: number) => void;
}

const ItemCard: React.FC<ItemCardProps> = ({ item, onDelete }) => {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{item.task}</h5>
        <p className="card-text">{item.description}</p>
        <Link to={`/edit-item/${item.id}`}>
          <Button variant="primary">Edit</Button>
        </Link>
        <Button variant="danger" onClick={() => onDelete(item.id)}>
          Delete
        </Button>
      </div>
    </div>
  );
};

export default ItemCard;
