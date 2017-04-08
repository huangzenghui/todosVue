<template>
  <div :class="todoItemClass">
    <div class="todo-item__content">
      <input class="todo-item__toggle" type="checkbox" :checked="todo.complete" @change="changeTodoState"/>
      <label @click="changeEditState">{{todo.text}}</label>
      <button class="todo-item__destroy" @click="removeTodo"></button>
    </div>
    <input class="todo-item__edit" v-model="newText" v-focus="editing" @keyup.enter="updateTodoText" @blur="changeEditState"/>
  </div>
</template>

<script>
import {mapActions} from 'vuex';
import ACTION_TYPES from '../store/action_types';

export default {
  props: {
    todo: Object
  },
  data: function(){
    return {
      editing: false,
      newText: this.todo.text
    }
  },
  computed: {
    todoItemClass: function(){
      return {
        'todo-item': true,
        'todo-item-completed': this.todo.complete,
        'todo-item-editing': this.editing,
      }
    }
  },
  methods: {
    ...mapActions([ACTION_TYPES.updateTodosState, ACTION_TYPES.removeTodos, ACTION_TYPES.updateTodo]),
    changeTodoState(){
      const {_id, complete} = this.todo;
      this.updateTodosState({ids: [_id], complete: !complete})
    },
    removeTodo(){
      this.removeTodos({ids: [this.todo._id]});
    },
    changeEditState(){
      this.editing = !this.editing;
    },
    updateTodoText(e){
      const {_id, text} = this.todo;
      if(text !== this.nexText){
        this.updateTodo({id: _id, text: this.newText})
      }
      e.target.blur();
    }
  }
}
</script>
<style src="./Todo.css"></style>