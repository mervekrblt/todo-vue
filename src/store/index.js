import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

// My token
const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Ik1lcnZlIEthcmFidWx1dCIsImlkIjo3MywiaWF0IjoxNjE1MzczOTU2LCJleHAiOjE2MTU0NDU5NTZ9.Lc5FM0LzUPQPoQfySF-PWv1Lll-wov1mhvmiwUsakT8';

// Key Api config
axios.interceptors.request.use(
  (config) => {
    // eslint-disable-next-line no-param-reassign
    config.headers = {
      token: accessToken,
    };
    return config;
  },
);

export default new Vuex.Store({
  state: {
    todos: [],
  },
  mutations: {

    SET_TODOS(state, data) {
      state.todos = data.body;
      // console.log(state.todos);
    },

    SET_NEWTODO(state, data) {
      state.todos.push(data);
    },
  },

  actions: {

    async fetchTodos({ commit }) {
      const result = await axios.get('https://aodapi.eralpsoftware.net/todo');
      commit('SET_TODOS', result.data);
    },

    async createTodo({ commit }, newTodo) {
      const result = await axios.post('https://aodapi.eralpsoftware.net/todo', newTodo);
      commit('SET_NEWTODO', result.data);
      // eslint-disable-next-line no-restricted-globals
      location.reload();
    },

    // eslint-disable-next-line no-empty-pattern
    async delTodo({ }, id) {
      await axios.delete(`https://aodapi.eralpsoftware.net/todo/${id}`);
      // console.log(result.data);
      // eslint-disable-next-line no-restricted-globals
      location.reload();
    },

  },
  modules: {
  },
});
