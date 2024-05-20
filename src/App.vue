<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import VButton from "@/components/atoms/VButton.vue"

import { storeToRefs } from 'pinia';
import { useModalStore } from '@/stores/modal'

const modalStore = useModalStore();
const { show } = storeToRefs(modalStore);

</script>

<template>
  <header class="px-16 py-5 flex justify-between items-center">
      <h1 class="text-3xl font-bold">
        <RouterLink to="/">
            BanKan 
        </RouterLink>
      </h1>

      <VButton 
           text="Create Task"
           type="button" 
           @click="show = true"
           class="bg-slate-900 text-slate-50 py-2 px-4 rounded"
      />

  </header>

  <RouterView />
</template>
