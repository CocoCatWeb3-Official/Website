// stores/useMainStore.js
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useMainStore = defineStore('main', () => {
  const soonShow = ref(false);
	const downloadShow = ref(false);

  return { soonShow ,downloadShow};
});
