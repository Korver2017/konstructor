import { defineStore } from 'pinia';
import { reactive } from 'vue';
import { apiPostUserRequest } from '@/api/index.js';

export const useUserStore = defineStore('users', () => {
  const postUserResult = reactive({ user: {} });

  const postUserRequest = async () => {
    const result = await apiPostUserRequest();
    const account = JSON.parse(result.config.data).account;
    const userInfo = result.data.filter((user) => user.account === account)[0];

    postUserResult.user = userInfo;
  };

  return { postUserRequest, postUserResult };
});
