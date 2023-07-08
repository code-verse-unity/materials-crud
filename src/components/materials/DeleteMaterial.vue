<template>
  <div>
    <!-- Button trigger modal -->
    <button type="button" class="btn btn-danger" data-bs-toggle="modal" :data-bs-target="bsTarget">
      Supprimer
    </button>

    <!-- Modal -->
    <div class="modal fade" :id="modalId" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5">
              Supprimer le material <span class="text-danger fw-bold">{{ name }}</span>
            </h1>

            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>

          <div class="modal-body">
            <p>Vous êtes sur le point de supprimer ce matériel.</p>
            <p>Cette action est irréversible.</p>
          </div>

          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Annuler</button>

            <button
              @click="deleteMaterial"
              type="button"
              class="btn btn-danger"
              data-bs-dismiss="modal"
            >
              Oui, Supprimer
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useMaterialStore } from "../../stores/material";
import { computed } from "vue";

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  id: {
    type: Number,
    required: true
  }
});

const materialStore = useMaterialStore();

const modalId = computed(() => `delete_material_${props.id}_modal`);

const bsTarget = computed(() => `#${modalId.value}`);

const deleteMaterial = () => {
  materialStore.deleteMaterial(props.id);
};
</script>

<style scoped></style>
