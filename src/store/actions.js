import * as types from './mutation-types'

export const selectPlay = function ({commit, state}, {list, index}) {
    commit(types.SET_SEQUENCE_LIST, list)
    commit(types.SET_PLAYLIST, list)
}