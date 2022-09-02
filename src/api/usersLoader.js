import axios from 'axios';

const BASE_URL = import.meta.env.BASE_URL;
const usersLoader = axios.create({
  baseURL: `${BASE_URL}data`,
});

export const apiLogin = (userInputs) =>
  usersLoader.post('/users.json', userInputs);

export const apiGetUsers = () => usersLoader.get('/users.json');
export const apiUpdateUser = (user, updatedUser) =>
  usersLoader.post(`/users/user.json`, updatedUser);
