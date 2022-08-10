import axios from 'axios';

const toolsLoader = axios.create({
  baseURL: '/src/api/data',
});

export const apiGetTools = () => toolsLoader.get('/tools.json');
