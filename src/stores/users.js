import { defineStore } from 'pinia';
import { reactive } from 'vue';
import { apiLogin, apiGetUsers, apiUpdateUser } from '@/api/usersLoader';
import { useLocalStorage } from '@/composition-api';
import { useToast } from '@/composition-api';
import { useLoadingStore } from '@/stores/loading';
import router from '@/router';
import Cookies from 'js-cookie';
const { setItem, getItem } = useLocalStorage();
const { mountToast } = useToast();

export const useUserStore = defineStore('users', () => {
  const { mountLoading, unmountLoading } = useLoadingStore();
  // Default data for fake login.
  const userInputs = reactive({
    account: 'korver@konstructor.com',
    password: 'admin',
  });

  const user = reactive({ data: {} });

  // Fake login to retrieve user data, and set cookies for auto-login.
  const login = async () => {
    mountLoading();

    try {
      const result = await apiLogin(userInputs);
      const matched = result.data.find(
        (user) => user.account === userInputs.account
      );

      user.data = matched;
      Cookies.set('konstructor-token', `${userInputs.account}-fake-token`);
    } catch (error) {
      console.log(error);
    }

    unmountLoading();
    router.push('/');
  };

  // Retrieve user data by fake token.
  const getUser = async () => {
    mountLoading();
    const token = Cookies.get('konstructor-token');
    const account = token.split('-')[0];

    try {
      const result = await apiGetUsers();
      user.data = result.data.find((user) => user.account === account);
      syncLocalStorage();
    } catch (error) {
      console.log(error);
    }

    unmountLoading();
  };

  const syncLocalStorage = () => {
    const item = getItem(user.data.account);

    if (!item) return;

    user.data.name = item.name;
    user.data.role = item.role;
  };

  const updateUserInfo = async (updatedUser) => {
    mountLoading();

    try {
      await apiUpdateUser(user, updatedUser);

      const { account, name, role } = updatedUser;
      setItem(account, { account, name, role });

      mountToast();
      getUser();
    } catch (error) {
      console.log(error);
    }

    unmountLoading();
  };

  const clearUser = () => {
    user.data = {};
    Cookies.remove('konstructor-token');
  };

  const logout = () => {
    clearUser();
    router.push('/login');
  };

  return {
    userInputs,
    login,
    user,
    getUser,
    updateUserInfo,
    clearUser,
    logout,
  };
});
