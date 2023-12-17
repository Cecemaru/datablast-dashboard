<script setup lang="ts">
import { useStore } from '@/stores/credential'
import { ref } from 'vue'

const store = useStore()

const input = ref()

const onSubmitForm = () => {
  store.freeFormChange(input.value)
}
</script>

<template>
  <div>hmodal</div>

  <div v-if="!store.isLoading">{{ store.response.freeform }}</div>

  <div
    class="modal fade"
    id="formModal"
    tabindex="-1"
    aria-labelledby="formModalLabel"
    aria-hidden="true"
  >
    <form @submit.prevent="onSubmitForm">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="formModalLabel">First and Last Name</h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="form-floating mb-3">
              <input
                v-model="input"
                type="text"
                class="form-control"
                id="fullName"
                placeholder="name@form.com"
              />
              <label for="fullName">Full Name</label>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button data-bs-dismiss="modal" type="submit" class="btn btn-primary">
              Form Submit
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
