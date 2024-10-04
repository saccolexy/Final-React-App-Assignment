// src/pages/Home.tsx

import React from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import AddItem from '../components/AddItem';
import { TodoItem, todoData } from '../data';

const Home: React.FC = () => {
  const handleAdd = (newItem: TodoItem) => {
    console.log('New item added:', newItem);
    // You will implement the add functionality later
  };

  return (
    <Container>
      <h1>Add New Task</h1>
      <AddItem onAdd={handleAdd} />
      <h2>Current Tasks</h2>
      <ListGroup>
        {todoData.map((item) => (
          <ListGroup.Item key={item.id}>
            {item.task} - {item.completed ? 'Completed' : 'Not Completed'}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default Home;
