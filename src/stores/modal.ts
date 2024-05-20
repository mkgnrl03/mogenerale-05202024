


import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useModalStore = defineStore('show-modal', () => {
	const show = ref<boolean>(false);

	return {
		show
	}
})