<template>
  <v-menu
    v-if="item.sub"
    offset-x
    :left="!$isEn"
    nudge-top="8"
    content-class="elevation-2"
    transition="slide-y-transition"
    :close-on-content-click="false"
    open-on-hover
  >
    <!-- :nudge-right="$isEn ? 0 : 0" -->
    <template #activator="{ on, attrs }">
      <FactoryVListItem
        v-bind="attrs"
        v-on="on"
        :hasSubList="true"
        :item="item"
      />
    </template>
    <v-list nav dense>
      <FactoryVListItem
        :item="subItem"
        v-for="(subItem, subItemInd) in item.sub"
        :key="subItemInd"
      />
    </v-list>
  </v-menu>
  <FactoryVListItem v-else :item="item" />
</template>

<script>
import FactoryVListItem from "@/components/Factory/VListItem.vue";
export default {
  props: ["item", "hover"],
  components: {
    FactoryVListItem,
  },
};
</script>
