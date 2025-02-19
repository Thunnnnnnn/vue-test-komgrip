<script lang="ts" setup>
import { formatNumber } from '@/helper/formatNumber';

const props = defineProps<{
  assets: {
    id: string;
    name: string;
    symbol: string;
    supply: string;
    maxSupply: string;
    priceUsd: string;
    changePercent24Hr: string;
  }[];
  no: number;
}>();
</script>

<template>
  <table class="table mt-2 mb-1">
    <thead>
      <tr class="text-body-secondary text-reset">
        <th></th>
        <th scope="col">NO.</th>
        <th scope="col">NAME</th>
        <th scope="col">SYMBOL</th>
        <th scope="col">SPPLY/MAX SUPPLY</th>
        <th scope="col">USD</th>
        <th scope="col">24 HR.</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(asset, index) in props.assets" :key="asset.id">
        <td></td>
        <td>{{ (props.no + index) + 1 }}.</td>
        <td>{{ asset.name }}</td>
        <td>{{ asset.symbol }}</td>
        <td>{{ formatNumber(Number(asset.supply)) }} / {{ formatNumber(Number(asset.maxSupply)) }}</td>
        <td>{{ Number(asset.priceUsd).toFixed(2) }}</td>
        <td class="text-success" v-if="Number(asset.changePercent24Hr) > 0">+{{
          Number(asset.changePercent24Hr).toFixed(2) }} %</td>
        <td class="text-danger" v-else>{{
          Number(asset.changePercent24Hr).toFixed(2) }} %</td>
        <td></td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
th {
  font-weight: 400;
  color: #a1aab3;
}

td {
  font-weight: 280;
  color: #a1aab3;
}
</style>
