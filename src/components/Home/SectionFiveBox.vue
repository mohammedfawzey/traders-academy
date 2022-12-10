<template>
  <v-card
    max-width="600"
    flat
    :class="[$ar ? 'text-sm-right' : 'text-sm-left']"
    class="box px-5 mx-auto d-flex align-center flex-column-reverse text-center flex-sm-row"
  >
    <div class="box-content">
      <div
        class="box-title mb-3 text-h5 text-md-h6 text-lg-h5 font-weight-bold main--text text--darken-4"
      >
        {{ item.title }}
      </div>
      <div
        class="box-text text-subtitle-2 text-sm-subtitle-1 text-md-subtitle-2 text-lg-subtitle-1"
      >
        {{ item.text }}
      </div>
    </div>
    <div class="box-icon text-center">
      <v-avatar
        color="transparent"
        :size="!$vuetify.breakpoint.mdOnly ? 120 : 100"
      >
        <v-img
          :src="require('@/assets/imgs/home/section-5/' + item.img + '.png')"
          contain
        >
          <template #placeholder>
            <v-row class="fill-height" align="center" justify="center">
              <v-progress-circular
                width="2"
                size="35"
                indeterminate
                color="grey darken-2"
              />
            </v-row>
          </template>
        </v-img>
      </v-avatar>
    </div>
  </v-card>
</template>
<script>
export default {
  props: ["item"],
};
</script>
<style lang="scss" scoped>
.box {
  gap: 12px;
}
</style>
