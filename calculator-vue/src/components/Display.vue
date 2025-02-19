<script>
export default {
  props: {
    number: {
      type: String,
      required: true,
    },
    result: {
      type: String,
      required: true,
    },
  },
};
</script>
<template>
  <div class="self-end">
    <input
      type="text"
      readonly
      :value="number"
      class="border-none outline-none w-full h-10 text-right text-base text-opacity-95 bg-transparent"
    />
    <input
      type="text"
      readonly
      :value="result"
      class="border-none outline-none w-full h-10 text-right text-2xl font-bold bg-transparent"
    />
  </div>
</template>
