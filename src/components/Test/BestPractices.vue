<template>
  <section>
    <div class="d-lg-flex align-center justify-center">
      <TheShape
        v-for="(circle, circleInd) in circles"
        :key="circleInd"
        :circle="circle"
        class="my-12"
        :isSquare="$vuetify.breakpoint.smAndDown"
        :circleInd="circleInd"
      />
    </div>
    <v-sheet height="1000px" color="main"></v-sheet>
  </section>
</template>

<script>
import TheShape from "./TheShape.vue";
import BaseListItem from "./VListItem.vue";
export default {
  data: () => ({
    activeId: 0,
    items: [
      {
        title: "hello-one",
      },
      {
        title: "hello-two",
      },
    ],
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
  components: {
    BaseListItem,
    TheShape,
  },
};
</script>
