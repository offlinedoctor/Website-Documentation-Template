import TextPackage from './textpackage.json';
import React from 'react';
import NavBar from './NavBar.js';
import TitleAndHeading from './TitleAndHeading.js';
import Documentation from './Documentation.js';

class App extends React.Component
{
	componentDidMount()
	{
		console.log(TextPackage.documentation_helper_functions);
		TextPackage.documentation_helper_functions.map((eachElement) =>
			{
				console.log(eachElement[0]);
				console.log(eachElement[1]);
			}
		);
	}
	
	render()
	{
		return(
			<>
				<NavBar/>
				<TitleAndHeading title={TextPackage.titlePage.heading} description={TextPackage.titlePage.description} />
				<Documentation documentation_helper_functions={TextPackage.documentation_helper_functions} documentation_custom_umg={TextPackage.documentation_custom_umg}/>
			</>
		);
	}
}

export default App;
