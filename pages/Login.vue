<script setup>
const email = ref("");
const password = ref("");
const isSignUp = ref(false);
const user = useSupabaseUser();
const client = useSupabaseClient();
const signup = async () => {
  const { user, error } = await client.auth.signUp({
    email: email.value,
    password: password.value,
  });
  console.log("error", error);
};

const login = async () => {
  const { user, error } = await client.auth.signInWithOtp({
    email: email.value,
  });
  console.log("error", error);
};

onMounted(() => {
  watchEffect(() => {
    if (user.value) {
      navigateTo("/notes");
    }
  });
});
</script>

<template>
  <div class="max-w-lg mx-auto mt-8">
    <h1 class="text-3xl font-black">LearnVue Nuxt Demo</h1>
    <p class="mt-4">
      Welcome to the LearnVue Nuxt demo. Any YouTube tutorials relating to Nuxt
      will be made to this project.
    </p>
    <form
      @submit.prevent="() => (isSignUp ? signup() : login())"
      class="flex flex-col gap-2 mt-16"
    >
      <input
        type="email"
        placeholder="Email"
        v-model="email"
        class="p-2 rounded bg-charcoal-600"
      />
      <input
        type="password"
        placeholder="Password"
        v-model="password"
        class="p-2 rounded bg-charcoal-600"
      />
      <button
        type="submit"
        class="p-2 font-medium bg-green-500 rounded hover:bg-green-400"
      >
        <span v-if="isSignUp"> Sign up </span>
        <span v-else> Log in </span>
      </button>
    </form>
    <button
      @click="isSignUp = !isSignUp"
      class="w-full mt-8 text-sm text-center underline"
    >
      <span v-if="isSignUp"> Have an account? Log in instead </span>
      <span v-else> Create a new account </span>
    </button>
  </div>
</template>
