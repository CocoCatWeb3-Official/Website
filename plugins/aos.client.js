// plugins/aos.client.js
import AOS from 'aos';
import 'aos/dist/aos.css';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('aos', {
    mounted(el, binding) {
      el.setAttribute('data-aos', binding.value);
      AOS.init({
        once: true,
      });
    },
  });
});
