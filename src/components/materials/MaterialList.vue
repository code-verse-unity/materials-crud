<template>
  <div>
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Designation</th>
          <th scope="col">État</th>
          <th scope="col">Quantité</th>
        </tr>
      </thead>

      <tbody>
        <MaterialItem
          v-for="material in materials"
          :key="material.id"
          :id="material.id"
          :name="material.name"
          :status="material.status"
          :quantity="material.quantity"
        />
      </tbody>
    </table>
  </div>
</template>

<script setup>
import MaterialItem from "./MaterialItem.vue";

const props = defineProps({
  materials: {
    type: Array,
    required: false,
    default: () => []
  }
});
</script>

<style scoped></style>
