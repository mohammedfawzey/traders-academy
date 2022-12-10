<template>
  <section
    id="home-3"
    class="mt-5 pt-12 pb-0 pb-md-0 overflow-hidden section-bg"
  >
    <v-container class="fill-height pb-0">
      <v-row dense class="fill-height flex-column-reverse flex-md-row">
        <v-col cols="12" md="6" class="d-flex pb-0">
          <v-img
            :src="require(`@/assets/imgs/home/section-3/${$i18n.locale}.png`)"
            :height="$vuetify.breakpoint.smAndDown ? '400px' : ''"
            contain
            position="bottom center"
            min-height="370"
          >
            <template #placeholder>
              <v-row class="fill-height" align="center" justify="center">
                <v-progress-circular indeterminate color="grey darken-2" />
              </v-row>
            </template>
          </v-img>
        </v-col>
        <v-col cols="12" class="d-flex" md="6">
          <div
          :class="[$ar?'text-md-right':'text-md-left']"
            class="col-body px-2 pb-sm-10 pb-lg-0 d-flex flex-column justify-center align-center align-md-start text-center"
          >
            <div class="text-h5 main--text font-weight-bold">
              {{ $t("section-3.head") }}
            </div>
            <div class="text-h4 font-weight-bold my-3">
              {{ $t("section-3.subhead") }}
            </div>
            <div class="text-subtitle-1">
              {{ $t("section-3.subtitle") }}
            </div>
            <div class="shape-wrapper d-flex align-center justify-center mt-7">
              <Shape
                v-for="(circle, circleInd) in C_circles"
                :key="circleInd"
                :circle="circle"
                :circleInd="circleInd"
                :isSectionThree="true"
              />
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import Shape from "./Shape.vue";
export default {
  data: () => ({
    circles: [
      {
        title: "30+",
        text: "Academy<br />Courses",
      },
      {
        title: "87%",
        text: "Success<br />Rate",
      },
      {
        title: "42+",
        text: "Strategies<br />and tools",
      },
    ],
  }),
  computed:{
    C_circles() {
      return this.$t("section3Circles")
    }
  },
  components: {
    Shape,
  },
};
</script>
<style lang="scss" scoped>
@import "~vuetify/src/styles/styles.sass";
#home-3 {
  // background-image: url("@/assets/imgs/section-3.png");
  background-color: #e2ebef;
}
.shorten-p {
  @media #{map-get($display-breakpoints,'sm-only')} {
    max-width: 650px;
  }
}

.shape-wrapper {
  gap: 10px;
  @media #{map-get($display-breakpoints,'md-and-up')} {
    max-width: 67%;
  }
  @media #{map-get($display-breakpoints,'sm-only')} {
    gap: 5px;
    max-width: 100%;
    flex-wrap: wrap;
  }
  @media #{map-get($display-breakpoints,'xs-only')} {
    .the-shape:nth-child(3) {
      margin-top: 20px;
    }
    align-items: center;
    justify-content: center;
    gap: 20px;
    max-width: 98%;
    flex-wrap: wrap;
  }
}
</style>
