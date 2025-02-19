<template>
  <button
    @click="emit_operator"
    class="grid place-items-center text-color-10 dark:text-dark-color-10 text-xl group"
    :class="[
      operator == '='
        ? 'bg-color-10 dark:bg-dark-color-10 text-white dark:text-white rounded'
        : '',
    ]"
  >
    <span class="group-active:scale-75">
      {{ operator }}
    </span>
  </button>
</template>
<script>
export default {
  props: {
    operator: {
      type: String,
      require: true,
    },
  },
  methods: {
    emit_operator() {
      this.$emit("press", this.operator);
    },
  },
};
</script>
