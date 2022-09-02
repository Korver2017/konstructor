import axios from 'axios';

const usersLoader = axios.create({
  baseURL: '/data',
});

export const apiLogin = (userInputs) =>
  usersLoader.post('/users.json', userInputs);

export const apiGetUsers = () => usersLoader.get('/users.json');
export const apiUpdateUser = (user, updatedUser) =>
  usersLoader.post(`/users/user.json`, updatedUser);
