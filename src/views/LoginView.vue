<script setup lang="ts">
import { onMounted } from 'vue'
import { useStore } from '@/stores/credential'
import FormModal from '@/components/FormModal.vue'

const store = useStore()

onMounted(() => {
  if (store.response.freeform) {
    return null
  } else {
    var myModal = new bootstrap.Modal(document.getElementById('formModal'), { keyboard: false })
    myModal.show()
  }
})
</script>

<template>
  <div>
    <h2>Freeform Alaninin Icerigi</h2>

    <div v-if="store.isLoading" class="spinner-border text-info" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>

    <button
      type="button"
      class="btn btn-primary"
      data-bs-toggle="modal"
      data-bs-target="#formModal"
    >
      Launch demo modal
    </button>

    <FormModal />
  </div>
</template>
