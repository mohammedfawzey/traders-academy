<template>
  <v-card
    flat
    class="ma-4 custom-card-no-active"
    min-width="272px"
    min-height="270"
    :max-width="$vuetify.breakpoint.xsOnly ? 300 : 315"
    @click="options.toggle"
    :color="options.active ? undefined : 'white'"
  >
    <!-- color="white" -->
    <!-- 340px -->
    <v-card-text
      :class="[$ar ? 'rounded-br-0' : 'rounded-bl-0']"
      class="rounded-xl pa-6 p-relative custom-box-shadow"
    >
      <div class="text-body-2 black--text font-weight-medium">
        {{ item.text }}
      </div>
      <v-rating
        class="mt-2"
        :value="5"
        readonly
        color="yellow darken-1"
        background-color="yellow darken-1"
        dense
        small
      ></v-rating>
      <div class="triangle" :class="{ ar: $ar }"></div>
    </v-card-text>
    <v-card-text class="person pl-3 px-0 d-flex align-center">
      <div class="avatar">
        <v-avatar size="70" :class="{ 'v-box-shadow': options.active }">
          <v-img
            :src="
              require('../../assets/imgs/home/section-4/' + item.img + '.png')
            "
            contain
          >
            <template #placeholder>
              <v-row class="fill-height" align="center" justify="center">
                <v-progress-circular
                  width="2"
                  indeterminate
                  size="25"
                  color="grey darken-2"
                />
              </v-row>
            </template>
          </v-img>
        </v-avatar>
      </div>
      <div class="person-info">
        <div
          class="text-h6 text-lg-h5 secondary--text text--darken-1 font-weight-bold person-name"
        >
          {{ item.personName }}
        </div>
        <div class="text-body-2 font-weight-bold person-country">
          {{ item.country }}
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: ["item", "options"],
};
</script>
<style lang="scss" scoped>
.triangle {
  background-image: url("@/assets/imgs/home/section-4/arrow-en.png");
  background-size: contain;
  width: 40px;
  height: 40px;
  position: absolute;
  left: -12px;
  bottom: -40px;
  &.ar {
    background-image: url("@/assets/imgs/home/section-4/arrow-ar.png") !important;
    left: 0px !important;
    right: -7px !important;
  }
}
.custom-box-shadow {
  box-shadow: 0px 0px 8px #00000052 !important;
}
.p-relative {
  position: relative;
}
.person {
  gap: 10px;
}
</style>
