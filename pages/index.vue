<script setup>
import { ref } from "vue";

const { data: api } = await useFetch("/api/hello?param1=huerik", {
  method: "post",
  body: { test:123 }
}) 

const info = ref(api);
</script>

<template>
  <div class="text-h3 q-pa-md">Home</div>
  <div class="text-center text-h3">
    {{ info }}
  </div>
</template>

<style>
.my-card {
  max-width: auto;
  margin: 0 20px;
}
</style>
