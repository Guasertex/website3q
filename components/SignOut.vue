<script setup>
const supabase = useSupabaseAuthClient();

const signout = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) {
    return;
  }
  await navigateTo('/login');
};
</script>

<template>
  <div class="py-4 ">

      <q-btn
        rounded
        class="w-auto px-4 py-2 font-semibold text-white bg-red-600 rounded hover:bg-red-700"
        @click="signout"
      >
        Signout
      </q-btn>
  </div>
</template>
