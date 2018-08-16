import * as types from './mutation-types'

export const singer = (state) => {
  console.log(1111)
  if (!state.singer) {
    state.singer = JSON.parse(localStorage.getItem(types.SET_SINGER)) ? JSON.parse(localStorage.getItem(types.SET_SINGER)) : {}
  }
  return state.singer
}

export const playing = (state) => {
  return state.playing ? state.playing : localStorage.getItem(types.SET_PLAYING_STATE)
}

export const fullScreen = (state) => {
  return state.fullScreen ? state.fullScreen : localStorage.getItem(types.SET_FULL_SCREEN)
}

export const playlist = (state) => {
  if (!state.playlist) {
    state.playlist = JSON.parse(localStorage.getItem(types.SET_PLAYLIST)) ? JSON.parse(localStorage.getItem(types.SET_PLAYLIST)) : []
  }
  return state.playlist
}

export const sequenceList = (state) => {
  if (!state.sequenceList) {
    state.sequenceList = JSON.parse(localStorage.getItem(types.SET_SEQUENCE_LIST)) ? JSON.parse(localStorage.getItem(types.SET_SEQUENCE_LIST)) : []
  }
  return state.sequenceList
}

export const mode = (state) => {
  return state.mode ? state.mode : localStorage.getItem(types.SET_PLAY_MODE)
}

export const currentIndex = (state) => {
  return state.currentIndex ? state.currentIndex : localStorage.getItem(types.SET_CURRENT_INDEX)
}

export const currentSong = (state) => {
  if (!state.playlist) {
    state.playlist = JSON.parse(localStorage.getItem(types.SET_PLAYLIST)) ? JSON.parse(localStorage.getItem(types.SET_PLAYLIST)) : []
  }
  let currentIndex = state.currentIndex ? state.currentIndex : localStorage.getItem(types.SET_CURRENT_INDEX)
  return state.playlist[currentIndex] || {}
  // return state.playlist[state.currentIndex] || {}
}
