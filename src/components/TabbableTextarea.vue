<template>
  <textarea
    @keydown.tab.prevent="onTabPress"
    v-text="modelValue"
    @keyup="emit('update:modelValue', $event.target.value)"
  />
</template>

<script setup>
defineProps({
  modelValue: String,
});

let emit = defineEmits(["update:modelValue"]);

function onTabPress(e) {
  let textarea = e.target;
  // tab was pressed
  // get caret position/selection
  let val = textarea.value,
    start = textarea.selectionStart,
    end = textarea.selectionEnd;

  // set textarea value to: text before caret + tab + text after caret
  textarea.value = val.substring(0, start) + "\t" + val.substring(end);

  // put caret at right position again
  textarea.selectionStart = textarea.selectionEnd = start + 1;
}
</script>

<style scoped></style>
