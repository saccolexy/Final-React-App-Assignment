// src/components/AddItem.tsx
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { TodoItem } from '../data'; // Ensure this import is correct

interface AddItemProps {
  onAdd: (item: TodoItem) => void;
}

const AddItem: React.FC<AddItemProps> = ({ onAdd }) => {
  const [task, setTask] = useState(''); // State for task
  const [description, setDescription] = useState(''); // State for description

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ensure task and description are included in validation
    if (task && description) {
      const newItem: TodoItem = {
        id: Date.now(), // Placeholder ID
        task,
        description,
        completed: false,
      };
      onAdd(newItem);
      setTask(''); // Reset task
      setDescription(''); // Reset description
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      {/* Removed title Form.Group */}
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
