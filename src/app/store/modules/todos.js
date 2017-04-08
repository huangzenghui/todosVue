import MUTATION_TYPES from '../mutation_types';
import ACTION_TYPES from '../action_types';
import * as api from '../../api';
import {errorsMutationHandle} from '../mutations';

export const mutations = {
  [MUTATION_TYPES.getTodos](state, {todos}) {
    state.todos = [...todos];
  },
  [MUTATION_TYPES.addTodo](state, {todo}) {
    state.todos = [todo, ...state.todos];
  },
  [MUTATION_TYPES.updateTodo](state, {id, text}) {
    state.todos = state.todos.map(todo => {
      if(todo._id === id){
        return {...todo, text};
      }
      return todo;
    })
  },
  [MUTATION_TYPES.updateTodosState](state, {ids, complete}) {
    state.todos = state.todos.map(todo => {
      if(ids.indexOf(todo._id) !== -1){
        return {...todo, complete};
      }
      return todo;
    })
  },
  [MUTATION_TYPES.removeTodos](state, {ids}) {
    state.todos = state.todos.filter(todo => {
      return ids.indexOf(todo._id) === -1;
    });
  },
  [MUTATION_TYPES.switchTodosStatus](state, {status}) {
    state.status = status;
  },
};

export const actions = {
  async [ACTION_TYPES.getTodos]({commit}){
    const {todos, errors} = await api.getTodos();
    errorsMutationHandle(commit, errors, {type: MUTATION_TYPES.getTodos, todos});
  },
  async [ACTION_TYPES.addTodo]({commit}, {text}){
    const {todo, errors} = await api.addTodo(text);
    errorsMutationHandle(commit, errors, {type: MUTATION_TYPES.addTodo, todo});
  },
  async [ACTION_TYPES.updateTodo]({commit}, {id, text}){
    const {todo, errors} = await api.updateTodo(id, text);
    errorsMutationHandle(commit, errors, {type: MUTATION_TYPES.updateTodo, id, text});
  },
  async [ACTION_TYPES.updateTodosState]({commit}, {ids, complete}){
    const {errors} = await api.changeTodosState(ids, complete);
    errorsMutationHandle(commit, errors, {type: MUTATION_TYPES.updateTodosState, ids, complete});
  },
  async [ACTION_TYPES.removeTodos]({commit}, {ids}){
    const {errors} = await api.removeTodos(ids);
    errorsMutationHandle(commit, errors, {type: MUTATION_TYPES.removeTodos, ids});
  },
};

export const getters = {
  todos: state => {
    return state.status === 'ALL' 
      ? state.todos
      : state.status === 'COMPLETED' 
        ? state.todos.filter(todo => todo.complete) 
        : state.todos.filter(todo => !todo.complete);
  },
  todosStatus: state => state.status,
};

const todosModule = {
  state: {
    todos: [],
    status: 'ALL'
  },
  mutations,
  actions,
  getters,
}

export default todosModule;