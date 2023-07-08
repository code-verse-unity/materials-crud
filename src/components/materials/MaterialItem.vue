<template>
  <tr>
    <th class="align-middle fw-normal" scope="row">{{ id }}</th>
    <td class="align-middle fw-bold">{{ name }}</td>
    <td class="align-middle fw-bold" :class="[statusClass]">{{ status }}</td>
    <td class="align-middle text-end text-primary fw-bold" style="width: 1rem">{{ quantity }}</td>
    <td class="align-middle text-end" style="max-width: 1rem">
      <EditMaterial :id="id" :name="name" :status="status" :quantity="quantity" class="me-2" />
      <DeleteMaterial :id="id" :name="name" :status="status" :quantity="quantity" />
    </td>
  </tr>
</template>

<script setup>
import DeleteMaterial from "./DeleteMaterial.vue";
import EditMaterial from "./EditMaterial.vue";
import { computed } from "vue";

const props = defineProps({
  id: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  }
});

const statusClass = computed(() => {
  const statusClass = {
    bon: "text-success",
    mauvais: "text-warning",
    abîmé: "text-danger"
  };

  return statusClass[props.status];
});
</script>

<style scoped></style>
