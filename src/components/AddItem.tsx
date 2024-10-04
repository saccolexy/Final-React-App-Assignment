// src/components/AddItem.tsx

import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { TodoItem } from '../data';

interface AddItemProps {
  onAdd: (item: TodoItem) => void;
}

const AddItem: React.FC<AddItemProps> = ({ onAdd }) => {
  const [task, setTask] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (task && description) {
      const newItem: TodoItem = {
        id: Date.now(),
        task,
        description,
        completed: false,
      };
      onAdd(newItem);
      setTask('');
      setDescription('');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formTask">
        <Form.Label>Task</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Add Task
      </Button>
    </Form>
  );
};

export default AddItem;
