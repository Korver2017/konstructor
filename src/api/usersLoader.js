import axios from 'axios';

const BASE_URL = import.meta.env.BASE_URL;
const usersLoader = axios.create({
  baseURL: `${BASE_URL}data`,
});

// It may be a `POST` method, but due to deploy to GitHub Pages currently,so we can use `GET` only.
// We will find a back-end solution to correct it in the future.
export const apiLogin = (userInputs) =>
  usersLoader.get('/users.json', userInputs);

export const apiGetUsers = () => usersLoader.get('/users.json');

// It's the same situation to `apiLogin`.
export const apiUpdateUser = (user, updatedUser) =>
  usersLoader.get(`/users/user.json`, updatedUser);
