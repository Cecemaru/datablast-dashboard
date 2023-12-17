<script setup lang="ts">
import { useStore } from '@/stores/credential'

const store = useStore()
</script>

<template>
  <div class="container">
    <div class="card mb-3 text-center mx-auto col-12">
      <h2 class="card-header">Profile Details</h2>

      <div v-if="!store.response.freeform" class="card-body">
        <h5>Lütfen Login alanındaki Formu Doldurun</h5>
      </div>

      <div v-show="store.response" class="card-body">
        <h5 class="card-title">{{ store.response.freeform }}</h5>
        <p class="card-text">{{ store.response['Content-Length'] }}</p>
        <p class="card-text">{{ store.response['Content-Type'] }}</p>
      </div>
    </div>
  </div>
</template>
