import axios from 'axios';

const url = '/api/projects';

const getAll = async () => {
  const { data } = await axios.get(url);
  return data;
};

const getOne = async (id) => {
  const { data } = await axios.get(`${url}/${id}`);
  return data;
};

const create = async (newProject) => {
  const { data } = await axios.post(url, newProject);
  return data;
};

const update = async (id, updatedProject) => {
  const { data } = axios.put(`${url}/${id}`, updatedProject);
  return data;
};

const deleteOne = async (id) => {
  const { data } = axios.delete(`${url}/${id}`);
  return data;
};

const projectService = {
  getAll,
  getOne,
  create,
  update,
  deleteOne,
};

export default projectService;
