<script setup>
const client = useSupabaseClient();

const signout = async () => {
  const { error } = await client.auth.signOut();
  if (error) {
    return;
  }
  await navigateTo("/signup");
};
</script>

<template>
  <div class="py-4">
    <q-btn class="btnLogOut" flat @click="signout"> Signout </q-btn>
  </div>
</template>
<style lang="scss" scoped>
.btnLogOut {
  color: black;
}
.body--dark {
  .btnLogOut {
    color: white;
  }
}
</style>
