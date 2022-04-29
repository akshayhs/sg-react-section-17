import { combineReducers } from "redux";

/* Reducers for our Action creators */
/* Reducer that returns a static list of songs */

const songsReducer = () => {
	/* Because this is a static list that is never manipulated, it shall not have any default arguments to the array argument provided to the reducer. */
	return [
		{title: 'The A Team - Ed Sheeran', duration: '2:50'},
		{title: 'Not afraid - Eminmen', duration: '8:30'},
		{title: 'Lose yourself - Eminem', duration: '4:48'},
		{title: 'Lush life - Zara Larsson', duration: '3:21'}
	]
}

/* Reducer that triggers a new song selection */
export const selectSongReducer = (currentlySelectedSong = null, action) => {
	/* Check if the action is to select a song, if it is then return the payload of the action */
	if(action.type == 'SELECT_SONG') {
		return action.payload;
	}
	/* If it's not the action to select a song, just return the currently current;ly selected song */
	return currentlySelectedSong;
}

export default combineReducers({
	songs: songsReducer,
	selectedSong: selectSongReducer,
});