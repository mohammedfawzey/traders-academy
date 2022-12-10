<template>
  <v-app>
    <v-main>
      <!-- {{ $tc("message.hello") }}
      <v-btn @click="$i18n.locale = 'ar'">ar</v-btn>
      <v-btn @click="$i18n.locale = 'en'">en</v-btn>
      <ul>
        <li v-for="n in 4" :key="n">{{ $t(`message.header[${n}]`) }}</li>
      </ul> -->
      <Parent />
    </v-main>
  </v-app>
</template>

<script>
import Parent from "./Parent";
import TheBestPractices from "./BestPractices.vue";
export default {
  components: {
    Parent,
    TheBestPractices,
  },
};
</script>

<style scoped></style>
