import axios from 'axios';

const resourceRequest = axios.create({
  baseURL: '/src/api/data',
});

export const getResourceRequest = () => resourceRequest.get('/resources.json');
