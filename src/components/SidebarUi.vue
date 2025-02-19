<script setup lang="ts">
import { IconHome } from '@tabler/icons-vue';

</script>

<template>
  <div class="pt-5"></div>
  <div class="grid gap-0 column-gap-0 d-flex align-items-end">
    <div class="p-2 g-col-3">
      <img src="../assets/logo.png" alt="Logo" style="height: 50px; width: 50px;" />
    </div>
    <div class="p-2 g-col-8 ">
      <p class="fs-5 fw-medium">Komgrip Technologies</p>
    </div>
  </div>

  <p class="logo-container">
  </p>

  <div class="p-2">

    <ul class="nav flex-column">
      <div class="card" v-if="$route.path === '/'">
        <li class="nav-item">
          <a class="nav-link active d-flex align-items-end text-reset" aria-current="page" href="/">
            <div class="p-1 d-flex align-items-start align-self-center badge" style="background-color: #cb0d9f;">
              <IconHome />
            </div>
            <div class="d-flex align-items-start p-2 align-self-center">
              Dashboard
            </div>
          </a>
        </li>
      </div>
      <li class="nav-item" v-else>
        <a class="nav-link active text-bg-white" aria-current="page" href="/">
          <IconHome></IconHome> Dashboard
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="test">Menu 1</a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.logo-container {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 10px;
  background: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(128, 128, 128, 0.5), rgba(0, 0, 0, 0));
  margin: 0 auto;
  border-radius: 1px;

  opacity: 0.7;

}
</style>
