<template>
  <section id="home-9" class="py-10">
    <v-container>
      <div class="text-h5 font-weight-bold mb-8">
        {{ $t("section-9.head") }}
      </div>
      <div
        class="text-subtitle-2 text-sm-subtitle-1"
        v-html="$t('section-9.subtitle')"
      ></div>
      <div class="icons mt-5">
        <v-btn icon color="secondary">
          <v-icon>mdi-facebook</v-icon>
        </v-btn>
        <v-btn icon color="secondary">
          <v-icon>mdi-instagram</v-icon>
        </v-btn>
      </div>
    </v-container>
  </section>
</template>
