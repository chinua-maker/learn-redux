// Action creator
export const selectMusic = (music) => {
  // return an action
  return{
    type: 'MUSIC_SELECTED',
    payload: music
  }
}