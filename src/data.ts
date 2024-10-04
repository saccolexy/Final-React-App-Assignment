// src/data.ts

// Define the structure of a to-do item using a TypeScript interface
export interface TodoItem {
  id: number;         // Unique identifier for the to-do item
  task: string;      // The task description
  description: string; // Additional details about the task
  completed: boolean; // Flag indicating if the task is completed
}

// Sample array of to-do items, explicitly typed as TodoItem[]
export const todoData: TodoItem[] = [
  { id: 1, task: "Learn React", description: "Learn the basics of React and component lifecycle.", completed: false },
  { id: 2, task: "Build a To-Do App", description: "Create a to-do application using React and TypeScript.", completed: false },
  { id: 3, task: "Master TypeScript", description: "Understand TypeScript and its integration with React.", completed: false },
  { id: 4, task: "Read Documentation", description: "Read the official React and TypeScript documentation.", completed: false },
  { id: 5, task: "Set Up Project", description: "Initialize a new React project using Create React App.", completed: false },
  { id: 6, task: "Implement CRUD", description: "Implement all CRUD operations in the to-do app.", completed: false },
  { id: 7, task: "Deploy Application", description: "Deploy the application to a hosting service.", completed: false },
  { id: 8, task: "Write Tests", description: "Write unit tests for the components using Jest and React Testing Library.", completed: false },
  { id: 9, task: "Improve UI", description: "Refine the UI and add styling with React Bootstrap.", completed: false },
  { id: 10, task: "Add Authentication", description: "Implement user authentication for the to-do app.", completed: false },
];
