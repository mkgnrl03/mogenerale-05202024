<script setup lang="ts">
	
	import VButton from "@/components/atoms/VButton.vue"
	import { useModalStore } from '@/stores/modal.ts'
	import { storeToRefs } from "pinia"
	import { ref } from 'vue';
	
	const store = useModalStore();
	const { show } = storeToRefs(store) 



</script>

<template>
	<section 
			v-if="show"
			class="fixed inset-0 bg-slate-900/40 flex justify-center items-center">

		<slot />
	</section>
</template>