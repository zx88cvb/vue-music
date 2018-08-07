import * as types from './mutation-types'

const mutations = {
  [types.SET_SINGER] (state, singer) {
    state.singer = singer
    try {
      localStorage.singer = singer
    } catch (e) {}
  }
}

export default mutations
