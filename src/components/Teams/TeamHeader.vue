<template>
  <header class="flex justify-between">
    <div>
      <button
        @click="$emit('add')"
        class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded disabled:bg-gray-400"
        :disabled="!team.spotsRemaining"
      >
        Add Member ({{ team.spotsRemaining }} Spots Left)
      </button>
    </div>

    <div>
      <h3 class="inline-flex items-center text-3xl relative">
        <img src="@/assets/smiley.jpeg" alt="" class="mr-2" width="50" />
        {{ team.name }} Team
        <span
          class="bg-green-400 w-5 h-5 text-xs text-white rounded-full flex justify-center items-center ml-1"
        >
          {{ team.spots }}
        </span>
      </h3>
    </div>
  </header>
</template>

<script setup>
import { useTeamStore } from "@/stores/TeamStore.js";
let team = useTeamStore();
</script>
<style scoped />
