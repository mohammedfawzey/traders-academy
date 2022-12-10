<template>
  <v-btn v-bind="$attrs" v-on="{ ...$listeners }">
    <span class="text-capitalize">Open Snackbar</span>
  </v-btn>
</template>

<script>
export default {
  //   props,
  props: ["item"],
};
</script>
