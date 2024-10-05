import axios from 'axios';
import { TodoItem } from '../data';

const API_URL = 'https://jsonplaceholder.typicode.com/todos';

// Fetch all todos
export const fetchTodos = async (): Promise<TodoItem[]> => {
  const response = await axios.get<TodoItem[]>(API_URL);
  return response.data;
};

// Create a new todo
export const createTodo = async (todo: TodoItem): Promise<TodoItem> => {
  const response = await axios.post<TodoItem>(API_URL, todo);
  return response.data;
};

// Update an existing todo
export const updateTodo = async (todo: TodoItem): Promise<TodoItem> => {
  const response = await axios.put<TodoItem>(`${API_URL}/${todo.id}`, todo);
  return response.data;
};

// Delete a todo
export const deleteTodo = async (id: number): Promise<void> => {
  await axios.delete(`${API_URL}/${id}`);
};
