<script setup lang="ts">
	
	import VText from "../atoms/VText.vue"

	defineProps<{
		name: string
	}>()

</script>

<template>

	<ul class="overflow-y-scroll h-42 bg-slate-50 w-3/4 flex flex-col gap-2 rounded p-5">
		<VText 
			tag="h3"
			:text="name"
			class="text-center font-semibold text-lg my-5"
		/>
		<slot/>
	</ul>
	

</template>