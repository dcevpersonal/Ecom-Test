<template>
  <div>
    <v-form>
      <v-container>
        <v-row class="mt-16"></v-row>
        <v-row class="mt-16">
          <v-spacer></v-spacer>
          <v-col cols="12" md="4">
            <v-text-field
              :counter="24"
              label="Id"
              required
              color="green"
              @blur="InputCheckBlur"
              @focus="InputCheckFocus"
              v-model="inputText"
            ></v-text-field>
          </v-col>
          <v-spacer></v-spacer>
        </v-row>

        <v-row>
          <v-spacer></v-spacer>
          <v-col cols="12" md="4" align="center"
            ><v-btn
              elevation="2"
              color="green"
              :disabled="this.inputText.length === 24 ? false : true"
              :dark="this.inputText.length != 24 ? false : true"
              @click="InputSub"
              >Войти</v-btn
            ></v-col
          >
          <v-spacer></v-spacer>
        </v-row>

        <v-row>
          <v-spacer></v-spacer>
          <v-col cols="12" md="4" align="center">
            <v-scroll-y-transition>
              <v-alert
                dense
                outlined
                type="warning"
                v-if="(this.inputText.length != 24) & (this.focus === true)"
              >
                Id сайта должен содержать <strong>24</strong> символа
              </v-alert>
              <v-alert
                dense
                outlined
                type="error"
                v-if="this.error & (this.focus === true)"
              >
                Ошибка: <strong>Неправильные данные</strong>
              </v-alert>
            </v-scroll-y-transition>
          </v-col>
          <v-spacer></v-spacer>
        </v-row>
      </v-container>
    </v-form>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "InputFormComp",
  methods: {
    SetId() {
      this.$store.dispatch("setId", this.inputText);
    },
    InputCheckBlur() {
      this.focus = true;
      if (this.inputText.length === 24) {
        this.SetId();
      }
    },
    InputCheckFocus() {
      this.focus = false;
    },
    InputSub() {
      this.$store.dispatch("loggingReq");
    },
  },
  data() {
    return {
      inputText: "",
      focus: false,
    };
  },
  computed: {
    error() {
      return this.$store.state.error;
    },
  },
});
</script>
