<script>
import NewTodo from './NewTodo.vue';
import Todos from './Todos.vue';

export default {
  components: { Todos, NewTodo },
  name: 'HelloWorld',
  data() {
    return {
      github: 'https://github.com/mervekrblt',
    };
  },
};
</script>

<template>
  <div class="hello">
    <h1>To-Do by <a :href="github">Merve Karabulut</a> </h1>
    <new-todo></new-todo>
    <todos></todos>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-family: 'Dancing Script', cursive;
  font-size: xx-large;
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
  color: #b98f42;
}

</style>
