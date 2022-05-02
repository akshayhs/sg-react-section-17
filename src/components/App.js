import React from 'react';

import SongList from './SongList';
import SongDetail from './SongDetail';

const App = () => {
	return (
		<div className="App">
			<h1>App</h1>
			<SongList />
			<SongDetail />
		</div>
	)
}

export default App;