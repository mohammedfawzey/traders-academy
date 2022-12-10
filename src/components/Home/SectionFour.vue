<template>
  <section id="home-4" class="pt-12 pb-2">
    <v-container
      class="text-center"
      :class="[$ar ? 'text-md-right' : 'text-md-left']"
    >
      <v-row dense justify="center">
        <v-col cols="12" md="5" class="d-flex flex-column justify-center">
          <div class="text-h6 main--text font-weight-bold">
            {{ $t("section-3.head") }}
          </div>
          <div class="text-sm-h5 text-md-h4 font-weight-bold mt-4">
            {{ $t("section-3.subhead") }}
          </div>
        </v-col>
        <v-col cols="12" sm="10" md="7">
          <div class="text-subtitle-2 text-md-subtitle-1 mt-4 mt-md-0">
            {{ $t("section-3.subtitle") }}
          </div>
        </v-col>
      </v-row>
    </v-container>
    <Carousel />
  </section>
</template>

<script>
export default {
  components: {
    Carousel: () => import("./SectionFourCarousel.vue"),
  },
};
</script>
<style lang="scss" scoped>
#home-4 {
  min-height: 500px;
}
</style>
