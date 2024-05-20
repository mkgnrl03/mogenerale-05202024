<script setup lang="ts">

  import VText from "@/components/atoms/VText.vue";
  import VButton from "@/components/atoms/VButton.vue";
  import VModal from "@/components/organisms/VModal.vue";
  import VTaskItem from "@/components/molecules/VTaskItem.vue";
  import VTaskBoard from "@/components/molecules/VTaskBoard.vue"

  import { Status } from "@/type"
  import { ref, computed } from 'vue';

  import { useModalStore } from '@/stores/modal.ts';
  import { useTaskStore } from '@/stores/tasks.ts'
  import { storeToRefs } from "pinia"


  const modalStore = useModalStore();
  const { add, get } = useTaskStore();
  const { show } = storeToRefs(modalStore);

  const tasksStore = useTaskStore();
  const { tasks } = storeToRefs(tasksStore);

  const statusRef = ref<Status>(Status.TODO);
  const nameRef = ref<string>('');
  const descRef = ref<string>('');

  function addTask(){
    if(nameRef.value.length <= 0){
      console.log("Invalid input")
      return
    }

    add(nameRef.value, statusRef.value, descRef.value)
    show.value = false
    nameRef.value = "";
    statusRef.value=Status.TODO;
    descRef.value = ""
  }

  const todoTasks = computed(() => {
    return tasks.value.filter(t => t.status === Status.TODO)
  })
  const inProgressTasks = computed(() => {
    return tasks.value.filter(t => t.status === Status.IN_PROGRESS)
  })
  const doneTasks = computed(() => {
    return tasks.value.filter(t => t.status === Status.DONE)
  })

</script>

<template>
      <VModal>
         <form @submit.prevent class="bg-white flex flex-col gap-2 px-8 py-5 w-96 rounded">

          <VButton 
             text="❌"
             type="button" 
             @click="show = false"
             class="text-end"
           />

            <VText 
              tag="h2" text="Create Task" 
              class="text-2xl font-bold my-2 text-center"
            />

          <VText 
              tag="label" text="Name:" 
              for="name"
            />
            <input 
              id="name" 
              type="text" 
              maxLength="250"
              v-model="nameRef"
              class="border border-slate-900 py-1 px-2 rounded bg-gray-50" 
            />

            <VText 
              tag="label" text="Description (optional)" 
              for="description"
            />
            <textarea 
              id="description" 
              type="text" 
              maxLength="1000"
              v-model="descRef"
              class="border border-slate-900 py-1 px-2 rounded rounded bg-gray-50" 
            />

            <VText 
              tag="label" text="Status" 
              for="status"
            />
            <select v-model="statusRef" id="status" class="w-28 p-1 rounded bg-slate-50 border border-slate-900">
              <option :value="Status.TODO">Todo</option>
              <option :value="Status.IN_PROGRESS">In Progress</option>
              <option :value="Status.DONE">Done</option>
            </select>

            <button 
              @click="addTask"
              type="button"
              class="bg-slate-900 text-slate-50 py-2 rounded mt-5"> 
                Add Task
             </button>
        </form> 
      </VModal>


      <main class="container mx-auto p-2 flex justify-center gap-2">

        <VTaskBoard name="TODO">
          <VTaskItem 
             v-for="task in todoTasks"
             :task="task"
           />
        </VTaskBoard>

        <VTaskBoard name="IN PROGRESS">
          <VTaskItem 
             v-for="task in inProgressTasks"
             :task="task"
           />
        </VTaskBoard>

        <VTaskBoard name="DONE">
          <VTaskItem 
             v-for="task in doneTasks"
             :task="task"
           />
        </VTaskBoard>
      </main>
</template>
