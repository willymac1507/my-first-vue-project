import { defineStore } from "pinia";

/**
 * @typedef TeamStoreType
 * @type { actions | getters | state | import('pinia').Store }
 */
/**
 * @typedef useTeamStore
 * @type function
 * @param {import('pinia').Pinia | null | undefined} [pinia] - Pinia instance to retrieve the store
 * @param {import('pinia').StoreGeneric} [hot] - dev only hot module replacement
 * @returns TeamStoreType
 */
/**
 * @type useTeamStore
 */
export const useTeamStore = defineStore("team", {
  state: () => ({
    name: "",
    spots: 0,
    members: [],
  }),
  actions: {
    async fill() {
      let r = await import("@/team.json");
      this.$state = r.default;
    },
  },
  getters: {
    spotsRemaining() {
      return this.spots - this.members.length;
    },
  },
});
