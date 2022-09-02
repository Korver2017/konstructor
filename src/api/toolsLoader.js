import axios from 'axios';

const toolsLoader = axios.create({
  baseURL: '/data',
});

export const apiGetTools = () => toolsLoader.get('/tools.json');
