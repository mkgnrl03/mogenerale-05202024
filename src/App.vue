<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';


import { storeToRefs } from 'pinia';
import { useTaskStore } from '@/stores/tasks'

const store = useTaskStore();
const { error } = storeToRefs(store);

</script>

<template>
  <header>
      <h1 class="text-3xl font-bold underline">
        <RouterLink to="/">
            BanKan 
        </RouterLink>
      </h1>
  </header>

  <RouterView />
</template>
