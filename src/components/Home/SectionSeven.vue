<template>
  <section id="home-7" class="pt-8">
    <v-container class="pb-0">
      <v-row
        dense
        class="flex-column-reverse flex-lg-row"
        justify="center"
        align="center"
      >
        <v-col cols="12" lg="6" class="d-flex align-end justify-center">
          <v-img
            :src="require(`@/assets/imgs/home/section-7/${$i18n.locale}.png`)"
            position="center bottom"
            :height="$vuetify.breakpoint.mdAndDown ? '380px' : ''"
            contain
            :min-height="$vuetify.breakpoint.lgAndUp ? 560 : 370"
          >
            <template #placeholder>
              <v-row class="fill-height" align="center" justify="center">
                <v-progress-circular indeterminate color="grey darken-2" />
              </v-row>
            </template>
          </v-img>
        </v-col>
        <v-col cols="12" md="11" lg="6" class="mb-6 mb-md-0">
          <div
            class="col-body pb-sm-8 text-center"
            :class="[$ar ? 'text-lg-right pr-md-5' : 'text-lg-left pl-md-5']"
          >
            <div class="text-h6 text-sm-h5 main--text font-weight-bold">
              {{ $t("section-7.head") }}
            </div>
            <div class="text-h5 text-sm-h4 my-4 font-weight-bold">
              {{ $t("section-7.subhead") }}
            </div>
            <div class="text-subtitle-2">
              {{ $t("section-7.subtitle") }}
            </div>
            <v-row dense class="mt-6" justify="center">
              <!-- sm="" -->
              <v-col
                cols="12"
                sm="6"
                md="4"
                v-for="(item, itemInd) in C_items"
                :key="itemInd"
                :class="[
                  { 'mt-5': $vuetify.breakpoint.smOnly && itemInd == 2 },
                  { 'my-4': $vuetify.breakpoint.xsOnly },
                ]"
              >
                <div class="px-3">
                  <div
                    class="text-h6 text-sm-h5 font-weight-bold mb-2 main--text text--darken-4"
                    v-html="item.title"
                  />
                  <div class="text-body-2" v-text="item.text" />
                </div>
              </v-col>
            </v-row>
            <div class="section-action mt-8">
              <v-btn color="main" dark class="px-sm-8" large rounded depressed>
                <span class="text-capitalize">
                  {{ $t("section-7.btn") }}
                </span>
              </v-btn>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        title: "Basics of Trading",
        text: "The key to successful trading is understanding the basic ideas and principles behind the trading strategies and techniques",
      },
      {
        title: "Advanced strategies",
        text: "We’ll cover strategies intended to generate income in the portfolio, buy a stock at a desired price and manage risks",
      },
      {
        title: "Advanced tools", //trading
        text: "Professional traders can handle the market’s volatility with the right trading tools",
      },
    ],
  }),
  computed: {
    C_items() {
      return this.$t("section-7.items");
    },
  },
};
</script>
<style lang="scss" scoped>
#home-6 {
  background-color: #f0f5f7;
}
.custom-width {
  max-width: 650px;
}
</style>
