<script setup>
const client = useSupabaseClient();
const user = useSupabaseUser();
const email = ref("");
const password = ref("");
const isSignUp = ref(false);
const errorMsg = ref(null);
const successMsg = ref(null);

const signUp = async () => {
  try {
    const { user, error } = await client.auth.signUp({
      email: email.value,
      password: password.value,
    });
    if (error) throw error;
    successMsg.value = "Check your email to confrim your account.";
  } catch (error) {
    errorMsg.value = error.message;
  }
};

const logIn = async () => {
  try {
    const { user, error } = await client.auth.signUp({
      email: email.value,
      password: password.value,
    });
    if (error) throw error;
    successMsg.value = "Check your email to confrim your account.";
  } catch (error) {
    errorMsg.value = error.message;
  }
};
onMounted(() => {
  watchEffect(() => {
    if (user.value) {
      navigateTo("/blog");
    }
  });
});
</script>
<template>
  <q-page class="row justify-center items-center">
    <div class="column q-pa-lg">
      <div class="row">
        <q-form
          @submit.prevent="() => (isSignUp ? signUp() : logIn())"
          class="flex flex-col gap-2"
        >
          <q-input
            type="email"
            placeholder="Email"
            outlined
            rounded-md
            v-model="email"
            class="text-xl"
          />
          <q-input
            type="password"
            placeholder="Password"
            outlined
            rounded-md
            v-model="password"
            class="text-xl"
          />
          <q-btn
            type="submit"
            outlined
            rounded-md
            class="text-xl bg-green-400 flex align-middle"
          >
            <span v-if="isSignUp">Sign Up</span>
            <span v-else>Log In</span>
          </q-btn>
          <q-btn
            @click="isSignUp = !signUp"
            class="w-full mt-8 text-sm text-center underline text-slate-300"
          >
            <span v-if="isSignUp">Have an account? Log in instead</span>
            <span v-else>Create a new account</span>
          </q-btn>
        </q-form>
      </div>
    </div>
  </q-page>
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
