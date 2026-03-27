<template>
  <div class="syrup" :style="syrupStyle"></div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { currentSyrup } from "../stores/beverage";

const syrupStyle = computed(() => {
  if (currentSyrup.value.name === "Vanilla") {
    return { background: "repeating-linear-gradient(45deg, #f1e4c2 0px, #f1e4c2 10px, #d9c38c 10px, #d9c38c 20px)" };
  }

  if (currentSyrup.value.name === "Caramel") {
    return { background: "repeating-linear-gradient(45deg, #f4ebcd 0px, #f4ebcd 10px, #d3a12a 10px, #d3a12a 20px)" };
  }

  if (currentSyrup.value.name === "Hazelnut") {
    return { background: "repeating-linear-gradient(45deg, #5f3f27 0px, #5f3f27 10px, #e1cf95 10px, #e1cf95 20px)" };
  }

  return { backgroundColor: currentSyrup.value.color };
});
</script>
<style lang="scss" scoped>
.syrup {
  transform: translateY(400%);
  position: relative;
  width: 100%;
  height: 20%;
  animation: pour-tea 2s 1s forwards;
  z-index: 2;
  transition: background-color 0.25s ease, background 0.25s ease;
}
</style>
