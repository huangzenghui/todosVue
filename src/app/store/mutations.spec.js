import { expect } from 'chai';
import mutations from './mutations'

// 解构 mutations
const { errors } = mutations

describe('mutations', () => {
  it('errors', () => {
    // 模拟状态
    const state = { errors: [] }
    // 应用 mutation
    errors(state, {errors: ['I am error']})
    // 断言结果
    expect(state.errors.length).to.equal(1)
  })
})