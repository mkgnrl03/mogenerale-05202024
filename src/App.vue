<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';


import { storeToRefs } from 'pinia';
import { useTaskStore } from '@/stores/tasks'

const store = useTaskStore();
const { error } = storeToRefs(store);

</script>

<template>
  <header>
    
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>

</style>
