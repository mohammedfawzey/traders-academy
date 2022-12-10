<template>
  <v-list-item>
    <v-list-item-content>
      <v-list-item-title>{{ item.title }}</v-list-item-title>
      <v-list-item-title>{{ isActive }}</v-list-item-title>
    </v-list-item-content>
  </v-list-item>
</template>

<script>
export default {
  props: ["item", "isActive"],
};
</script>
