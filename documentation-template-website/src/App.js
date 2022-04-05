import TextPackage from './textpackage.json';
import React from 'react';
import NavBar from './NavBar.js';
import TitleAndHeading from './TitleAndHeading.js';
import Documentation from './Documentation.js';


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
				<Documentation />
			</>
		);
	}
}

export default App;
