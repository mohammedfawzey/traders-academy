<template>
  <v-app-bar app elevate-on-scroll class="section-bg v-box-shadow">
    <!-- title -->
    <v-toolbar-title
    :class="[!$ar ? 'mr-lg-5' : 'ml-lg-5']"
      class="cursor-pointer"
      @click="MX_redirectTo(`/${$i18n.locale}`)"
    >
      <v-img
        :src="require(`@/assets/imgs/app/logo-${isEn ? 'en' : 'ar'}.png`)"
        contain
        width="150"
      ></v-img>
    </v-toolbar-title>
    <!-- links -->
    <v-spacer v-if="!$vuetify.breakpoint.lgAndUp" />
    <Links v-if="$vuetify.breakpoint.lgAndUp" />
    <!-- <slot v-else /> -->
    <v-app-bar-nav-icon
      v-else
      @click="$emit('navigationStatus', { clicked: true })"
      class="order-first"
      :class="[$ar ? 'ml-2' : 'mr-2']"
    />
    <!-- registeration -->
    <v-spacer v-if="$vuetify.breakpoint.lgAndUp" />
    <div class="register d-none d-lg-flex align-center justify-center">
      <v-btn
        v-if="!isUserLoggedIn"
        color="main"
        class="px-8"
        dark
        outlined
        rounded
      >
        <span class="text-capitalize">{{ $t("message.auth.login") }}</span>
      </v-btn>
      <v-btn
        v-if="!isUserLoggedIn"
        color="main"
        depressed
        dark
        class="px-8"
        :class="[isEn ? 'ml-3' : 'mr-3']"
        rounded
      >
        <span class="text-capitalize">{{ $t("message.auth.register") }}</span>
      </v-btn>
      <v-btn v-else color="main" class="px-8" outlined rounded>
        <span class="text-capitalize">{{ $t("message.auth.logout") }}</span>
      </v-btn>
    </div>
    <v-menu offset-y open-on-click transition="slide-y-transition">
      <template #activator="{ on, attrs }">
        <v-btn text :class="[!$ar ? 'ml-3' : 'mr-3']" v-on="on" v-bind="attrs">
          <v-icon>mdi-translate</v-icon>
          <v-icon small right>mdi-chevron-down</v-icon>
        </v-btn>
      </template>
      <v-list
        nav
        dense
        class="custom-list-height px-3 py-5 rounded-lg"
        subheader
      >
        <div class="text-body-2 mb-3 font-weight-bold">Translations</div>
        <v-list-item-group v-model="lang" color="main" mandatory>
          <BaseListItem
            v-for="(item, itemInd) in locales"
            :key="itemInd"
            :item="item"
            language
          >
          </BaseListItem>
        </v-list-item-group>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
// media lg-and-up || md-and-down
import Links from "./Links.vue";
import BaseListItem from "@/components/Base/ListItem.vue";
export default {
  data() {
    return {
      lang: 0,
      locales: [
        {
          title: "English",
          value: "en",
        },
        {
          title: "العربية",
          value: "ar",
        },
      ],
      isUserLoggedIn: false,
    };
  },
  components: {
    Links,
    BaseListItem,
  },
  computed: {
    isEn() {
      return this.$i18n.locale === "en";
    },
  },
  mounted() {
    this.getCurrentLang();
  },
  methods: {
    getCurrentLang() {
      this.$route.path == "/ar" ? (this.lang = 1) : (this.lang = 0);
    },
  },
};
</script>

<style lang="scss" scoped>
// * {
//   font-family: "Poppins", sans-serif !important;
// }
</style>
