<script>
export default {
  setup() {
    return {
      drawer: ref(false),
    };
  },
};
</script>
<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="header q-header bg-header text-slate-600">
      <q-toolbar class="flex">
        <q-btn dense flat round icon="menu" @click="drawer = !drawer" />
        <q-toolbar-title class="text-h4">
          <NuxtLink to="/" class="heading no-underline">Cute Blog</NuxtLink>
        </q-toolbar-title>
        <SignOut />
        <MenuButtons />
        <ThemeSwitcher />
      </q-toolbar>
    </q-header>

    <q-drawer
      :width="200"
      :breakpoint="700"
      :show-if-above="false"
      v-model="drawer"
      side="left"
      bordered
    >
      <LazyMenu />
    </q-drawer>

    <q-page-container>
      <slot />
    </q-page-container>
    <q-footer elevated class="footer text-slate-600">
      <q-toolbar class="text-center">
        <q-toolbar-title class="flex justify-between pt-3">
          <LazyNuxtLink to="/feedback" class="fb-btn pr-6">
            <q-icon name="feedback" />
          </LazyNuxtLink>
          <p>
            <q-icon name="copyright" class="black" />
            Copyright by
            <strong>Cute Blog</strong>
          </p>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<style lang="scss" scoped>
.heading {
  color: black;
  text-decoration: none;
}
.header,
.footer {
  background-color: white;
}
.fb-btn {
  color: black;
}
.body--dark {
  .header,
  .footer {
    color: white;
    background-color: black;
  }
  .heading {
    color: whitesmoke;
  }
  .fb-btn {
    color: whitesmoke;
  }
}
.loginBtn {
  background-color: #04aa6d;
}
</style>
