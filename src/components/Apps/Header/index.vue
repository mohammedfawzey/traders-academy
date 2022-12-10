<template>
  <nav>
    <AppBar @navigationStatus="navigationStatus">
      <!-- <v-app-bar-nav-icon
        @click="theDrawer = true"
        class="order-first"
        :class="[$ar?'ml-2':'mr-2']"
      /> -->
      <!-- :class="{ 'order-2': $ar }" -->
    </AppBar>
    <NavigationDrawer
      :navigationStatus="navigationStatus"
      :the-drawer="theDrawer"
    />
  </nav>
</template>
<script>
import AppBar from "./AppBar.vue";
import NavigationDrawer from "./NavigationDrawer.vue";
export default {
  components: {
    AppBar,
    NavigationDrawer,
  },
  data() {
    return {
      theDrawer: false,
    };
  },
  methods: {
    drawerStatus(value) {
      this.theDrawer = value;
    },
    navigationStatus(value) {
      this.theDrawer = value;
    },
  },
};
</script>
