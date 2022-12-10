<template>
  <v-card
    class="the-shape d-flex flex-column"
    :class="[
      { 'rounded-circle pa-4': $vuetify.breakpoint.mdAndUp && !isSectionThree },
      { 'rounded-xl pa-2': !$vuetify.breakpoint.mdAndUp && !isSectionThree },
      `the-shape-${circleInd}${isSectionThree}`,
      { 'transparent align-center align-md-start': isSectionThree },
      { 'v-box-shadow text-center align-center': !isSectionThree },
    ]"
    :width="
      $vuetify.breakpoint.mdAndUp && !isSectionThree
        ? '215px'
        : $vuetify.breakpoint.smOnly && !isSectionThree
        ? '150px'
        : isSectionThree
        ? '170px'
        : ''
    "
    :height="
      $vuetify.breakpoint.mdAndUp && !isSectionThree
        ? '200px'
        : $vuetify.breakpoint.smOnly && !isSectionThree
        ? '150px'
        : isSectionThree
        ? ''
        : '120px'
    "
    :flat="isSectionThree"
  >
    <div
      class="text-md-h3 font-weight-bold"
      :style="[isSectionThree ? { color: '#7cb518 ' } : { color: '#134611' }]"
      :class="[isSectionThree ? 'text-h4' : 'pt-5 pt-md-10 text-h5 text-sm-h4']"
    >
      <!-- {{ circle.title }} -->
      {{ start }}{{ circle.title.match(/\D/)[0] }}
    </div>
    <div
      :class="[
        circle.hasLargeText
          ? 'text-sm-body-2 text-md-body-2 custom-small--text'
          : 'text-sm-body-2 text-md-body-1',
        { 'font-weight-bold text-h6': isSectionThree },
        isSectionThree ? 'text-body-1' : 'text-caption',
      ]"
      :style="[!isSectionThree ? { color: '#7cb518 ' } : { color: '' }]"
      v-html="circle.text"
    ></div>
    <div class="line mt-3" v-if="isSectionThree"></div>
  </v-card>
</template>
<script>
export default {
  props: {
    circle: Object,
    isSquare: Boolean,
    circleInd: Number,
    isSectionThree: {
      default: false,
    },
  },
  data: () => ({
    start: 0,
    theActive: 0,
    animationStarted: false,
  }),
  mounted() {
    this.startAnimation();
  },
  methods: {
    startAnimation() {
      // on mount
      this.checkIfShapeCanAnimate();
      // on scroll
      const that = this;
      document.addEventListener("scroll", function () {
        that.checkIfShapeCanAnimate();
      });
    },
    checkIfShapeCanAnimate() {
      if (this.animationStarted) return;
      const currentShape = document.querySelector(
        `.the-shape-${this.circleInd}${this.isSectionThree}`
      );
      let statment =
        scrollY >= currentShape.offsetTop - 482 &&
        scrollY <= currentShape.offsetTop + 145;
      if (this.isSectionThree) {
        statment =
          scrollY >= currentShape.offsetTop - 530 &&
          scrollY <= currentShape.offsetTop + 10;
      }
      if (statment) {
        //   animate TheShape that have circleInd == that.circleInd
        this.theActive = this.circleInd;
        this.animation();
      }
    },
    animation() {
      const endNumber = Number.parseInt(this.circle.title);
      const speed = Math.trunc(3000 / Math.trunc(endNumber));
      if (this.circleInd !== this.theActive) return;
      const timer = setInterval(() => {
        this.start++;
        if (this.start >= endNumber) {
          clearInterval(timer);
        }
      }, speed);
      this.animationStarted = true;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~vuetify/src/styles/styles.sass";
.custom-small--text {
  @media #{map-get($display-breakpoints,'xs-only')} {
    font-size: 10px !important;
    line-height: 1.6 !important;
  }
}
.custom-shape-size {
  max-width: 67%;
}
.line {
  width: 65%;
  background: #7cb518;
  height: 3px;
}
</style>
