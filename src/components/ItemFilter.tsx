import React from 'react';
import { Form } from 'react-bootstrap'; // Import Form components from React Bootstrap

// Define the props interface for the ItemFilter component
interface ItemFilterProps {
  filter: string;                      // Current filter value
  onFilterChange: (filter: string) => void; // Function to handle filter changes
}

// Define a functional component named ItemFilter that accepts ItemFilterProps
const ItemFilter: React.FC<ItemFilterProps> = ({ filter, onFilterChange }) => {
  return (
    <Form.Group controlId="itemFilter" className="mb-3"> {/* Form group for the filter input */}
      <Form.Label>Filter Items</Form.Label> {/* Label for the filter dropdown */}
      <Form.Control
        as="select"                       // Render as a select dropdown
        value={filter}                   // Set the current filter value
        onChange={(e) => onFilterChange(e.target.value)} // Handle filter change
      >
        <option value="">All</option>     {/* Option to show all items */}
        <option value="completed">Completed</option> {/* Option to filter completed items */}
        <option value="pending">Pending</option>     {/* Option to filter pending items */}
      </Form.Control>
    </Form.Group>
  );
};

// Export the ItemFilter component for use in other parts of the application
export default ItemFilter;
