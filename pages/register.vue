<script setup>
const user = useSupabaseUser()
</script>

<template>
  <div class="container" style="padding: 50px 0 100px 0">
    <Account v-if="user" />
    <Auth v-else />
  </div>
</template>
<style lang="scss" scoped>
.animatedGradient {
  background: linear-gradient(-45deg, #ed193b, #ffed5e, #583453, #4a40d6);
  background-size: 400% 400%;
  animation: gradient 10s ease infinite;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
