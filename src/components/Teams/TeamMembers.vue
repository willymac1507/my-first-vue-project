<template>
  <table class="table-fixed border-spacing-2 border-separate">
    <thead>
      <th class="text-left px-6 py-2">Name</th>
      <th class="text-left px-6 py-2">Email</th>
      <th class="text-left px-6 py-2">Status</th>
    </thead>
    <tbody>
      <TeamMember
        v-for="member in team.members"
        :key="member.name"
        :name="member.name"
        :email="member.mail"
        :status="member.status"
      />
    </tbody>
  </table>
  <p
    v-show="team.members.length === team.spots"
    class="text-right text-gray-600 italic"
  >
    There are no remaining team spots. Upgrade to add more.
  </p>
</template>

<script setup>
import TeamMember from "@/components/Teams/TeamMember.vue";
import { useTeamStore } from "@/stores/TeamStore.js";
let team = useTeamStore();
</script>

<style scoped></style>
