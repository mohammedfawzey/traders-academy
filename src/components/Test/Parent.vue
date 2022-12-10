<template>
  <div>
    <div class="text-h1">Hello From Parent</div>
    <!-- <Child v-if="false">
      <template v-slot:parent_slot="{ message }">
        <div class="error--text">Slot Parent {{ scopeMessage }}</div>
        <div class="success-text">{{ message }}</div>
      </template>
    </Child>
    <v-btn @click="active = 'Child'">change</v-btn>
    <v-lazy transition="slide-x-transition">
      <component :is="active" />
    </v-lazy> -->
    <v-sheet height="500px" color="error"></v-sheet>
    <div id="test">
      <v-btn x-large block>Hello</v-btn>
    </div>
    <v-sheet height="500px" color="primary"></v-sheet>
  </div>
</template>

<script>
import Child from "./Child";
export default {
  data() {
    return {
      active: "",
      //   scopeMessage: "from parent",
    };
  },
  components: {
    Child,
  },
  mounted() {
    this.check();
  },
  methods: {
    check() {
      const test = document.getElementById("test");
      window.onscroll = () => {
        // 596
        console.log("test.offsetTop", window.scrollY);
      };
    },
  },
};
</script>

<style lang="scss" scoped></style>
