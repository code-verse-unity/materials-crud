import { axios } from "../utils/axios";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useMaterialStore = defineStore("material", () => {
  const materials = ref([]);

  const getMaterials = () => axios("/materials").then((response) => response.data);

  return {
    materials,
    getMaterials
  };
});
