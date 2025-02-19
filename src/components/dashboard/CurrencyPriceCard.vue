<script setup lang="ts">
import { IconCash } from '@tabler/icons-vue';
import type { Coincap } from '@/interface/coincap';

const props = defineProps<{
  asset: Coincap;
}>();
</script>

<template>
  <div class="card" style="border: 0;">
    <div class="container">
      <div class="row">
        <div class="col-12 d-flex justify-content-between">
          <div class="px-2 pt-2 d-flex-inline">
            <p class="text-body-secondary pt-2 mb-0">{{ props.asset.name }}</p>
            <p class="fs-4 fw-semibold mt-0">$ {{ Number(props.asset.priceUsd).toFixed(2) }}</p>
          </div>
          <div class="px-2 pt-2 pb-0">
            <div class="card shadow-none pt-2" style="border: 0; background: ">
              <a class="nav-link active d-flex align-items-end text-reset" aria-current="page" href="/">
                <div class="p-1 d-flex align-items-start align-self-center badge"
                  style="background: linear-gradient(135deg, #ff007a, #6c00ff); border-radius: 8px;">
                  <IconCash width="48px" height="48px" />
                </div>
              </a>
            </div>
          </div>
        </div>
        <div class="col-12 d-flex justify-content-start pb-3 ps-4">
          <span class="fs-6 fw-semibold mt-0 text-success" v-if="Number(props.asset.changePercent24Hr) > 0">{{
            Number(props.asset.changePercent24Hr).toFixed(2) }}
            %</span>
          <span class="fs-6 fw-semibold mt-0 text-danger" v-else>{{
            Number(props.asset.changePercent24Hr).toFixed(2).split('-')[1] }}
            %</span>
        </div>
      </div>
    </div>
  </div>
</template>
