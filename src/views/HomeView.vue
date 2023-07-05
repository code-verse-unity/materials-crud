<script setup>
import TheWelcome from "../components/TheWelcome.vue";
import { useMaterialStore } from "../stores/material.js";
import { onMounted } from "vue";

const materialStore = useMaterialStore();

// when the component is mounted
onMounted(() => {
  // get all materials and put them into the store
  materialStore.getMaterials().then((materials) => {
    materialStore.materials = materials;
  });
});
</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template>
