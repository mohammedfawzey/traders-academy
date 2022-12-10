<template>
  <div class="app-bar-links">
    <span v-for="(link, linkInd) in C_links" :key="linkInd">
      <v-menu
        v-if="link.isMenu"
        offset-y
        :transition="!$ar ? 'slide-x-transition' : 'slide-x-reverse-transition'"
        :close-on-content-click="false"
      >
        <template #activator="{ on, attrs }">
          <v-btn text v-on="on" v-bind="attrs">
            <!-- :class="{ 'font-weight-bold': $ar }" -->
            <span class="text-capitalize custom-font-weight">{{
              link.title
            }}</span>
            <v-icon small right>mdi-chevron-down</v-icon>
          </v-btn>
        </template>
        <v-list dense nav>
          <VCustomListItem
            :item="item"
            v-for="(item, itemInd) in link.list"
            :key="itemInd"
          />
        </v-list>
      </v-menu>

      <v-btn text v-else>
        <span class="text-capitalize custom-font-weight">{{ link.title }}</span>
      </v-btn>
    </span>
  </div>
</template>

<script>
import VCustomListItem from "./VListItem.vue";
import data from "@/mockData/links.json";
export default {
  data: () => ({
    links: data,
  }),
  components: {
    VCustomListItem,
  },
  computed: {
    C_links() {
      return this.$t("message.headerLinks");
    },
  },
};
</script>
