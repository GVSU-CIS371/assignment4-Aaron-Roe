import { defineStore } from "pinia";
import bases from "../data/bases.json";
import creamers from "../data/creamers.json";
import syrups from "../data/syrups.json";
import tempretures from "../data/tempretures.json";
import type { BaseBeverageType, BeverageType, CreamerType, SyrupType } from "../types/beverage";

export const useBeverageStore = defineStore("BeverageStore", {
  state: () => ({
    temps: tempretures,
    currentTemp: tempretures[0],
    bases: bases as BaseBeverageType[],
    creamers: creamers as CreamerType[],
    syrups: syrups as SyrupType[],
    currentBase: bases[0] as BaseBeverageType,
    currentCreamer: creamers[0] as CreamerType,
    currentSyrup: syrups[0] as SyrupType,
    beverages: [] as BeverageType[],
  }),

  actions: {
    makeBeverage(name: string) {
      const beverageName = name.trim() || `Beverage ${this.beverages.length + 1}`;

      const newBeverage: BeverageType = {
        id: `bev-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
        name: beverageName,
        temp: this.currentTemp,
        base: { ...this.currentBase },
        syrup: { ...this.currentSyrup },
        creamer: { ...this.currentCreamer },
      };

      this.beverages.push(newBeverage);
    },
    showBeverage(beverageId: string) {
      const selectedBeverage = this.beverages.find((beverage) => beverage.id === beverageId);

      if (!selectedBeverage) {
        return;
      }

      this.currentTemp = selectedBeverage.temp;
      this.currentBase = selectedBeverage.base;
      this.currentSyrup = selectedBeverage.syrup;
      this.currentCreamer = selectedBeverage.creamer;
    },
  },
});
