<template>
  <div>
    <Beverage :isIced="currentTemp === 'Cold'" />

    <ul>
      <li>
        <template v-for="temp in temps" :key="temp">
          <label>
            <input
              type="radio"
              name="temperature"
              :id="`r${temp}`"
              :value="temp"
              v-model="currentTemp"
            />
            {{ temp }}
          </label>
        </template>
      </li>

      <li>
        <template v-for="base in bases" :key="base.id">
          <label>
            <input
              type="radio"
              name="base"
              :id="base.id"
              :value="base"
              v-model="currentBase"
            />
            {{ base.name }}
          </label>
        </template>
      </li>

      <li>
        <template v-for="syrup in syrups" :key="syrup.id">
          <label>
            <input
              type="radio"
              name="syrup"
              :id="syrup.id"
              :value="syrup"
              v-model="currentSyrup"
            />
            {{ syrup.name }}
          </label>
        </template>
      </li>

      <li>
        <template v-for="creamer in creamers" :key="creamer.id">
          <label>
            <input
              type="radio"
              name="creamer"
              :id="creamer.id"
              :value="creamer"
              v-model="currentCreamer"
            />
            {{ creamer.name }}
          </label>
        </template>
      </li>

      <li>
        <label for="bev-name">Name</label>
        <input id="bev-name" type="text" v-model="beverageName" />
        <button type="button" @click="handleMakeBeverage">Make Beverage</button>
      </li>
    </ul>

    <div id="beverage-container">
      <label v-for="beverage in beverages" :key="beverage.id">
        <input
          type="radio"
          name="saved-beverage"
          :value="beverage.id"
          v-model="selectedBeverageId"
          @change="beverageStore.showBeverage(beverage.id)"
        />
        {{ beverage.name }}
      </label>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { storeToRefs } from "pinia";
import Beverage from "./components/Beverage.vue";
import { useBeverageStore } from "./stores/beverageStore";

const beverageStore = useBeverageStore();
const { bases, beverages, creamers, currentBase, currentCreamer, currentSyrup, currentTemp, syrups, temps } = storeToRefs(beverageStore);

const beverageName = ref("");
const selectedBeverageId = ref("");

const handleMakeBeverage = () => {
  beverageStore.makeBeverage(beverageName.value);
  beverageName.value = "";

  const latestBeverage = beverages.value[beverages.value.length - 1];

  if (!latestBeverage) {
    return;
  }

  selectedBeverageId.value = latestBeverage.id;
};
</script>

<style lang="scss">
body,
html {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: #6e4228;
  background: linear-gradient(to bottom, #6e4228 0%, #956f5a 100%);
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

li {
  margin-top: 0.25rem;
}

label {
  margin-right: 0.5rem;
}
</style>
