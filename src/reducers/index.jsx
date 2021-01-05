import { combineReducers } from 'redux';

const musicsReducer = () => {
  return [
    {title: 'break the snow', duration: '4:05', artist: 'Snowyman'},
    {title: 'urbi caritas deus', duration: '5:10'},
    {title: 'tell me nothing', duration: '3:02'},
    {title: 'Yeshua mi amor', duration: '7:02'}
  ];
};

const selectedMusicReducer = (selectedMusic = null, action) => {
  if (action.type === 'MUSIC_SELECTED') {
    return action.payload;
  }

  return selectedMusic;
}

export default combineReducers({
  music: musicsReducer,
  selectedMusic: selectedMusicReducer
});