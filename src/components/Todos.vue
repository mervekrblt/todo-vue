/* eslint-disable vue/valid-v-for */
<script>
import { mapState, mapActions } from 'vuex';
import Todo from './Todo.vue';

export default {
  components: { Todo },
  name: 'Todos',

  computed: {
    ...mapState(['todos']),
  },
  methods: {
    ...mapActions(['fetchTodos']),
  },

  created() {
    this.fetchTodos();
  },
};
</script>

<template>
<section>
  <section class="container">
    <todo class="todo" v-for="todo in todos" :key="todo.id" :todo="todo"></todo>
    <!--
  <div class="todo" v-for="todo in todos" :todo="todo">
      <i class="far fa-trash-alt" @click="deleteTodo"></i>
      <p>{{ todo.name }}</p>
      <p>{{ todo.id }}</p>
  </div>
  -->
  </section>

</section>
</template>

<style scoped>

.container {
  display: flex;
  width: 60vh;
  margin: 0 auto;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10vh;
  border-radius: 2vh;
  background-color: rgba(187, 194, 97, 0.3);
}

.todo:hover {
    transform: scale(1.1);
    background-color: aliceblue;
}

@media (max-width: 500px) {
  .container {
    max-width: 30vh;
  }
  .todo {
    max-width: 30vh;
  }
}
</style>
