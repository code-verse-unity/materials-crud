<script setup>
import MaterialList from "../components/materials/MaterialList.vue";
import MaterialStatusChart from "../components/materials/MaterialStatusChart.vue";
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
  <main class="container py-5">
    <div class="mb-5">
      <h1 class="fw-bold mb-3">Liste des matériels :</h1>
      <MaterialList :materials="materialStore.materials" />
    </div>

    <div>
      <h1 class="fw-bold mb-3">Nombre et états des matériels :</h1>
      <MaterialStatusChart
        :goodCount="materialStore.goodCount"
        :badCount="materialStore.badCount"
        :damagedCount="materialStore.damagedCount"
        :totalCount="materialStore.totalCount"
      />
    </div>
  </main>
</template>
