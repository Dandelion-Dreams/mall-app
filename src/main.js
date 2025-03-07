import { createApp } from 'vue';
import Vant from 'vant';
import App from './App.vue';
import router from './router';
import store from './store';
import 'lib-flexible/flexible';
import 'vant/lib/index.css';

createApp(App)
  .use(Vant)
  .use(store)
  .use(router)
  .mount('#app');
