<script setup lang="ts">

	import type { Task } from "@/type"
	import VButton from "../atoms/VButton.vue"

	import { useTaskStore } from "@/stores/tasks.ts"

	const { remove } = useTaskStore()

	defineProps<{
		task: Task
	}>()

</script>

<template>
	<li class="border border-slate-900 p-3 rounded flex items-start justify-between">

		 <div class="flex flex-col gap-1">
			 <p class="text-sm">{{task.name}}</p>  
			 <p class="text-sm" v-if="task.description">{{task.description}}</p>
			 <p class="text-sm">{{ task.status }}</p>
		</div>

		 <div class="flex flex-col gap-1">

		 	<VButton
			 	@click="remove(task.id)"
			 	type="button"
			 	text="Edit"
			 	class="bg-slate-900 text-slate-50 py-1 px-3 rounded text-sm"
			  />

			 <VButton
			 	@click="remove(task.id)"
			 	type="button"
			 	text="Delete"
			 	class="bg-red-600 text-slate-50 py-1 px-3 rounded text-sm"
			  />
		</div>
		
	</li>
</template>