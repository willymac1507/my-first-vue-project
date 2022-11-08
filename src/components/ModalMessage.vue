<script setup>
defineProps({
  show: Boolean,
});
</script>

<template>
  <Transition
    enter-from-class="opacity-0 scale-125"
    enter-active-class="transition duration-300"
    leave-active-class="transition duration-300"
    leave-to-class="opacity-0 scale-125"
  >
    <div
      v-if="show"
      class="fixed inset-0 bg-black bg-opacity-60 grid place-items-center"
    >
      <div class="bg-white p-4 w-4/5 max-w-lg rounded-md">
        <div>
          <slot>Default Body</slot>
        </div>
        <footer class="mt-4 pt-2 text-xs border-t border-t-gray-300">
          <slot name="footer">
            <button
              class="hover:text-white bg-gray-300 rounded-md p-2.5 hover:bg-gray-400"
              @click="$emit('close')"
            >
              Close
            </button>
          </slot>
        </footer>
      </div>
    </div>
  </Transition>
</template>

<style />
