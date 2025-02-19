<script setup lang="ts">
import { RouterView } from 'vue-router'
import SidebarUi from './components/SidebarUi.vue';
import NavBar from './components/NavBar.vue';

</script>

<template>
  <div>
    <div class="row">
      <div class="col-2">
        <SidebarUi />

      </div>
      <div class="col-10">
        <div class="row">
          <div class="col-12">
            <NavBar />
          </div>
          <div class="col-12">
            <RouterView />
          </div>
        </div>

      </div>
    </div>
  </div>

</template>
