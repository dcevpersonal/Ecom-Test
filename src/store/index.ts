import Vue from "vue";
import Vuex from "vuex";
import router from "@/router";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    id: "",
    logged: false,
    error: false,
  },
  getters: {
    id: (state) => state.id,
  },
  mutations: {
    SET_ID(state, value: string) {
      state.id = value;
      console.log(state.id);
    },

    SET_ERROR(state, value) {
      state.error = value;
    },
  },
  actions: {
    setId({ commit }, payload) {
      commit("SET_ID", payload);
    },

    loggingReq({ commit }) {
      Vue.axios
        .get("https://track-api.leadhit.io/client/test_auth", {
          headers: {
            "Api-Key": "5f8475902b0be670555f1bb3:eEZn8u05G3bzRpdL7RiHCvrYAYo",
            "Leadhit-Site-Id": this.state.id,
          },
        })
        .then((response) => {
          localStorage.setItem("Leadhit-Site-Id", this.state.id);
          commit("SET_ERROR", false);
          router.push("/graph");
        })
        .catch(() => {
          commit("SET_ERROR", true);
        });
    },
  },
  modules: {},
});
