import * as types from './mutation-types'

const mutations = {
  [types.SET_SINGER] (state, singer) {
    state.singer = singer
    try {
      localStorage.setItem(types.SET_SINGER, JSON.stringify(singer))
    } catch (e) {}
  },
  [types.SET_PLAYING_STATE] (state, flag) {
    state.playing = flag
    try {
      localStorage.setItem(types.SET_PLAYING_STATE, flag)
    } catch (e) {}
  },
  [types.SET_FULL_SCREEN] (state, flag) {
    state.fullScreen = flag
    try {
      localStorage.setItem(types.SET_FULL_SCREEN, flag)
    } catch (e) {}
  },
  [types.SET_PLAYLIST] (state, playlist) {
    state.playlist = playlist
    try {
      localStorage.setItem(types.SET_PLAYLIST, JSON.stringify(playlist))
    } catch (e) {}
  },
  [types.SET_SEQUENCE_LIST] (state, sequenceList) {
    state.sequenceList = sequenceList
    try {
      localStorage.setItem(types.SET_SEQUENCE_LIST, JSON.stringify(sequenceList))
    } catch (e) {}
  },
  [types.SET_PLAY_MODE] (state, mode) {
    state.mode = mode
    try {
      localStorage.setItem(types.SET_PLAY_MODE, mode)
    } catch (e) {}
  },
  [types.SET_CURRENT_INDEX] (state, index) {
    state.currentIndex = index
    try {
      localStorage.setItem(types.SET_CURRENT_INDEX, index)
    } catch (e) {}
  }
}

export default mutations
