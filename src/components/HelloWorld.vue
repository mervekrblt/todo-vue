<template>
  <div class="hello">
    <h2>Merve</h2>
    <h1>{{ todos.length }}</h1>
    <button @click="fetchMeetups"></button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'HelloWorld',
  computed: {
    ...mapState(['todos']),
  },
  methods: {
    ...mapActions(['fetchMeetups']),
  },
};
</script>

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
