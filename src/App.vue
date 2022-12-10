<template>
  <v-app :class="{ 'arabic-font': !$isEn }">
    <AppHeader />
    <v-main v-if="true">
      <router-view />
    </v-main>
    <!-- <v-sheet color="error" height="500px"></v-sheet> -->
    <AppFooter />
  </v-app>
</template>

<script>
import AppHeader from "@/components/Apps/Header";
import AppFooter from "@/components/Apps/Footer";
export default {
  name: "App",
  components: {
    AppHeader,
    AppFooter,
  },
  data: () => ({
    //
  }),
};
</script>
<style lang="scss">
$font: "Cairo";
.arabic-font {
  // font-family: "Noto Sans Arabic", sans-serif !important;
  font-family: $font, sans-serif !important;
  * {
    font-family: $font, sans-serif !important;
  }
}
</style>
