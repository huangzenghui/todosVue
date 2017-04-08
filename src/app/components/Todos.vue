<template>
  <section class="main">
    <input class="toggle-all" v-show="hasTodos" type="checkbox" v-model="completed" @change="changeAllState"/>
    <transition-group name="todo-list" tag="ul" class="todo-list">
      <li v-for="todo in todos" :key="todo._id">
        <Todo :todo="todo"></Todo>
      </li>
    </transition-group>
  </section>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
import Todo from './Todo.vue';
import ACTION_TYPES from '../store/action_types';

export default {
  computed: {
    ...mapGetters(['todos']),
    completed(){
      if(!this.todos || this.todos.length === 0){
        return false;
      }
      for(let todo of this.todos){
        if(!todo.complete){
          return false;
        }
      }
      return true;
    },
    hasTodos(){
      return this.todos.length !== 0;
    },
  },
  methods: {
    ...mapActions([ACTION_TYPES.updateTodosState]),
    changeAllState(){
      if(this.todos && this.todos.length !== 0){
        const ids = this.todos.map(todo => todo._id);
        this.updateTodosState({ids, complete: !this.completed});
      }
    }
  },
  components: {Todo}
}
</script>
<style src="./Todos.css"></style>