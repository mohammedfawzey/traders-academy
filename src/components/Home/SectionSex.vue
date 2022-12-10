<template>
  <section id="home-6" class="py-12 section-bg">
    <v-container>
      <v-row dense>
        <v-col cols="12" md="6" class="mb-5 mb-mb-0">
          <div
            class="col-body text-center"
            :class="[$ar ? 'text-md-right' : 'text-md-left']"
          >
            <div class="text-h5 text-sm-h4 font-weight-bold main--text">
              {{ $t("section-6.head") }}
            </div>
            <div
              class="text-h5 text-sm-h4 my-5 secondary--text text--darken-1 font-weight-bold"
            >
              {{ $t("section-6.subhead") }}
            </div>
            <div
              :class="{ 'custom-width': $vuetify.breakpoint.smOnly }"
              class="text-subtitle-2 mx-auto text-md-subtitle-1"
            >
              {{ $t("section-6.subtitle") }}
            </div>
            <div class="section-action mt-8">
              <v-btn rounded depressed large class="px-10" dark color="main">
                <span class="text-capitalize">{{ $t("btn") }}</span>
              </v-btn>
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="6" class="d-flex align-center justify-center">
          <!-- lazy-src="https://picsum.photos/10/6?image=50" -->
          <v-img
            src="@/assets/imgs/home/section-6/img.png"
            position="center"
            :height="$vuetify.breakpoint.smAndDown ? '380px' : ''"
            contain
            min-height="370"
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
  </section>
</template>

<style lang="scss" scoped>
.custom-width {
  max-width: 650px;
}
</style>
