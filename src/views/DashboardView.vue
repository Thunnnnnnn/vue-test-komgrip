<script setup lang="ts">
import CurrencyPriceCard from '@/components/dashboard/CurrencyPriceCard.vue';
import CurrencyPriceTable from '@/components/dashboard/CurrencyPriceTable.vue';
import { useCoincapStore } from '@/stores/coincap';
import { onMounted, ref } from 'vue';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-vue';

const coincap = useCoincapStore();
const limit = ref<number>(5);
const offset = ref<number>(0);

const nextItems = () => {

  offset.value += 5;

  coincap.getAllAssets(limit.value, offset.value);
};

const prevItems = () => {
  if (offset.value < 5) {
    offset.value = 195;
  } else {
    offset.value -= 5;
  }
  coincap.getAllAssets(limit.value, offset.value);
};

onMounted(async () => {
  coincap.getAllAssets(limit.value, offset.value)
  coincap.getFourAssetsCard()
});
</script>

<template>
  <div class="row pe-4 mt-4 pt-1">
    <div v-if="coincap.isLoadingCard" class="col-12">

      <p class="placeholder-wave">
        <span class="placeholder col-12 placeholder"></span>
      </p>

      <p class="placeholder-wave">
        <span class="placeholder col-12 placeholder-sm"></span>
      </p>

      <p class="placeholder-wave">
        <span class="placeholder col-12 placeholder-xs"></span>
      </p>
    </div>
    <div v-else v-for="asset in coincap.fourAssetsCard" :key="asset.id" class="col-3">
      <CurrencyPriceCard :asset="asset" />
    </div>

    <div class="col-12 mt-4">
      <div class="card" style="border: 0;" :aria-hidden="coincap.isLoadingTable">
        <div class="row">
          <div class="col-12">
            <div class="d-flex justify-content-between ms-2">
              <div class="p-2 d-flex
                justify-content-between">
                <p class="fs-5 ms-2 my-3 fw-medium">Cryptocurrency</p>
              </div>
              <div class="p-2 d-flex">
                <button type="button" class="btn btn-outline m-2" style="border-color: #cb0d9f;" @click="prevItems">
                  <IconChevronLeft class="mx-3" color="#cb0d9f" />
                </button>
                <button type="button" class="btn btn-outline m-2" style="border-color: #cb0d9f;" @click="nextItems">
                  <IconChevronRight class="mx-3" color="#cb0d9f" />
                </button>
              </div>
            </div>

          </div>
          <div class="col-12">
            <div v-if="!coincap.isLoadingTable">
              <CurrencyPriceTable :assets="coincap.assets" :no="offset" />
            </div>
            <div v-else class="m-5">
              <p class="placeholder-glow">
                <span class="placeholder col-12 placeholder-lg"></span>
              </p>
              <p class="placeholder-wave">
                <span class="placeholder col-12 placeholder"></span>
              </p>

              <p class="placeholder-wave">
                <span class="placeholder col-12 placeholder-sm"></span>
              </p>

              <p class="placeholder-wave">
                <span class="placeholder col-12 placeholder-xs"></span>
              </p>

              <p class="placeholder-wave">
                <span class="placeholder col-12 placeholder-xs"></span>
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
