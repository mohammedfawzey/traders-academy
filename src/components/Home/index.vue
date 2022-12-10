<template>
  <v-app>
    <v-main class="pa-0">
      <Landing />
      <v-container
        class="pa-0 d-flex align-center justify-center flex-wrap"
        id="custom-container"
      >
        <CustomShape
          v-for="(circle, circleInd) in C_cirlces"
          :key="circleInd"
          :circle="circle"
          :isSquare="$vuetify.breakpoint.smAndDown"
          :circleInd="circleInd"
          :class="[
            { 'mx-3': $vuetify.breakpoint.smAndDown && circleInd != 2 },
            { 'mx-10': !$vuetify.breakpoint.smAndDown && circleInd == 1 },
            {
              'mt-n16':
                ($vuetify.breakpoint.xsOnly && circleInd != 2) ||
                !$vuetify.breakpoint.xsOnly,
            },
            { 'mt-n8': $vuetify.breakpoint.xsOnly && circleInd === 2 },
          ]"
        />
      </v-container>
      <SectionTwo />
      <SectionThree />
      <SectionFour v-if="true" />
      <SectionFive />
      <SectionSex />
      <SectionSeven />
      <SectionEight />
      <SectionNine />
      <!-- <v-sheet height="1000px" color="primary"></v-sheet> -->
    </v-main>
  </v-app>
</template>

<script>
import Landing from "./Landing.vue";
import CustomShape from "./Shape.vue";
import SectionTwo from "./SectionTwo.vue";
import SectionThree from "./SectionThree.vue";
const SectionFour = () => import("./SectionFour.vue");
import SectionFive from "./SectionFive.vue";
import SectionSex from "./SectionSex.vue";
import SectionSeven from "./SectionSeven.vue";
import SectionEight from "./SectionEight.vue";
import SectionNine from "./SectionNine.vue";
export default {
  components: {
    Landing,
    CustomShape,
    SectionTwo,
    SectionThree,
    SectionFour,
    SectionFive,
    SectionSex,
    SectionSeven,
    SectionEight,
    SectionNine,
  },
  data: () => ({
    circles: [
      { title: "800+", text: "graduates" },
      { title: "87%", text: "success rate" },
      {
        title: "50%",
        text: "of graduates work in the financial industry",
        hasLargeText: true,
      },
    ],
  }),
  computed: {
    C_cirlces() {
      return this.$t("circles");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~vuetify/src/styles/styles.sass";
@media #{map-get($display-breakpoints,'xs-only')} {
  #custom-container .the-shape {
    width: 40% !important;
  }
}
</style>
