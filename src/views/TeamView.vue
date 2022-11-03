<template>
  <main class="p-5">
    <TeamHeader />
    <div class="flex justify-center p-5">
      <div class="place-self-center flex flex-col gap-y-3" style="width: 725px">
        <TeamMembers />
      </div>
    </div>

    <TeamFooter />
  </main>
</template>

<script setup>
import TeamHeader from "@/components/Teams/TeamHeader.vue";
// import team from "@/team.json";
import TeamMembers from "@/components/Teams/TeamMembers.vue";
import TeamFooter from "@/views/TeamFooter.vue";
import { useTeamStore } from "@/stores/TeamStore.js";
let team = useTeamStore();

team.fill();
</script>
