<template>
  <v-app>
    <v-main>
      <v-container fluid>
        <div
          class="container--content d-lg-flex align-center justify-space-between"
        >
          <v-btn
            v-if="$vuetify.breakpoint.lgAndUp"
            fab
            :class="{ 'v-box-shadow': prevDisabled }"
            color="transparent"
            @click="prevSlide"
            :disabled="prevDisabled"
          >
            <v-icon :color="!prevDisabled ? 'grey darken-1' : ''"
              >mdi-arrow-left</v-icon
            >
          </v-btn>
          <div class="slider-wrapper custom-slider">
            <v-slide-group
              mandatory
              v-model="slider"
              center-active
              :show-arrows="false"
              @change="checkSliderModel"
            >
              <v-slide-item
                v-for="(item, itemInd) in items"
                :key="itemInd"
                v-slot="{ active, toggle }"
              >
                <CarouselItem :item="item" :options="{ active, toggle }" />
              </v-slide-item>
            </v-slide-group>
          </div>
          <v-btn
            fab
            v-if="$vuetify.breakpoint.lgAndUp"
            :class="{ 'v-box-shadow': nextDisabled }"
            @click="nextSlide"
            :disabled="nextDisabled"
            color="transparent"
          >
            <v-icon :color="!nextDisabled ? 'grey darken-1' : ''"
              >mdi-arrow-right</v-icon
            >
          </v-btn>
        </div>
        <div
          class="custom-pagination mt-6 mx-auto rounded-lg d-flex align-center justify-center"
        >
          <div
            class="box-pag rounded-lg cursor-pointer"
            :class="[
              { main: n == activeSlide },
              { main: n == 4 && activeSlide == 5 },
              { main: n == 1 && activeSlide == 0 },
            ]"
            v-for="n in items.length - 2"
            @click="getSlider(n)"
            :key="n"
          />
        </div>
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
import CarouselItem from "@/components/Home/SectionFourCarouselItem.vue";
export default {
  data: () => ({
    slider: 1,
    activeSlide: 1,
    items: [
      {
        img: "avatar-1",
        personName: "Muhsin Al Jafali",
        country: "Saudi Arabia",
        text: "I always used to trade based on my knowledge of world news and events. However, since learning technical analysis and how to read charts properly, I have made successful trades I would never have dreamed of before. ",
      },
      {
        img: "avatar-2",
        personName: "Haitham Al Tamimi ",
        country: "Emirates",
        text: "I always used to trade based on my knowledge of world news and events. However, since learning technical analysis and how to read charts properly, I have made successful trades I would never have dreamed of before. ",
      },
      {
        img: "avatar-3",
        personName: "Muhsin Al Jafali ",
        country: "Saudi Arabia",
        text: "I always used to trade based on my knowledge of world news and events. However, since learning technical analysis and how to read charts properly, I have made successful trades I would never have dreamed of before. ",
      },
      {
        img: "avatar-4",
        personName: "Aysha Alsdiri",
        country: "Saudi Arabia",
        text: "I always used to trade based on my knowledge of world news and events. However, since learning technical analysis and how to read charts properly, I have made successful trades I would never have dreamed of before. ",
      },
      {
        img: "avatar-1",
        personName: "Muhsin Al Jafali",
        country: "Saudi Arabia",
        text: "I always used to trade based on my knowledge of world news and events. However, since learning technical analysis and how to read charts properly, I have made successful trades I would never have dreamed of before. ",
      },
      {
        img: "avatar-1",
        personName: "Muhsin Al Jafali",
        country: "Saudi Arabia",
        text: "I always used to trade based on my knowledge of world news and events. However, since learning technical analysis and how to read charts properly, I have made successful trades I would never have dreamed of before. ",
      },
    ],
  }),
  methods: {
    getSlider(index) {
      this.activeSlide = index;
      this.slider = this.activeSlide;
    },
    checkSliderModel() {
      this.activeSlide = this.slider;
    },
    nextSlide() {
      if (this.nextDisabled) return;
      this.slider++;
      this.activeSlide = this.slider;
    },
    prevSlide() {
      if (this.prevDisabled) return;
      this.slider--;
      this.activeSlide = this.slider;
    },
  },
  computed: {
    prevDisabled() {
      return this.slider <= 1;
    },
    nextDisabled() {
      return this.slider >= this.items.length - 2;
    },
  },
  components: {
    CarouselItem,
  },
};
</script>
<style lang="scss" scoped>
@import "~vuetify/src/styles/styles.sass";
.custom-pagination {
  background: #eeeeee 0% 0% no-repeat padding-box;
  // #EEEEEE 0% 0% no-repeat padding-box
  box-shadow: inset 0px 3px 6px #00000029;
  max-width: 360px;
  .box-pag {
    height: 12px;
    width: 100%;
  }
}
.slider-wrapper {
  @media #{map-get($display-breakpoints,"lg-and-up")} {
    width: 90%;
  }
}
.container--content {
  gap: 30px;
}
</style>
