<script setup lang="ts">
import DetailDisplay from '@/components/DetailDisplay.vue'
import { ref, onMounted } from 'vue'
import axios from 'axios'

const base = import.meta.env.VITE_BASE_URL

const headers = ref({})

const selectDetails = ref({
  headerName: null as string | null,
  headerValue: null as string | null,
  headerId: null as number | null
})

const openDetail = (value: string, key: string, index: number) => {
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
  <div>
    <h2>Headers Uc Noktasindan Gelen Istek</h2>

    <DetailDisplay :buttonData="selectDetails" />

    <table class="table table-hover table-striped">
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
          @click="openDetail(value, key, index)"
        >
          <td>{{ index + 1 }}</td>
          <td>{{ key }}</td>
          <td>{{ value }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
