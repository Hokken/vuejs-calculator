import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {
    btnClick(context, data) {
      context.commit();
      // eslint-disable-next-line no-console
      console.log(data);
    }
  }
});
