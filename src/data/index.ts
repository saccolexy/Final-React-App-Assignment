// src/data.ts
export interface TodoItem {
  id: number;
  task: string;
  description: string;
  completed: boolean;
}

// You can remove the sample data if you're fetching from the API
export const todoData: TodoItem[] = [
  { id: 1, task: 'Sample Task 1', description: 'This is a sample task', completed: false },
  { id: 2, task: 'Sample Task 2', description: 'This is another sample task', completed: false },
];
