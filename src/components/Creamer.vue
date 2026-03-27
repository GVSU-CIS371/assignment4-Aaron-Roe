<template>
  <div class="froth">
    <div v-for="index in 5" :key="index" class="foam" :style="foamStyle"></div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { currentCreamer } from "../stores/beverage";

const foamColor = computed(() => {
  if (currentCreamer.value.name === "No Cream") {
    return "transparent";
  }

  if (currentCreamer.value.name === "Milk") {
    return "#ecf2f7";
  }

  if (currentCreamer.value.name === "Cream") {
    return "#f8f4e7";
  }

  if (currentCreamer.value.name === "Half & Half") {
    return "#fff4d8";
  }

  return "#e4e0d2";
});

const foamStyle = computed(() => ({ backgroundColor: foamColor.value }));
</script>
<style lang="scss" scoped>
.froth {
  overflow: visible;
  transform: translateY(400%);
  position: relative;
  height: 20%;
  width: 100%;
  background-color: #c6c6c6;
  animation: pour-tea 2s 2s forwards;
  transition: background-color 0.25s ease;
}

.foam {
  display: block;
  border-radius: 30px;
  height: 40px;
  width: 40px;
  position: absolute;
  transition: background-color 0.25s ease;
}

.foam:nth-child(1) {
  top: 0px;
  left: -3px;
}

.foam:nth-child(2) {
  top: 0px;
  left: 55px;
}

.foam:nth-child(3) {
  width: 30px;
  height: 30px;
  border-radius: 40px;
  top: 3px;
  left: 30px;
}

.foam:nth-child(4) {
  width: 30px;
  height: 30px;
  border-radius: 45px;
  top: 5px;
  right: -2px;
}

.foam:nth-child(5) {
  top: 2px;
  right: 10px;
}
</style>
