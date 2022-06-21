<template>
  <div>
    <Header title-tex="Аналитика" />

    <Graph />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Header from "../components/Header.vue";
import Graph from "@/components/Graph.vue";

export default Vue.extend({
  name: "GraphView",

  components: {
    Header,
    Graph,
  },
});
</script>
