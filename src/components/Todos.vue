<script>
import { mapState, mapActions } from 'vuex';

export default {
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
  <div>{{ todos.counter }}</div>
  <section class="container">
  <div class="todo" v-for="todo in todos" :key="todo.id">
     <i class="far fa-trash-alt"></i>
     <p>{{ todo.name }}</p>
  </div>
  </section>

</section>
</template>

<style scoped>
.container {
  display: flex;
  width: 30vh;
  margin: 0 auto;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border: 5px pink solid;
  padding: 10vh;
  border-radius: 2vh;
  background-color: rgb(229, 240, 229, 0.3);
}

i {
  float: right;
}

.todo {
  border: 2px solid red;
  font-family: 'Dancing Script', cursive;
  border-radius: 1vh;
  font-size: 3vh;
  font-weight: 600;
  margin-bottom: 2vh;
  display: flex;
}
</style>
