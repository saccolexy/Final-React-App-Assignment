// src/components/ItemsList.tsx

import React from 'react';
import { TodoItem } from '../data';
import ItemCard from './ItemCard';

interface ItemsListProps {
  items: TodoItem[];
  onDelete: (id: number) => void;
}

const ItemsList: React.FC<ItemsListProps> = ({ items, onDelete }) => {
  return (
    <div>
      {items.map((item) => (
        <ItemCard key={item.id} item={item} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default ItemsList;
