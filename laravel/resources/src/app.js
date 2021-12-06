'use strict';

import { createApp } from 'vue';
import router from '@/routes/loader';
import store from '@/store';
import axios from '@/plugins/axios';
import "@/assets/bootstrap.scss";
import "@/assets/app.scss";

import App from '@/App.vue';
import router from './router';
import store from './store/store.js';
const app = createApp(App);
const plugin = {
<<<<<<< HEAD
    install() {
        // app.config.globalProperties.$axios = axios;
    }
};

// [store, i18n, router, plugin].forEach((i) => {
//   app.use(i);
// });
app.use(router);
app.use(store);
app.mount("#app");
=======
  install () {
    app.config.globalProperties.$axios = axios;
  }
};

[store, router, plugin].forEach((plg) => {
  app.use(plg);
});

app.mount("#app");

>>>>>>> 8dfdccdc99595e7358dc801582f0eb797abc57f3
