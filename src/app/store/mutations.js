import MUTATION_TYPES from './mutation_types';

const mutations = {
  [MUTATION_TYPES.errors](state, payload) {
    state.errors = [...state.errors, ...payload.errors];
  }
}

export function errorsMutationHandle(commit, errors, notErrorCommit){
  errors
    ? commit({type: MUTATION_TYPES.errors, errors}) 
    : commit(notErrorCommit);
}

export default mutations;