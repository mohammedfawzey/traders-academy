<template>
  <v-list-item link dense @click="changeLang" class="text-capitalize">
    <v-list-item-content>
      <v-list-item-title>{{
        item.title ? item.title : item
      }}</v-list-item-title>
    </v-list-item-content>
  </v-list-item>
</template>

<script>
export default {
  props: {
    item: {
      default: "",
    },
    language: Boolean,
  },
  methods: {
    changeLang() {
      if (this.language) {
        const lang = this.item.value;
        // this.$router.push({ path: `/${lang}` });

        // this.$router.go(1);
        if (`/${lang}` == this.$route.path) return;
        window.location.href = `/${lang}`;
      }
    },
  },
};
// :to="language ? `/${item.value}` : ''"
</script>

<style lang="scss" scoped></style>
