<template>
  <v-footer color="#000" dark>
    <v-col cols="12" class="text-center text-body-1 text-sm-h6">
      <span v-if="!$ar">{{ new Date().getFullYear() }}&copy; </span>
      <span>{{ $t("footer.head") }}</span>
      <strong class="main--text"> {{ $t("footer.subhead") }} </strong>
      <span v-if="$ar">&copy;{{ new Date().getFullYear() }}</span>
      <!-- {{$t("footer.head")}} -->
    </v-col>
  </v-footer>
</template>
