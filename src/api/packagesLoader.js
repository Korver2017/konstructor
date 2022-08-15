import axios from 'axios';

const packagesLoader = axios.create({
  baseURL: '/src/api/data',
});

export const apiGetPackages = () => packagesLoader.get('/packages.json');
export const apiGetPackage = (url) =>
  packagesLoader.get(`/packages/${url}.json`);