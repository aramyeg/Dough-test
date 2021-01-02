import axios from 'axios';

const BASE_URL = 'https://tiny-list.herokuapp.com/api/v1/users/';
const USER_ID = 87;

export const getTodoListService = async () => {
  try {
    const response = await axios.get(`${BASE_URL + USER_ID}/tasks`);
    return await response.data;
  } catch (e) {
    return e;
  }
};

export const createTodoService = async (description) => {
  try {
    const response = await axios.post(`${BASE_URL + USER_ID}/tasks`, {
      'task': {
        'description': description
      }
    });
    return await response.data;
  } catch (e) {
    return e;
  }
};

export const deleteTodoService = async (id) => {
  try {
    return await axios.delete(`${BASE_URL + USER_ID}/tasks/${id}`);
  } catch (e) {
    return e;
  }
};

export const completeTodoService = async (id) => {
  try {
    const response = await axios.put(`${BASE_URL + USER_ID}/tasks/${id}/completed`);
    return await response.data;
  } catch (e) {
    return e;
  }
};

export const uncompleteTodoService = async (id) => {
  try {
    const response = await axios.put(`${BASE_URL + USER_ID}/tasks/${id}/uncompleted`);
    return await response.data;
  } catch (e) {
    return e;
  }
};

export const updateTodoService = async (id, description) => {
  try {
    const response = await axios.patch(`${BASE_URL + USER_ID}/tasks/${id}`, {
      'task': {
        'description': description
      }
    });
    return await response.data;
  } catch (e) {
    return e;
  }
};

