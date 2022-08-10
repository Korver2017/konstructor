import axios from 'axios';

const usersLoader = axios.create({
  baseURL: '/src/api/data',
});

export const apiLogin = (userInputs) =>
  usersLoader.post('/users.json', userInputs);

export const apiGetUsers = () => usersLoader.get('/users.json');
