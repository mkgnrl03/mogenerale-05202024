<script setup lang="ts">
	
	defineProps<{
		type: "button" | "submit",
		text: string
	}>()
	defineEmits(['click'])

</script>

<template>
	
	<button :type="type" @click="$emit('click')" >{{ text }}</button>

</template>