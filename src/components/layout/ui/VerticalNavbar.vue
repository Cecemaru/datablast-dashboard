<script setup lang="ts">
import Logo from '@/assets/datablast.png'
</script>

<template>
  <div class="bg-white">
    <div class="p-4 my-2">
      <router-link class="" to="/"><img v-bind:src="Logo" alt="Logo" /></router-link>
    </div>

    <nav class="d-flex justify-content-center">
      <div class="list-group col-11">
        <router-link class="list-group-item" to="/">Home</router-link>

        <router-link class="list-group-item" to="/login">Login</router-link>

        <router-link class="list-group-item" to="/profile">Profile</router-link>
      </div>
    </nav>
  </div>
</template>
