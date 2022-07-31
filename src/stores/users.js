import { defineStore } from 'pinia';
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import { apiPostUserRequest } from '@/api/index.js';

export const useUserStore = defineStore('users', () => {
  const router = useRouter();

  const userInputs = reactive({
    account: 'korver@konsturctor.com',
    password: 'admin',
  });

  const postUserResult = reactive({ user: {} });

  const postUserRequest = async () => {
    const result = await apiPostUserRequest(userInputs);
    const userInfo = result.data.filter(
      (user) => user.account === userInputs.account
    )[0];

    postUserResult.user = userInfo;
    postUserResult.user.auth = true;
    router.push('/');
  };

  return { userInputs, postUserRequest, postUserResult };
});