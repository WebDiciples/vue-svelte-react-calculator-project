<template>
  <header>
    <button
      @click="toggleMode()"
      class="p-2 bg-color-60 dark:bg-dark-color-60 rounded-xl w-10 aspect-square shadow-current"
    >
      <template v-if="dark == true">
        <i class="bi bi-moon"></i>
      </template>
      <template v-else>
        <i class="bi bi-sun"></i>
      </template>
    </button>
  </header>
</template>

<script>
export default {
  props: {
    dark: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    toggleMode() {
      const newDarkMode = !this.dark;
      this.$emit("update:dark", newDarkMode); // Emit to update parent state
      this.saveModePreference(newDarkMode); // Save to localStorage
    },
    saveModePreference(isDark) {
      localStorage.setItem("darkMode", isDark ? "true" : "false");
      document.documentElement.classList.toggle("dark", isDark); // Update Tailwind classes
    },
  },
  mounted() {
    // Initialize mode from localStorage on mount
    const savedMode = localStorage.getItem("darkMode");
    const prefersDark =
      savedMode === "true" ||
      (savedMode === null &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    this.saveModePreference(prefersDark); // Apply saved or default preference
  },
};
</script>
<style>
svg {
  width: 24px;
  height: 24px;
  fill: white;
  stroke: white;
}
</style>
