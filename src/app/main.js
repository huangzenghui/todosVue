import Vue from 'vue';
import store from './store';
import TodoApp from './components/TodoApp.vue';
import ACTION_TYPES from './store/action_types';

const app = new Vue({
  el: '#app',
  store,
  render: h => h(TodoApp),
  created: function(){
    this.$store.dispatch(ACTION_TYPES.getTodos);
  }
});

//自定义focus指令，根据值来获取焦点还是取消焦点
Vue.directive('focus', {
  inserted: function (el, {value}) {
    value && el.focus()
  },
  update(el, {value, oldValue}){
    if(value !== oldValue){
      value 
        ? el.focus()
        : el.blur();
    }
  }
})