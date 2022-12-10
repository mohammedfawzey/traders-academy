<template>
  <section id="home-2" class="py-16 mt-5">
    <v-container>
      <div class="text-center">
        <div class="text-h5 text-sm-h4 text-md-h3 main--text font-weight-bold">
          {{ $t("section-2.head") }}
        </div>
        <div class="text-h5 text-sm-h4 text-md-h3 font-weight-medium my-3">
          {{ $t("section-2.subhead") }}
        </div>
        <div class="text-subtitle-2 mx-auto text-md-subtitle-1 shorten-p">
          {{ $t("section-2.subtitle") }}
        </div>
        <div class="action mt-5">
          <v-btn
            dark
            color="main"
            class="px-10"
            depressed
            rounded
            :x-large="$vuetify.breakpoint.smAndUp"
            :large="!$vuetify.breakpoint.smAndUp"
          >
            <span class="text-capitalize">
              {{ $t("section-2.btn") }}
            </span>
          </v-btn>
        </div>
      </div>
    </v-container>
  </section>
</template>

<style lang="scss" scoped>
@import "~vuetify/src/styles/styles.sass";
#home-2 {
  background-image: url("@/assets/imgs/home/section-2/img.png");
  background-repeat: repeat-x;
}
.shorten-p {
  @media #{map-get($display-breakpoints,'sm-only')} {
    max-width: 650px;
  }
}
</style>
