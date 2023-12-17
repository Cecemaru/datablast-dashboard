<script setup lang="ts">
defineProps(['buttonData'])
</script>

<template>
  <div class="my-3 card" style="height: 6rem">
    <div class="card-body d-flex flex-column justify-content-center">
      <h5 v-if="buttonData.headerName" class="card-title">
        {{ buttonData.headerName }}
      </h5>
      <p class="card-text" v-if="buttonData.headerName">
        {{ buttonData.headerValue }}
      </p>
      <p v-if="!buttonData.headerName" class="card-text fs-4 fw-bold">
        Lütfen Header Detayları İçin Tablo Üzerinden Bir Yere Tıklayın
      </p>
    </div>
  </div>
</template>
