import axios from 'axios';

const toolsLoader = axios.create({
  baseURL: '/src/api/data',
});

export const getTools = () => toolsLoader.get('/tools.json');
