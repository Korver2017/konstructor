import { createRouter, createWebHistory } from 'vue-router';
import { setupLayouts } from 'virtual:generated-layouts';
import generatedRoutes from 'virtual:generated-pages';
import { useUserStore } from '@/stores/users';
import Cookies from 'js-cookie';

const routes = setupLayouts(generatedRoutes);
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach(async (to, from, next) => {
  const userStore = useUserStore();
  console.log(userStore.user.data.isAuthenticated);

  // const isAuthenticated = console.log(user.data);
  const cookie = Cookies.get('konstructor-token');

  if (
    cookie === 'korver@konstructor.com-fake-token' &&
    !userStore.user.data.isAuthenticated
  ) {
    await userStore.getUser();
  }

  if (!cookie && !userStore.user.data.isAuthenticated) {
    // await userStore.logout();
    if (from.name === 'login') {
      next();
    }
  }

  if (to.name !== 'login' && !userStore.user.data.isAuthenticated)
    next({ name: 'login' });
  else next();
});

export default router;
