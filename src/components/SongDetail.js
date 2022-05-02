import { React } from 'react';
import { connect } from 'react-redux';

const SongDetail = ({selectedSong}) => {
	if(!selectedSong) {
		return <p>Select a song first!</p>
	}
	return (
		<div>
			<h5>{selectedSong.title} - {selectedSong.duration}</h5>
		</div>
	)
}

const mapStateToProps = state => {
	return {
		selectedSong: state.selectedSong
	};
}

export default connect(mapStateToProps)(SongDetail);