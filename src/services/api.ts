// src/services/api.ts
import axios from 'axios';
import { TodoItem } from '../data'; // Adjust path as necessary

const API_URL = 'http://localhost:5000/todos'; // Adjust to your JSON server URL

export const fetchTodos = async (): Promise<TodoItem[]> => {
  const response = await axios.get<TodoItem[]>(API_URL);
  return response.data;
};


export const addTodo = async (newTodo: TodoItem): Promise<TodoItem> => {
  const response = await axios.post(API_URL, newTodo);
  return response.data;
};

export const updateTodo = async (updatedTodo: TodoItem): Promise<TodoItem> => {
  const response = await axios.put(`${API_URL}/${updatedTodo.id}`, updatedTodo);
  return response.data;
};

export const deleteTodo = async (id: number): Promise<void> => {
  await axios.delete(`${API_URL}/${id}`);
};
