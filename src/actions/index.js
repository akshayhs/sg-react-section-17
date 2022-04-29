/* An acition creator for selecting a song */
export const selectSong = (song) => {
	/* Type is mandatory. Payload is optional for an any action */
	return {
		type: 'SELECT_SONG', 
		payload: song,
	}
}