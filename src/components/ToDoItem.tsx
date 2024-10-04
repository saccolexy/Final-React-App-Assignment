// src/components/TodoItem.tsx

import React from 'react';
import { Card, Button } from 'react-bootstrap';

interface TodoItemProps {
  id: number;
  task: string;
  completed: boolean;
  onDelete: (id: number) => void; // Function to delete a todo item
  onEdit: (id: number) => void; // Function to edit a todo item
}

const TodoItem: React.FC<TodoItemProps> = ({ id, task, completed, onDelete, onEdit }) => {
  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title style={{ textDecoration: completed ? 'line-through' : 'none' }}>
          {task}
        </Card.Title>
        <Button variant="secondary" onClick={() => onEdit(id)}>Edit</Button>
        <Button variant="danger" onClick={() => onDelete(id)}>Delete</Button>
      </Card.Body>
    </Card>
  );
};

export default TodoItem;
