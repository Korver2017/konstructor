import axios from 'axios';

const userRequest = axios.create({
  baseURL: '/src/api/data',
});

const data = {
  account: 'korver@konsturctor.com',
};

export const postUserRequest = () => userRequest.post('/users.json', data);
