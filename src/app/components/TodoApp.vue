<template>
  <section class="todoapp">
    <my-header></my-header>
    <todos></todos>
    <my-footer></my-footer>
  </section>
</template>

<script>
import MyHeader from './Header.vue';
import Todos from './Todos.vue';
import MyFooter from './Footer.vue';

export default {
  components: {MyHeader, Todos, MyFooter}
}
</script>
<style src="./Common.css"></style>
<style src="./TodoApp.css"></style>