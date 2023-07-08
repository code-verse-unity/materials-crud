<template>
  <tr>
    <th scope="row">{{ id }}</th>
    <td>{{ name }}</td>
    <td>{{ status }}</td>
    <td>{{ quantity }}</td>
    <td></td>
    <td><DeleteMaterial :id="id" :name="name" :status="status" :quantity="quantity" /></td>
  </tr>
</template>

<script setup>
import DeleteMaterial from "./DeleteMaterial.vue";

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
</script>

<style lang="scss" scoped></style>
