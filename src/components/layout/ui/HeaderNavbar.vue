<script setup lang="ts">
import NotificationIcon from '@/components/icons/NotificationIcon.vue'
import VerticalNavbar from './VerticalNavbar.vue'
</script>

<template>
  <div class="my-3 rounded-4 bg-white">
    <nav class="navbar p-2 d-flex justify-content-between">
      <div class="d-flex align-items-center">
        <h4 class="mt-1">Dashboard</h4>
      </div>

      <ul class="nav justify-content-end">
        <li class="nav-item">
          <a class="nav-link text-black" href="#">
            <NotificationIcon />
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false"
            ><img
              class="avatar"
              src="https://avatars.githubusercontent.com/u/94255188?v=4"
              alt="avatar"
          /></a>
        </li>

        <button
          class="navbar-toggler d-lg-none"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon text-black"></span>
        </button>
      </ul>

      <div
        class="offcanvas offcanvas-end"
        tabindex="-2"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Datablast.io</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body"><VerticalNavbar /></div>
      </div>
    </nav>
  </div>
</template>

<style scoped>
.avatar {
  width: 30px;
  height: 30px;
  border-radius: 50%;
}
</style>
