<script setup lang="ts">
	
	const props = defineProps<{
		tag: string,
		text: string
	}>()

	function validateTag() = {
		["p", "span", "label", "h1", "h2", "h3", "h4"]
		.find(t => t === props.tag.toLowerCase())
	}

</script>

<template>
	<component :is="validateTag">{{ text }}</component>
</template>