<script setup lang="ts">
import { onMounted } from 'vue'
import { useStore } from '@/stores/credential'
import FormModal from '@/components/FormModal.vue'

declare var bootstrap: any

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
    <div class="container">
      <div class="card mb-3 text-center mx-auto col-12">
        <h2 class="card-header">Freeform Alaninin Icerigi</h2>

        <div v-show="store.response" class="card-body">
          <div class="card-text">
            <div v-if="store.isLoading" class="spinner-border text-info" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>

          <h4 v-if="!store.isLoading" class="card-title">{{ store.response.freeform }}</h4>

          <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#formModal"
          >
            <span v-show="store.response">Ad Soyad Değiştir</span>
            <span v-show="!store.response">Ad Soyad Ekle</span>
          </button>
        </div>
      </div>
    </div>

    <FormModal />
  </div>
</template>
