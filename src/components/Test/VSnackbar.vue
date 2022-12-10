<template>
  <div>
    <v-tooltip top>
      <template v-slot:activator="{ on, attrs }">
        <!-- <v-btn v-on="on" v-bind="attrs">open snackbar</v-btn> -->
        <VCustomBtn v-on="on" v-bind="attrs" />
      </template>
      <span>hello</span>
    </v-tooltip>
  </div>
</template>

<script>
import VCustomBtn from "./VBtn.vue";
export default {
  components: {
    VCustomBtn,
  },
};
</script>

<style lang="scss" scoped></style>
