import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { TodoItem } from '../data'; // Ensure this import is correct
import { addTodo } from '../services/api'; // Import the API function

interface AddItemProps {
  onAdd: (item: TodoItem) => void; // This function can remain for local state management
}

const AddItem: React.FC<AddItemProps> = ({ onAdd }) => {
  const [task, setTask] = useState(''); // State for task
  const [description, setDescription] = useState(''); // State for description

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Ensure task and description are included in validation
    if (task && description) {
      const newItem: TodoItem = {
        id: Date.now(), // Placeholder ID; will be replaced by the server's ID
        task,
        description,
        completed: false,
      };

      try {
        // Send the new item to the JSON Server
        const addedItem = await addTodo(newItem); // Use the addTodo API function

        // Call the onAdd function with the item returned from the server
        onAdd(addedItem); // Use the server's response for accurate ID
      } catch (error) {
        console.error('Failed to add todo:', error);
      }

      // Reset input fields
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
