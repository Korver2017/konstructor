import axios from 'axios';

const userRequest = axios.create({
  baseURL: '/src/api/data',
});

export const postUserRequest = (userInputs) =>
  userRequest.post('/users.json', userInputs);
