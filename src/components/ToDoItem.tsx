

// Define the structure of a TodoItem
export interface TodoItem {
  id: number;                  // Unique identifier for the todo item
  title: string;               // Title of the todo item (added line)
  task: string;                // Task description or name
  description: string;         // Detailed description of the task
  completed: boolean;          // Status indicating whether the task is completed
}
