import React from 'react';
import NavBar from './NavBar.js';
import MainContent from './MainContent.js';

class App extends React.Component
{
	render()
	{
		return(
			<>
				<NavBar/>
				<MainContent/>
			</>
		);
	}
}

export default App;
