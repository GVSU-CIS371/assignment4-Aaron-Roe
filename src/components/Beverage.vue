<template>
  <Mug>
    <Cold v-if="isIced" />
    <Hot v-else />
    <Contents>
      <template v-if="hasCreamer" #top>
        <Creamer />
      </template>
      <template v-if="hasSyrup" #mid>
        <Syrup />
      </template>
      <template #bottom>
        <Base />
      </template>
    </Contents>
  </Mug>
</template>
<script setup lang="ts">
import { computed } from "vue";
import Contents from "./Contents.vue";
import Mug from "./Mug.vue";
import Syrup from "./Syrup.vue";
import Base from "./Base.vue";
import Creamer from "./Creamer.vue";
import Hot from "./Hot.vue";
import Cold from "./Cold.vue";
import { currentCreamer, currentSyrup } from "../stores/beverage";

type Props = { isIced: boolean };
defineProps<Props>();

const hasCreamer = computed(() => currentCreamer.value.id !== "c1");
const hasSyrup = computed(() => currentSyrup.value.id !== "s1");
</script>
