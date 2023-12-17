<script setup lang="ts">
import GithubIcon from '@/components/icons/GithubIcon.vue'
import NotificationIcon from '@/components/icons/NotificationIcon.vue'
</script>

<template>
  <div class="my-3 rounded-4 bg-white">
    <nav class="p-2 d-flex justify-content-between">
      <div class="d-flex align-items-center">
        <h4 class="mt-1">Dashboard</h4>
      </div>

      <ul class="nav justify-content-end">
        <li class="nav-item">
          <a class="nav-link text-black" href="#">
            <GithubIcon />
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-black" href="#">
            <NotificationIcon />
          </a>
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            data-bs-toggle="dropdown"
            href="#"
            role="button"
            aria-expanded="false"
            ><img
              class="avatar"
              src="https://avatars.githubusercontent.com/u/94255188?v=4"
              alt="avatar"
          /></a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Profile</a></li>
            <li><a class="dropdown-item" href="#">Setting</a></li>
            <li><a class="dropdown-item" href="#">FAQ</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">Logout</a></li>
          </ul>
        </li>
      </ul>
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
