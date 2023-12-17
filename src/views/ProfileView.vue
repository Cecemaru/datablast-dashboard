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
        <table v-show="store.response.freeform" class="table table-hover table-striped">
          <thead>
            <tr>
              <th class="col-1">#</th>
              <th class="col-4">Header Adı</th>
              <th class="col-7">Header Değeri</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(value, key, index) in store.response" :key="index">
              <td>{{ index + 1 }}</td>
              <td>{{ key }}</td>
              <td>{{ value }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
