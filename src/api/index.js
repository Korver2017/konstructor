import { getResourceRequest } from './resourceRequest.js';
import { postUserRequest, getUserRequest } from './userRequest.js';

export const apiGetResourceRequest = () => getResourceRequest();
export const apiPostUserRequest = () => postUserRequest();
export const apiGetUserRequest = () => getUserRequest();
