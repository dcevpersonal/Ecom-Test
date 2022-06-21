<template>
  <v-app>
    <router-view></router-view>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import LoginView from "@/views/LoginView.vue";

export default Vue.extend({
  name: "App",

  data: () => ({
    //
  }),
});
</script>
