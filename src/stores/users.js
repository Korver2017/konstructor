import { defineStore } from 'pinia';
import { computed, reactive } from 'vue';
import { apiLogin, apiGetUsers, apiUpdateUser } from '@/api/usersLoader';
import { setItem, getItem } from '@/composition-api/useLocalStorage';
import { showToast } from '@/composition-api/useToastToggle';
import router from '@/router';
import Cookies from 'js-cookie';

export const useUserStore = defineStore('users', () => {
  // Default data for fake login.
  const userInputs = reactive({
    account: 'korver@konstructor.com',
    password: 'admin',
  });

  const user = reactive({ data: {} });

  // Fake login to retrieve user data, and set cookies for auto-login.
  const login = async () => {
    const result = await apiLogin(userInputs);
    const matched = result.data.find(
      (user) => user.account === userInputs.account
    );

    user.data = matched;
    Cookies.set('konstructor-token', `${userInputs.account}-fake-token`);
    router.push('/');
  };

  // Retrieve user data by fake token.
  const getUser = async () => {
    const token = Cookies.get('konstructor-token');
    const account = token.split('-')[0];
    const result = await apiGetUsers();

    user.data = result.data.find((user) => user.account === account);
    syncLocalStorage();
  };

  const syncLocalStorage = () => {
    const item = getItem(user.data.account);

    if (!item) return;

    user.data.name = item.name;
    user.data.role = item.role;
  };

  const updateUserInfo = async (updatedUser) => {
    await apiUpdateUser(user, updatedUser);

    const { account, name, role } = updatedUser;
    setItem(account, { account, name, role });

    showToast();
    getUser();
  };

  const logout = () => {
    user.data = {};
    Cookies.remove('konstructor-token');
    router.push('/login');
  };

  return {
    userInputs,
    login,
    user,
    getUser,
    updateUserInfo,
    logout,
  };
});
