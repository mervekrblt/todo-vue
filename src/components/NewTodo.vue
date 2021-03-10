<script>

import { mapState, mapActions } from 'vuex';

export default {
  name: 'NewTodo',
  data() {
    return {
      text: '',
    };
  },
  computed: {
    ...mapState(['todos']),
  },
  methods: {
    ...mapActions(['fetchTodos', 'createTodo']),

    addNewTodo() {
      const newTodo = {
        name: this.text,
      };

      this.createTodo(newTodo);
      // eslint-disable-next-line no-restricted-globals
      location.reload();
    },
  },

  /*
  created() {
    this.createTodo();
  },
  */
};
</script>

<template>
  <section>
      <input type="text" v-model="text">
      <button @click="addNewTodo"></button>
  </section>
</template>

<style>

</style>
