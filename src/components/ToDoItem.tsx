// src/data.ts
export interface TodoItem {
  id: number;
  title: string; // Add this line
  task: string;
  description: string;
  completed: boolean;
}
