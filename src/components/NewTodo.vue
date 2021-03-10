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

      if (this.text === '') {
        // eslint-disable-next-line no-alert
        alert('Text is required');
      } else {
        this.createTodo(newTodo);
        // eslint-disable-next-line no-restricted-globals
        // location.reload();
      }
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
      <button @click="addNewTodo">Add</button>
  </section>
</template>

<style scoped>
section {

  margin: 0 auto;
  margin-bottom: 5vh;
  width: 60vh;
  display: flex;
  justify-content: space-around;
  align-items: baseline;
  height: 5vh;
}

input{
  height: 5vh;
  width: 30vh;
  font-family: 'Dancing Script', cursive;
  border-radius: 1vh;
  font-size: 3vh;
  font-weight: 400;
  margin-bottom: 2vh;
}

button{
  height: 5vh;
  width: 15vh;
  border-radius: 1vh;
  font-size: 3vh;
  font-family: 'Dancing Script', cursive;
  font-weight: 400;
}

@media (max-width: 500px) {
  section {
    max-width: 30vh;
  }
}
</style>
