<template>
  <a href="javascript:void(0);" @click="handleAutoPlayAudio">📢</a>
</template>

<script setup lang="ts">
import { autoPlayAudio } from '../utils';
const props = defineProps({
  src: {
    type: String,
    default: ''
  }
})
const handleAutoPlayAudio = () => {
  autoPlayAudio(props.src)
}
</script>

<style>

</style>