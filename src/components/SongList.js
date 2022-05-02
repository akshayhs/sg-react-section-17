import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends Component {
	renderList = () => {
		/* Used to return the shadow array of JSX elements */
		return this.props.songs.map((song, i) => {
			/* Used to return JSX for the component */
			return (
				<div className="list-item" key={i}>
					<h4>{song.title}</h4>
					<button className="btn btn-primary">Select</button>					
				</div>
			)
		});
	}

	render() {
		return <div>{this.renderList()}</div>;
	}
}

const mapStateToProps = state => {
	return {
		songs: state.songs
	};
}

export default connect(mapStateToProps, { selectSong })(SongList);
