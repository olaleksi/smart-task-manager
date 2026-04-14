import axios from "axios";

const API_URL = "http://localhost:5000/api/tasks";

export const getTasks = async () => {
  const { data } = await axios.get(API_URL);
  return data;
};

export const createTask = async (task) => {
  const { data } = await axios.post(API_URL, task);
  return data;
};

export const updateTask = async (id, task) => {
  const { data } = await axios.put(`${API_URL}/${id}`, task);
  return data;
};

export const deleteTask = async (id) => {
  const { data } = await axios.delete(`${API_URL}/${id}`);
  return data;
};
