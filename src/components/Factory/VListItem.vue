<template>
  <v-list-group v-if="isDrawer && item.list" no-action color="#2f4409">
    <template #activator>
      <v-list-item-content>
        <v-list-item-title class="text-capitalize text-body-2">
          {{ item.title }}
        </v-list-item-title>
      </v-list-item-content>
    </template>
    <v-list nav dense>
      <v-list-group
        color="#2f4409"
        v-for="(subItemGroup, subItemGroupInd) in item.list"
        sub-group
        no-action
        :key="subItemGroupInd"
        v-show="item.hasSub"
      >
        <template #activator>
          <v-list-item-content>
            <v-list-item-title class="text-capitalize">{{
              subItemGroup.title
            }}</v-list-item-title>
          </v-list-item-content>
        </template>
        <v-list nav dense>
          <v-list-item
            link
            v-for="(subChild, subChildInd) in subItemGroup.sub"
            :key="`${subChildInd}-child`"
          >
            <v-list-item-content>
              <v-list-item-title class="text-capitalize">
                {{ subChild }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-list-group>
      <v-list-item
        v-show="!item.hasSub"
        v-for="(subItem, subItemInd) in item.list"
        link
        :key="`${subItemInd}-parent`"
      >
        <v-list-item-content>
          <v-list-item-title class="text-capitalize">
            {{ subItem.title }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-list-group>
  <v-list-item
    v-else
    :link="isLink"
    v-bind="hasSubList ? $attrs : ''"
    v-on="hasSubList ? { ...$listeners } : null"
  >
    <v-list-item-content>
      <v-list-item-title class="text-capitalize text-body-2"
        >{{ item.title ? item.title : item }}
      </v-list-item-title>
    </v-list-item-content>
    <v-list-item-icon v-if="hasSubList">
      <v-icon right>{{
        $isEn ? "mdi-chevron-right" : "mdi-chevron-left"
      }}</v-icon>
    </v-list-item-icon>
  </v-list-item>
</template>

<script>
export default {
  props: {
    item: {
      required: true,
    },
    hasSubList: {
      default: false,
    },
    isLink: {
      default: true,
    },
    isDrawer: {
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped></style>
