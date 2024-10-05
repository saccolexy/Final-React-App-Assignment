// src/components/ItemCard.tsx
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { TodoItem } from '../data';
import { Link } from 'react-router-dom';
import { FaEdit, FaTrash } from 'react-icons/fa'; // Importing icons

interface ItemCardProps {
  item: TodoItem;
  onDelete: (id: number) => void;
}

const ItemCard: React.FC<ItemCardProps> = ({ item, onDelete }) => {
  return (
    <Card className="mb-3 shadow-sm border-0"> {/* Add shadow and remove border */}
      <Card.Body>
        <Card.Subtitle className="mb-2 text-muted">{item.task}</Card.Subtitle> {/* Display task */}
        <Card.Text>{item.description}</Card.Text> {/* Description */}
        <div className="d-flex justify-content-between"> {/* Use flex for better layout */}
          <Link to={`/tasks/${item.id}`} className="btn btn-info mr-2"> {/* Button for details */}
            View Details
          </Link>
          <div>
            <Link to={`/edit-item/${item.id}`} className="btn btn-warning mr-2"> {/* Edit button */}
              <FaEdit /> Edit
            </Link>
            <Button variant="danger" onClick={() => onDelete(item.id)}> {/* Delete button */}
              <FaTrash /> Delete
            </Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ItemCard;
