import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { TodoItem } from '../data';
import { updateTodo } from '../services/api';

interface EditItemFormProps {
  item: TodoItem; // Ensure this is defined
  onEdit: (updatedItem: TodoItem) => void;
}

const EditItemForm: React.FC<EditItemFormProps> = ({ item, onEdit }) => {
  const [task, setTask] = useState(item.task);
  const [description, setDescription] = useState(item.description);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const updatedItem = { ...item, task, description }; // Ensure `item` contains a valid `id`

    console.log('Updating item:', updatedItem); // Log updated item

    try {
      const response = await updateTodo(updatedItem); // This should hit the right URL
      console.log('Update response:', response); // Log response from the API
      onEdit(updatedItem);
      // Reset fields after a successful update
      setTask('');
      setDescription('');
    } catch (error) {
      console.error('Failed to update todo:', error);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formTask">
        <Form.Label>Task</Form.Label>
        <Form.Control
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Update Task
      </Button>
    </Form>
  );
};

export default EditItemForm;
