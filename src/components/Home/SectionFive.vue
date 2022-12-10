<template>
  <section id="home-5" class="pb-12 pt-16">
    <v-container>
      <div class="text-center mb-16">
        <div class="text-h5 text-sm-h4 text-md-h3 main--text font-weight-bold">
          {{ $t("section-5.head") }}
        </div>
        <div
          class="text-h5 text-sm-h4 text-md-h3 font-weight-medium secondary--text text--darken-1 mt-3"
        >
          {{ $t("section-5.subhead") }}
        </div>
      </div>
      <v-row dense>
        <v-col
          cols="12"
          md="6"
          v-for="(item, itemInd) in C_items"
          :key="itemInd"
        >
          <SectionFiveBox :item="item" class="mb-5" />
        </v-col>
      </v-row>
      <div class="section-five-action mx-auto mt-8" style="width: max-content">
        <v-btn color="main" rounded dark class="px-12" large depressed>
          <span class="text-capitalize">
            {{ $t("btn") }}
          </span>
        </v-btn>
      </div>
    </v-container>
  </section>
</template>
<script>
import SectionFiveBox from "./SectionFiveBox.vue";
export default {
  data: () => ({
    items: [
      {
        title: "Academy courses",
        text: "Choose the courses that best suit your trading experience and goals from a wide range of educational courses and learn to trade from scratch",
        img: 1,
      },
      {
        title: "Fundamental Analysis",
        text: "find out how news and financial announcements influence market trends",
        img: 2,
      },
      {
        title: "Training sessions",
        text: "Get comprehensive training to understand how the markets work, improve your trading skills and seize the opportunities",
        img: 3,
      },
      {
        title: "Technical analysis",
        text: "Learn more about charts and tools to better understand the market movements",
        img: 4,
      },
      {
        title: "Trading strategies",
        text: "Learn trading strategies that have been tested and developed by market experts",
        img: 5,
      },
      {
        title: "Trading signals",
        text: "earn how the changing market conditions can indicate the right time to enter or exit the market",
        img: 6,
      },
    ],
  }),
  computed: {
    C_items() {
      return this.$t("section5Items");
    },
  },
  components: {
    SectionFiveBox,
  },
};
</script>
