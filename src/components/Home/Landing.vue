<template>
  <div id="landing-wrapper" class="pt-13 pt-md-0 section-bg">
    <!-- :fluid="$vuetify.breakpoint.mdAndDown"
      class="px-md-1 pt-0 fill-height pb-0" -->
    <v-container
      class="pt-0 px-md-1 pb-0"
      :fluid="$vuetify.breakpoint.mdAndDown"
    >
        <!-- :style="[
          $vuetify.breakpoint.mdAndUp
            ? { 'min-height': '90vh' }
            : { 'min-height': '90vh' },
        ]" -->
      <v-row
        :style="[
          $vuetify.breakpoint.mdAndDown
            ? { 'min-height': '80vh' }
            : { 'min-height': '90vh' },
        ]"
        dense
        :align="!media ? 'center' : null"
        :justify="!media ? 'center' : null"
      >
        <v-col cols="12" sm="8" md="6" class="mb-8 mb-md-0" align-self="center">
          <div
            class="col-wrapper mx-auto text-center px-3"
            :class="[$ar ? 'text-md-right' : 'text-md-left']"
          >
            <div
              class="text-h5 text-sm-h4 text-md-h3 main--text font-weight-bold"
            >
              <!-- Knowledge is power! -->
              {{ $t("landing.head") }}
            </div>
            <div
              class="text-h5 text-sm-h4 text-md-h3 font-weight-bold mt-3 mb-4 secondary--text text--darken-1"
            >
              {{ $t("landing.subHead") }}
            </div>
            <div
              class="text-caption text-sm-body-2 text-md-body-1  mb-7 mb-md-12"
            >
              {{ $t("landing.subtitle") }}
            </div>
            <div class="landing-action">
              <v-btn
                color="main"
                :x-large="$vuetify.breakpoint.mdAndUp"
                :large="!$vuetify.breakpoint.mdAndUp"
                class="px-16"
                depressed
                dark
                rounded
              >
                <span class="text-capitalize font-weight-bold">
                  {{ $t("landing.btn") }}
                </span>
              </v-btn>
            </div>
          </div>
        </v-col>
        <v-col cols="12" sm="8" md="6" class="d-md-flex align-md-end">
          <!-- src="https://bad.src/not/valid" -->
          <!-- lazy-src="https://picsum.photos/10/6?image=50" -->
          <v-img
            :src="require(`@/assets/imgs/home/landing/${$i18n.locale}.png`)"
            :height="!media ? 300 : ''"
            contain
            :position="!media ? 'center' : ''"
            min-height="290"
          >
            <template #placeholder>
              <v-row class="fill-height" align="center" justify="center">
                <v-progress-circular indeterminate color="grey darken-2" />
              </v-row>
            </template>
          </v-img>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    isActive: false,
  }),
  computed: {
    media() {
      return this.$vuetify.breakpoint.mdAndUp;
    },
  },
};
</script>
<style lang="scss" scoped>
@import "~vuetify/src/styles/styles.sass";
@media #{map-get($display-breakpoints,"sm-and-down")} {
  .col-wrapper {
    max-width: 480px;
  }
}
</style>
