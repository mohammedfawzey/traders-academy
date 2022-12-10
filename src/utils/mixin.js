export default {
  methods: {
    MX_redirectTo(path) {
      if (this.$route.path == path) return;
      this.$router.push({ path }).then(() => this.$vuetify.goTo(0));
    },
  },
};
