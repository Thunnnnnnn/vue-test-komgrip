<script setup lang="ts">
import { IconCash } from '@tabler/icons-vue';
</script>

<template>
  <div class="card" style="border: 0;">
    <div class="container">
      <div class="row">
        <div class="col-12 d-flex justify-content-between">
          <div class="p-2 d-flex-inline">
            <p class="text-body-secondary pt-2 mb-0">Bitcoin</p>
            <p class="fs-4 fw-semibold mt-0">฿ 0.00000000</p>
          </div>
          <div class="p-2">
            <div class="card shadow-none pt-2" style="border: 0; min-height: 48px; min-width: 48px;">
              <a class="nav-link active d-flex align-items-end text-reset" aria-current="page" href="/">
                <div class="p-1 d-flex align-items-start align-self-center badge" style="background-color: #cb0d9f;">
                  <IconCash width="48px" height="48px" />
                </div>
              </a>
            </div>
          </div>
        </div>
        <div class="col-12 d-flex pb-3">
          <span class="fs-6 fw-semibold mt-0">1.32%</span>
        </div>
      </div>
    </div>
  </div>
</template>
