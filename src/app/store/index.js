import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations'
import todos from './modules/todos';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    errors: [],
  },
  modules: {
    todos
  },
  mutations
});

export default store;