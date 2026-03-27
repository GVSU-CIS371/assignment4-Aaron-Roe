<template>
  <div class="baseBeverage" :style="baseStyle"></div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { currentBase } from "../stores/beverage";

const baseStyle = computed(() => {
  if (currentBase.value.name === "Coffee") {
    return { background: "linear-gradient(to bottom, #7f5d45 0%, #6f4e37 60%, #654734 100%)" };
  }

  if (currentBase.value.name === "Green Tea") {
    return { background: "linear-gradient(to bottom, #d6f0d5 0%, #c8e6c9 60%, #b5d8b6 100%)" };
  }

  if (currentBase.value.name === "Black Tea") {
    return { background: "linear-gradient(to bottom, #9b5a27 0%, #8b4513 60%, #73380f 100%)" };
  }

  return { backgroundColor: currentBase.value.color };
});
</script>
<style scoped>
.baseBeverage {
  position: relative;
  width: 100%;
  height: 100%;
  bottom: 0;
  animation: pour-tea 2s;
  z-index: 300;
  transition: background-color 0.25s ease, background 0.25s ease;
  /* // border-radius: 0.05em 0.05em 2.2em 2.2em; */
}
</style>
