import React from 'react';
import NavBar from './NavBar.js';
import TitleAndHeading from './TitleAndHeading.js';
import TextPackage from './textpackage.json';

class App extends React.Component
{
	componentDidMount()
	{
		;
	}
	
	render()
	{
		return(
			<>
				<NavBar/>
				<TitleAndHeading title={TextPackage.titlePage.heading} description={TextPackage.titlePage.description}/>
			</>
		);
	}
}

export default App;
