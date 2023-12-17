<script setup lang="ts">
import DetailDisplay from '@/components/DetailDisplay.vue'
import { ref, onMounted } from 'vue'
import axios from 'axios'

const base = import.meta.env.VITE_BASE_URL

const headers = ref<Record<string, string> | null>({})

const selectDetails = ref({
  headerName: null as string | null,
  headerValue: null as string | null,
  headerId: null as number | null
})

const openDetail = (key: string, value: string, index: number) => {
  selectDetails.value = {
    headerName: key,
    headerValue: value,
    headerId: index
  }
}

onMounted(async () => {
  await fetchHeader()
})

const fetchHeader = async () => {
  try {
    const response = await axios.get(`${base}/headers`)
    headers.value = response.data.headers
  } catch (error) {
    console.error('Wrong fetch error', error)
  }
}
</script>

<template>
  <div class="container">
    <h2>Headers Uc Noktasindan Gelen Istek</h2>

    <DetailDisplay :buttonData="selectDetails" />

    <div v-show="!headers" class="row vh-100 justify-content-center">
      <div class="spinner-border text-info mt-3" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>

    <table v-show="headers" class="table table-hover table-striped">
      <thead>
        <tr>
          <th class="col-1">#</th>
          <th class="col-4">Header Adı</th>
          <th class="col-7">Header Değeri</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(value, key, index) in headers"
          :key="index"
          data-bs-toggle="collapse"
          :data-bs-target="'#collapseExample' + index"
          aria-expanded="false"
          @click="openDetail(key, value, index)"
        >
          <td>{{ index + 1 }}</td>
          <td>{{ value }}</td>
          <td>{{ value }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
