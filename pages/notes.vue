<script setup>
definePageMeta({
  middleware: ['auth']
})
const user = useSupabaseUser()
onMounted(() => {
  watchEffect(()=>{
    if(!user.value){
      navigateTo('/')
    }
  })
})
</script>
<template>
  <div class="text-h3 q-pa-md">Hi</div>
</template>