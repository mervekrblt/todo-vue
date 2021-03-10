<script>
import { mapActions } from 'vuex';

export default {
  name: 'Todo',

  props: ['todo'],

  methods: {
    ...mapActions(['delTodo']),

    deleteTodo() {
      this.delTodo(this.todo.id);
    },
  },
};
</script>

<template>
  <div class="todo">
      <p>{{ todo.name }}</p>
      <i class="far fa-trash-alt" @click="deleteTodo"></i>
  </div>
</template>

<style scoped>

.todo {
  font-family: 'Dancing Script', cursive;
  border-radius: 1vh;
  font-size: 3vh;
  font-weight: 600;
  margin-bottom: 2vh;
  width: 50vh;
  transition: 0.3s;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

p {
    margin-right: 2vh;
}

i {
    margin-right: 2vh;
}

</style>
