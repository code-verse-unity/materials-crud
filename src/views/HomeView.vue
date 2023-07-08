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

const deleteMaterial = () => {
  materialStore.deleteMaterial(1);
};

const updateMaterial = () => {
  console.log("here");
  materialStore.updateMaterial(3, {
    quantity: 0
  });
};
</script>

<template>
  <main>
    <button @click="updateMaterial">update material 3</button>
    <button @click="deleteMaterial">delete material 1</button>
    <MaterialList :materials="materialStore.materials" />

    <MaterialStatusChart
      :goodCount="materialStore.goodCount"
      :badCount="materialStore.badCount"
      :damagedCount="materialStore.damagedCount"
      :totalCount="materialStore.totalCount"
    />
  </main>
</template>
