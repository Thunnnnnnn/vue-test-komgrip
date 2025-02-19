<script lang="ts" setup>
import { IconUserFilled } from '@tabler/icons-vue';

function capitalizeFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
</script>

<template>
  <div class="row">
    <div class="col-9">
      <ol class="breadcrumb d-inline-flex mt-4 pt-2 mb-0 pb-1">
        <li class="breadcrumb-item active">Pages</li>
        <li class="breadcrumb-item">{{ $route.path !== '/' ? capitalizeFirstLetter($route.path.slice(1,
          $route.path.length)) : 'Dashboard' }}
        </li>
      </ol>
      <p class="fs-5 fw-medium">{{ $route.path !== '/' ? capitalizeFirstLetter($route.path.slice(1, $route.path.length))
        : 'Dashboard' }}</p>
    </div>
    <div class="col-3 mx-7 mt-4">
      <div class="d-flex">
        <IconUserFilled size="24px" />
        <div class="ms-2">
          <p class="">Phanuwit Hongsin</p>
        </div>
      </div>
    </div>
  </div>


</template>
