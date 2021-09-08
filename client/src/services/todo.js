import axios from 'axios';

const url = '/api/todos';

const getAll = async () => {
  const { data } = await axios.get(url);
  return data;
};

const getOne = async (id) => {
  const { data } = await axios.get(`${url}/${id}`);
  return data;
};

const create = async (newTodo) => {
  const { data } = await axios.post(url, newTodo);
  return data;
};

const update = async (id, updatedTodo) => {
  const { data } = await axios.put(`${url}/${id}`, updatedTodo);
  return data;
};

const deleteOne = async (id) => {
  const { data } = await axios.delete(`${url}/${id}`);
  return data;
};

const todoService = {
  getAll,
  getOne,
  create,
  update,
  deleteOne,
};

export default todoService;
