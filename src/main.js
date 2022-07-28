import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

// Nucleo Icons
import '@/assets/css/nucleo-icons.css';
import '@/assets/css/nucleo-svg.css';
import '@/assets/css/nucleo-svg.css';
// CSS Styles
import '@/assets/scss/soft-design-system-pro.scss';

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount('#app');
