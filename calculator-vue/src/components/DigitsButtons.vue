<template>
  <button
    @click="emitDigit"
    class="grid place-items-center text-xl group"
  >
    <template v-if="digit === '-'">
      <i class="bi bi-plus-slash-minus"></i>
    </template>
    <template v-else>
      <span class="group-active:scale-75">
        {{ digit }}
      </span>
    </template>
  </button>
</template>

<script>
export default {
  props: {
    digit: {
      type: String,
      required: true,
    },
  },
  methods: {
    emitDigit() {
      this.$emit("press", this.digit);
    },
  },
};
</script>
