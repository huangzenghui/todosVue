<template>
  <form class="header" v-on:submit.prevent="onSubmit">
    <h1 class="header__h1">todos</h1>
    <input class="header__newTodo" placeholder="What needs to be done?" v-model="todo"/>
  </form>
</template>

<script>
import {mapActions} from 'vuex';
import ACTION_TYPES from '../store/action_types';

export default {
  data: function(){
    return {
      todo: '',
    }
  },
  methods: {
    ...mapActions([ACTION_TYPES.addTodo]),
    onSubmit(){
      this.todo && this.addTodo({text: this.todo});
      this.todo = '';
    }
  }
}
</script>
<style src="./Header.css"></style>