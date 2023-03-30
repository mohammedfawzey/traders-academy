<template>
  <v-navigation-drawer
    v-model="drawer"
    app
    class="custom-content"
    width="270"
    :right="$ar"
    @input="navigationStatus(drawer)"
    disable-resize-watcher
    disable-route-watcher
  >
    <v-sheet
      height="80px"
      :class="[$ar ? 'rounded-bl-xxl' : 'rounded-br-xxl']"
      class="main"
    >
      <v-card-text class="d-flex align-center justify-space-between">
        <v-icon dark x-large>mdi-school-outline</v-icon>
        <v-btn
          dark
          :class="{ 'ml-auto': !$ar }"
          class="d-block"
          icon
          @click="drawer = false"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-text>
    </v-sheet>
    <v-list nav dense class="pt-6">
      <FactoryVListItem
        v-for="(item, itemInd) in C_links"
        :key="itemInd"
        :item="item"
        :isDrawer="true"
      />
    </v-list>
    <template #append>
      <v-card-text class="pa-3">
        <div
          class="register d-lg-none d-flex align-center justify-center flex-column"
        >
          <v-btn block color="main" dark outlined>
            <span class="text-capitalize">{{ $t("message.auth.login") }}</span>
          </v-btn>
          <v-btn block color="main" class="mt-3" depressed dark>
            <span class="text-capitalize">{{ $t("message.auth.register") }}</span>
          </v-btn>
          <v-btn v-if="false" color="main" outlined rounded>
            <span class="text-capitalize">logout</span>
          </v-btn>
        </div>
      </v-card-text>
    </template>
  </v-navigation-drawer>
</template>
<script>
import FactoryVListItem from "@/components/Factory/VListItem.vue";
import data from "@/mockData/links.json";
export default {
  data() {
    return {
      drawer: false,
      links: data,
    };
  },
  props: {
    navigationStatus: Function,
    theDrawer: {
      default: false,
    },
  },
  watch: {
    theDrawer(value) {
      if (value) {
        this.drawer = true;
      }
    },
  },
  computed: {
    C_links() {
      return this.$t("message.headerLinks");
    },
  },
  components: {
    FactoryVListItem,
  },
};
</script>

<style lang="scss" scoped>
.rounded-br-xxl {
  border-bottom-right-radius: 55px;
}
.rounded-bl-xxl {
  border-bottom-left-radius: 55px;
}
</style>
