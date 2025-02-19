<script setup lang="ts">
import CurrencyPriceCard from '@/components/dashboard/CurrencyPriceCard.vue';

import { getFourAssetsCard } from '../services/coincap';
import { onMounted, ref } from 'vue';
import type { Coincap } from '@/interface/coincap';

const assets = ref<Coincap[]>([]);

onMounted(async () => {
  assets.value = await getFourAssetsCard();

  console.log(assets.value);
});
</script>

<template>
  <div class="row pe-4 mt-4 pt-1">
    <div v-for="asset in assets" :key="asset.id" class="col-3">
      <CurrencyPriceCard :asset="asset" />
    </div>
  </div>
</template>
