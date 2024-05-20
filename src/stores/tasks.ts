
import { defineStore } from 'pinia';
import { ref } from 'vue';
import { v4 as UUID } from 'uuid'; 

import type { Task, Status } from '@/type';

export const useTaskStore = defineStore('tasks', () => {

	const tasks = ref<Array<Task>>([]);
	const error = ref<{ isError: boolean, message: string }>({
			isError: false,
			message: ''
	})

 	function add(name: string, status: Status, description?:string = ''): void {
 		let task: Task = {
 			id: UUID(),
 			name,
 			status, 
 			description
 		}

 		tasks.value.push(task)

 		 if(!find(task.id)){
 		 	error.value = { isError: true, message: "Failed to add task!" }
 		 }
 		 else {
 		 	error.value = { isError: false, message: "Task added!" }
 		 }
 	}

 	function find(id: string): Task | undefined {
 		return tasks.value.find(t => t.id === id)
 	}

 	function update(task: Task): void {
 		const foundTask = tasks.value.find(t.id === task.id)

 		if(foundTask){
 			const taskIndex = tasks.value.indexOf(foundTask);
 			tasks.value[taskIndex] = task;

 			error.value = { isError: false, message: "Update successful!" }
 		}
 		else{
 			error.value = { isError: true, message: "Update failed!" }
 		}
 	}

 	function remove(id: string): void {

 		const task = find(id)

 		if(!task){
 			error.value = { isError: true, message: "Not found task!" }
 			return 
 		}

 		tasks.value = tasks.value.filter(t => t.id !== id)
 		error.value = { isError: false, message: "Task deleted!" }
 	}

 	return {
 		add,
 		update,
 		remove,
 		error,
 		tasks
 	}


})

