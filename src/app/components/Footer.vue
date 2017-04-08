<template>
  <footer class="footer">
    <span class="footer__todo-count"><i>{{todos.length}}</i> items left</span>
    <ul class="footer__filters">
      <li><a href="#" :class="allStatusClass" @click.prevent="switchAllStatus">All</a></li>
      <li><a href="#" :class="activeStatusClass" @click.prevent="switchActiveStatus">Active</a></li>
      <li><a href="#" :class="completedStatusClass" @click.prevent="switchCompletedStatus">Completed</a></li>
    </ul>
    <button class="footer__clear-completed" v-show="hasCompleted" @click="clearCompleted">Clear completed</button>
  </footer>
</template>

<script>
import {mapGetters, mapActions, mapMutations} from 'vuex';
import MUTATION_TYPES from '../store/mutation_types';
import ACTION_TYPES from '../store/action_types';

export default {
  computed: {
    ...mapGetters(['todos', 'todosStatus']),
    allStatusClass(){
      return {
        selected: this.todosStatus === 'ALL',
      }
    },
    activeStatusClass(){
      return {
        selected: this.todosStatus === 'ACTIVE',
      }
    },
    completedStatusClass(){
      return {
        selected: this.todosStatus === 'COMPLETED',
      }
    },
    hasCompleted(){
      for(let todo of this.todos){
        if(todo.complete){
          return true;
        }
      }
      return false;
    }
  },
  methods: {
    ...mapActions([ACTION_TYPES.removeTodos]),
    ...mapMutations([MUTATION_TYPES.switchTodosStatus]),
    switchAllStatus(){
      this.switchTodosStatus({status: 'ALL'});
    },
    switchActiveStatus(){
      this.switchTodosStatus({status: 'ACTIVE'});
    },
    switchCompletedStatus(){
      this.switchTodosStatus({status: 'COMPLETED'});
    },
    clearCompleted(){
      const ids = this.todos.filter(todo => todo.complete).map(todo => todo._id);
      ids && ids.length !== 0 && this.removeTodos({ids})
    }
  }
}
</script>
<style src="./Footer.css"></style>