// plugins / arco - ui.js;
// import { defineNuxtPlugin } from '#app';
import ArcoVue from '@arco-design/web-vue';
import '@arco-design/web-vue/dist/arco.css';
import { Notification } from '@arco-design/web-vue';

export default defineNuxtPlugin((nuxtApp) => {

  nuxtApp.vueApp.use(ArcoVue);
  Notification._context = nuxtApp.vueApp._context;
});
