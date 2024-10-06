import axios from 'axios'; // Import axios for making HTTP requests
import { TodoItem } from '../data'; // Import the TodoItem interface (adjust the path if necessary)

const API_URL = 'http://localhost:5000/todos'; // Base URL for the JSON server or API endpoint

// Function to fetch all todo items
export const fetchTodos = async (): Promise<TodoItem[]> => {
  try {
    const response = await axios.get<TodoItem[]>(API_URL); // Send a GET request to fetch todos
    return response.data; // Return the fetched todos
  } catch (error) {
    console.error('Error fetching todos:', error); // Log any error that occurs
    throw error; // Re-throw the error to handle it in the component if needed
  }
};

// Function to add a new todo item
export const addTodo = async (newTodo: TodoItem): Promise<TodoItem> => {
  try {
    const response = await axios.post(API_URL, newTodo); // Send a POST request to add a new todo
    return response.data; // Return the newly created todo
  } catch (error) {
    console.error('Error adding todo:', error); // Log any error that occurs
    throw error; // Re-throw the error
  }
};

// Function to update an existing todo item
export const updateTodo = async (updatedTodo: TodoItem): Promise<TodoItem> => {
  try {
    const response = await axios.put(`${API_URL}/${updatedTodo.id}`, updatedTodo); // Send a PUT request to update the todo
    return response.data; // Return the updated todo
  } catch (error) {
    console.error('Error updating todo:', error); // Log any error that occurs
    throw error; // Re-throw the error
  }
};

// Function to delete a todo item
export const deleteTodo = async (id: number): Promise<void> => {
  try {
    await axios.delete(`${API_URL}/${id}`); // Send a DELETE request to remove the todo
  } catch (error) {
    console.error('Error deleting todo:', error); // Log any error that occurs
    throw error; // Re-throw the error
  }
};
