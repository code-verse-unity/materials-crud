import { axios } from "../utils/axios";
import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useMaterialStore = defineStore("material", () => {
  const STATUS_VALUE = {
    GOOD: "bon",
    BAD: "mauvais",
    DAMAGED: "abîmé"
  };

  const materials = ref([]);

  // total numbers of materials
  const totalCount = computed(() =>
    materials.value.reduce((prev, curr) => curr.quantity + prev, 0)
  );

  // total numbers of damaged materials, not the number of type of materials
  const goodCount = computed(() =>
    materials.value.reduce(
      (prev, curr) => (curr.status === STATUS_VALUE.GOOD ? curr.quantity + prev : prev),
      0
    )
  );

  const badCount = computed(() =>
    materials.value.reduce(
      (prev, curr) => (curr.status === STATUS_VALUE.BAD ? curr.quantity + prev : prev),
      0
    )
  );

  const damagedCount = computed(() =>
    materials.value.reduce(
      (prev, curr) => (curr.status === STATUS_VALUE.DAMAGED ? curr.quantity + prev : prev),
      0
    )
  );

  const getMaterials = () => axios("/materials").then((response) => response.data);

  return {
    materials,
    STATUS_VALUE,
    totalCount,
    goodCount,
    badCount,
    damagedCount,
    getMaterials
  };
});
