<template>
  <v-app-bar app color="green" dark>
    <v-spacer></v-spacer>
    <h1>{{ titleTex }}</h1>
    <v-spacer></v-spacer>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "HeaderComp",
  props: {
    titleTex: String,
  },
});
</script>
