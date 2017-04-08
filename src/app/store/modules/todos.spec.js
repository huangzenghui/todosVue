import { expect } from 'chai';
import {mutations, getters} from './todos';

describe('todos mutations', () => {
  it('getTodos', () => {
    // 模拟状态
    const state = { todos: [] }
    // 应用 mutation
    mutations.getTodos(state, {todos: [{_id:'1', text: '123', complete: false}, {_id:'2', text: '123', complete: true}]})
    // 断言结果
    expect(state.todos.length).to.equal(2)
  })
  it('addTodo', () => {
    // 模拟状态
    const state = { todos: [{_id:'1', text: '123', complete: false}] }
    // 应用 mutation
    mutations.addTodo(state, {todo: {_id:'2', text: '123', complete: false}})
    // 断言结果
    expect(state.todos.length).to.equal(2)
    expect(state.todos[0]._id).to.equal('2')
  })
  it('updateTodo', () => {
    // 模拟状态
    const state = { todos: [{_id:'1', text: '123', complete: false}] }
    // 应用 mutation
    mutations.updateTodo(state, {id: '1', text: '234'})
    // 断言结果
    expect(state.todos[0].text).to.equal('234')
  })
  it('updateTodosState', () => {
    // 模拟状态
    const state = { todos: [{_id:'1', text: '123', complete: false}, {_id:'2', text: '123', complete: false}] }
    // 应用 mutation
    mutations.updateTodosState(state, {ids: ['1', '2'], complete: true})
    // 断言结果
    expect(state.todos[0].complete).to.equal(true)
    expect(state.todos[1].complete).to.equal(true)
  })
  it('removeTodos', () => {
    // 模拟状态
    const state = { todos: [{_id:'1', text: '123', complete: false}, {_id:'2', text: '123', complete: false}, {_id:'3', text: '123', complete: false}] }
    // 应用 mutation
    mutations.removeTodos(state, {ids: ['1', '2']})
    // 断言结果
    expect(state.todos.length).to.equal(1)
    expect(state.todos[0]._id).to.equal('3')
  })
  it('switchTodosStatus', () => {
    // 模拟状态
    const state = {status: 'ALL'}
    // 应用 mutation
    mutations.switchTodosStatus(state, {status: 'ACTIVE'})
    // 断言结果
    expect(state.status).to.equal('ACTIVE')
  })
})

describe('todos getters', () => {
  it('todos', () => {
    // 模拟状态
    const state = { todos: [{_id:'1', text: '123', complete: false}, {_id:'2', text: '123', complete: false}, {_id:'3', text: '123', complete: true}], status: 'ALL'}
    expect(getters.todos(state).length).to.equal(3)
    mutations.switchTodosStatus(state, {status: 'ACTIVE'});
    expect(getters.todos(state).length).to.equal(2);
    mutations.switchTodosStatus(state, {status: 'COMPLETED'});
    expect(getters.todos(state).length).to.equal(1);
  })
  it('todosStatus', () => {
    // 模拟状态
    const state = { todos: [{_id:'1', text: '123', complete: false}, {_id:'2', text: '123', complete: false}, {_id:'3', text: '123', complete: true}], status: 'ALL'}
    expect(getters.todosStatus(state)).to.equal('ALL')
    mutations.switchTodosStatus(state, {status: 'ACTIVE'});
    expect(getters.todosStatus(state)).to.equal('ACTIVE');
    mutations.switchTodosStatus(state, {status: 'COMPLETED'});
    expect(getters.todosStatus(state)).to.equal('COMPLETED');
  })
})