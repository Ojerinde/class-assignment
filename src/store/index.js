import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      staffs: [],
    };
  },
  getters: {
    getAllStaffs(state) {
      return state.staffs;
    },
  },
  mutations: {
    fetchStaffs(state, payload) {
      state.staffs = payload;
      console.log(state.staffs, "vuex");
    },
  },
  actions: {
    fetchStaffs(context, payload) {
      context.commit("fetchStaffs", payload);
    },
  },
  modules: {},
});
