<script setup lang="ts">
import { RouterView } from 'vue-router'
import SidebarUi from './components/SidebarUi.vue';
import NavBar from './components/NavBar.vue';

</script>

<template>
  <div>
    <div class="row">
      <div class="col-xl-2 col-4">
        <SidebarUi />
        <div class="position-absolute bottom-0 ms-4 mb-5 pb-5">
          <div class="card text-bg-dark" style="border: 0; width: 240px; height: 100px; border-radius: 30px;">
            <img src="/src/assets/abstract-white-and-gray-gradient-background-illustration-vector.jpg"
              style="border-radius: 20px;" class="card-img" alt="...">
            <div class="card-img-overlay">
              <div>
                <span style="font-size: 20px;">Need help?</span>
              </div>
              <div>
                <span style="font-size: 12px">CoinCap API 2.0</span>
              </div>
              <div class="mt-4 d-grid gap-2">
                <button class="btn btn-light" type="button">Documentation</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-10 cold-8">
        <div class="row">
          <div class="col-12">
            <NavBar />
          </div>
          <div class="col-12">
            <RouterView />
          </div>
          <div class="col-12 my-5"></div>
          <div class="col-12 ps-5">
            <span class="text-body-secondary" style="font-size: 14px;">
              Copyright © 2022 Komgrip Technologies Co., Ltd.
            </span>
          </div>
        </div>

      </div>
    </div>


  </div>

</template>
