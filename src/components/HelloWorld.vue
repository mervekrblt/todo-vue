<script>
import NewTodo from './NewTodo.vue';
import Todos from './Todos.vue';

export default {
  components: { Todos, NewTodo },
  name: 'HelloWorld',
};
</script>

<template>
  <div class="hello">
    <h2>To-Do</h2>
    <new-todo></new-todo>
    <todos></todos>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

</style>
