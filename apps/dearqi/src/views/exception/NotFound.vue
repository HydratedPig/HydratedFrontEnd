<template>
  <div class="not-found">
    404! 这是一片没有知识的荒原，返回<router-link to="/">首页</router-link>
  </div>
</template>

<script lang="ts" setup>
import { RouterLink } from 'vue-router';
</script>

<style scoped>
.not-found {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
