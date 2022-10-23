<template>
  <router-link to="">
    <img src="/vite.svg" class="logo" alt="Vite logo" />
  </router-link>
  <router-link to="">
    <img
      src="@hydrated-apps/dearqi/assets/vue.svg"
      class="logo vue"
      alt="Vue logo"
    />
  </router-link>
</template>

<script lang="ts" setup>
import { RouterLink } from 'vue-router';
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
