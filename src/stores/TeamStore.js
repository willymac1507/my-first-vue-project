import { defineStore } from "pinia";

export const useTeamStore = defineStore("team", {
  state() {
    return {
      name: "",
      spots: 0,
      members: [],
    };
  },
  actions: {
    async fill() {
      let r = await import("@/team.json");
      this.$state = r.default;
    },
  },
});
