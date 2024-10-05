export interface TodoItem {
    id: number;
    task: string;
    description: string;
    completed: boolean;
  }
  
  export const todoData: TodoItem[] = [
    {
      id: 1,
      task: "Sample Task 1",
      description: "Description for Task 1",
      completed: false,
    },
    {
      id: 2,
      task: "Sample Task 2",
      description: "Description for Task 2",
      completed: true,
    },
  ];
  