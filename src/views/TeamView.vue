<script setup>
import TeamHeader from "@/components/Teams/TeamHeader.vue";
import TeamMembers from "@/components/Teams/TeamMembers.vue";
import TeamFooter from "@/views/TeamFooter.vue";
import { useTeamStore } from "@/stores/TeamStore.js";
import ModalMessage from "@/components/ModalMessage.vue";
import { ref } from "vue";

let team = useTeamStore();
let showModal = ref(false);

team.fill();
</script>

<template>
  <main class="p-5">
    <TeamHeader />
    <div class="flex justify-center p-5">
      <div class="place-self-center flex flex-col gap-y-3" style="width: 725px">
        <TeamMembers />
      </div>
    </div>

    <TeamFooter />
    <ModalMessage :show="showModal" />
  </main>
</template>

<style />
