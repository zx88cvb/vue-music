import * as types from './mutation-types'

const mutations = {
  [types.SET_SINGER] (state, singer) {
    state.singer = singer
    try {
      localStorage.singer = singer
    } catch (e) {}
  },
  [types.SET_PLAYING_STATE] (state, flag) {
    state.playing = flag
  },
  [types.SET_FULL_SCREEN] (state, flag) {
    state.fullScreen = flag
  },
  [types.SET_PLAYLIST] (state, playlist) {
    state.playlist = playlist
  },
  [types.SET_SEQUENCE_LIST] (state, sequenceList) {
    state.sequenceList = sequenceList
  },
  [types.SET_PLAY_MODE] (state, mode) {
    state.mode = mode
  },
  [types.SET_CURRENT_INDEX] (state, index) {
    state.currentIndex = index
  }
}

export default mutations
