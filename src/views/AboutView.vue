<script setup>
import { useFlash } from "@/composables/useFlash";
import { useCounterStore} from "@/stores/CounterStore.js";

let { flash } = useFlash();
let counter = useCounterStore();
counter.increment();
</script>

<template>
  <div class="about">
    <p>
      <button @click="counter.increment()">Click Me</button>
    </p>
  </div>
</template>

