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
    <TeamHeader @add="showModal = true" />
    <div class="flex justify-center p-5">
      <div class="place-self-center flex flex-col gap-y-3" style="width: 725px">
        <TeamMembers />
      </div>
    </div>

    <TeamFooter />
    <Teleport to="body">
      <ModalMessage @close="showModal = false" :show="showModal">
        <template #default>
          <p>Add a new member to the team.</p>
          <form class="mt-6">
            <div class="flex gap-2">
              <input
                class="flex-1"
                type="email"
                name="email"
                placeholder="Email Address..."
              />
              <button
                class="bg-blue-700 text-white hover:bg-blue-900 rounded-md py-1 px-2"
              >
                Add
              </button>
            </div>
          </form>
        </template>
      </ModalMessage>
    </Teleport>
  </main>
</template>

<style />