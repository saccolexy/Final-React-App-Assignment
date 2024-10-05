// src/data.ts
export interface TodoItem {
  id: number;
  title: string; // Add this line
  task: string;
  description: string;
  completed: boolean;
}

// Example of sample data
export const todoData: TodoItem[] = [
  {
    id: 1,
    title: 'Grocery Shopping',
    task: 'Buy groceries for the week',
    description: 'Include fruits, vegetables, and snacks.',
    completed: false,
  },
  {
    id: 2,
    title: 'Laundry',
    task: 'Do the laundry',
    description: 'Wash clothes and hang them to dry.',
    completed: false,
  },
  // Add more items as needed
];
