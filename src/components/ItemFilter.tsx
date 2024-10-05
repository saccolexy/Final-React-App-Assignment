import React from 'react';
import { Form } from 'react-bootstrap';

interface ItemFilterProps {
  filter: string;
  onFilterChange: (filter: string) => void;
}

const ItemFilter: React.FC<ItemFilterProps> = ({ filter, onFilterChange }) => {
  return (
    <Form.Group controlId="itemFilter" className="mb-3">
      <Form.Label>Filter Items</Form.Label>
      <Form.Control
        as="select"
        value={filter}
        onChange={(e) => onFilterChange(e.target.value)}
      >
        <option value="">All</option>
        <option value="completed">Completed</option>
        <option value="pending">Pending</option>
      </Form.Control>
    </Form.Group>
  );
};

export default ItemFilter;
