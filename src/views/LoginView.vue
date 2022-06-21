<template>
  <div>
    <Header title-tex="LeadHit" />

    <InputForm />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Header from "../components/Header.vue";
import InputForm from "@/components/InputForm.vue";

export default Vue.extend({
  name: "LoginView",

  components: {
    Header,
    InputForm,
  },
});
</script>
