<script>
import Header from "./components/Header.vue";
import Display from "./components/Display.vue";
import DigitsButtons from "./components/DigitsButtons.vue";
import OperatorsButtons from "./components/OperatorsButtons.vue";

export default {
  components: {
    Header,
    Display,
    DigitsButtons,
    OperatorsButtons,
  },
  data() {
    return {
      digits: ["1", "2", "3", "4", "5", "6", "7", "8", "9", `-`, "0", "."],
      operators: ["+", "-", "*", "/", "="],
      current: "",
      computeResult: "",
      is_active: "",
    };
  },
  methods: {
    calculate() {
      this.computeResult = eval(this.current).toLocaleString("fr-FR");
    },
    updateCurrent(param) {
      // If "=" is clicked, evaluate the expression
      if (param === "=") {
        this.current = "";
        this.calculate();
        return;
      }

      // Prevent multiple consecutive operators
      const lastChar = this.current.slice(-1);
      if (
        ["+", "-", "*", "/", "."].includes(param) &&
        ["+", "-", "*", "/", "."].includes(lastChar)
      ) {
        return; // Ignore the new operator
      }

      // Prevent starting with an operator (except "-")
      if (this.current === "" && ["+", "*", "/", "."].includes(param)) {
        return;
      }

      // Prevent adding multiple "." in the current number
      if (param === ".") {
        // Split the input by operators to get the current number segment
        const segments = this.current.split(/[\+\-\*\/]/);
        const lastSegment = segments[segments.length - 1];

        // Prevent adding "." if the last number already has one
        if (lastSegment.includes(".")) return;
      }
      // Add the input character to the current string
      this.current += param;
      this.calculate();
    },
    clearAllField() {
      this.current = "";
      this.computeResult = "";
    },
    backspace() {
      this.current = this.current.slice(0, -1);
      this.calculate();
    },
    updateDarkMode(newMode) {
      this.is_active = newMode;
    },
  },
};
</script>
<template>
  <section
    class="bg-color-30 dark:bg-dark-color-30 text-black dark:text-white h-2/5 p-2 grid"
  >
    <Header :dark="is_active" @update:dark="updateDarkMode" />
    <Display :number="current" :result="computeResult" />
  </section>
  <section
    class="flex h-3/5 p-2 bg-color-60 dark:bg-dark-color-60 text-black dark:text-white"
  >
    <div class="left_container w-4/5">
      <div class="grid grid-cols-3 h-1/5">
        <button
          class="grid place-items-center text-color-10 dark:text-dark-color-10 text-xl group"
          @click="clearAllField()"
        >
          <span class="group-active:scale-75"> c </span>
        </button>
        <button
          class="grid place-items-center text-color-10 dark:text-dark-color-10 text-xl group"
          @click="backspace()"
        >
          <span class="group-active:scale-75">
            <i class="bi bi-backspace"></i>
          </span>
        </button>
        <button
          class="grid place-items-center text-color-10 dark:text-dark-color-10 text-xl group"
          @click="updateCurrent(`%`)"
        >
          <span class="group-active:scale-75"> % </span>
        </button>
      </div>
      <div class="digits_buttons grid grid-cols-3 h-4/5">
        <DigitsButtons
          v-for="digit in digits"
          :key="digit"
          :digit="digit"
          @click="updateCurrent(digit)"
        />
      </div>
    </div>

    <div class="right_container grid grid-cols-1 w-1/4">
      <OperatorsButtons
        v-for="operator in operators"
        :key="operator"
        :operator="operator"
        @click="updateCurrent(operator)"
      />
    </div>
  </section>
</template>
