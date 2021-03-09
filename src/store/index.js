import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Ik1lcnZlIEthcmFidWx1dCIsImlkIjo3MywiaWF0IjoxNjE1MzAxNDY4LCJleHAiOjE2MTUzNzM0Njh9.tfW-lsGntxUUSe7DuBx5xZiTl5zzgggq_ttveVlTYaU';

axios.interceptors.request.use(
  (config) => {
    // eslint-disable-next-line no-param-reassign
    config.headers = {
      token: accessToken,
    };
    return config;
  },
);

/*
axios.interceptors.request.use(
  (config) => {
    // eslint-disable-next-line no-param-reassign
    config.headers.authorization = `Bearer ${accessToken}`;
    return config;
  },
);
*/
export default new Vuex.Store({
  state: {
    todos: ['merve'],
  },
  mutations: {
  },
  actions: {

    async fetchMeetups() {
      const time = new Date();
      const result = await axios.get('https://aodapi.eralpsoftware.net/todo');
      console.log(result.data, time);
    },
  },
  modules: {
  },
});
