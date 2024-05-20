<script setup lang="ts">
	
	const props = defineProps<{
		tag: string,
		text: string
	}>()

	function validateTag(){
		return ["p", "span", "label", "h1", "h2", "h3", "h4"]
			   .find(t => t === props.tag)
	}

</script>

<template>
	<component :is="validateTag()">{{ text }}</component>
</template>