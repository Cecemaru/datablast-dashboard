<script setup lang="ts">
import VerticalNavbar from '@/components/layout/ui/VerticalNavbar.vue'
import HeaderNavbar from './ui/HeaderNavbar.vue'
</script>

<template>
  <div class="d-flex bg-secondary-subtle">
    <div class="d-none d-lg-block w-25">
      <div class="border vh-100 sticky-top bg-white">
        <VerticalNavbar />
      </div>
    </div>

    <div class="w-100 mx-3">
      <HeaderNavbar />
      <router-view></router-view>
    </div>
  </div>
</template>
