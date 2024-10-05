import React, { useState } from 'react';
import ItemCard from './ItemCard';
import { TodoItem } from '../data';
import ItemFilter from './ItemFilter';
import Header from './Header';

interface ItemsListProps {
  items: TodoItem[];
  onDelete: (id: number) => void;
}

const ItemsList: React.FC<ItemsListProps> = ({ items, onDelete }) => {
  const [filter, setFilter] = useState('');

  const filteredItems = filter
    ? items.filter((item) => (filter === 'completed' ? item.completed : !item.completed))
    : items;

  return (
    <div>
      <Header title="Task List" subtitle="Manage your tasks" />
      <ItemFilter filter={filter} onFilterChange={setFilter} />
      {filteredItems.length === 0 ? (
        <p>No tasks available</p>
      ) : (
        filteredItems.map((item) => (
          <ItemCard key={item.id} item={item} onDelete={onDelete} />
        ))
      )}
    </div>
  );
};

export default ItemsList;
