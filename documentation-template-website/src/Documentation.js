import React from 'react';
import DocumentationStyle from './Documentation.css';

class Documentation extends React.Component
{
	render()
	{
		return(
			<div class="TitleAndHeading">
				<h1>Documentation</h1>
				<h2>Below you'll find detailed examples of each of the functions that this plugin provides.</h2>
				
				<h3>Helper Functions</h3>
				<h3>Helper Functions refer to C++ functions that have a Blueprint equivalent.</h3>
				
				
				<div style={{display: "flex", flexDirection: "column", gap: "25px"}}>
					<div style={{display: "flex", flexDirection: "row", gap: "25px"}}>
						<h3> Notifications - Generic </h3>
						<h3>The generic notification system can be called to show the user a message that appears on the side of their screen.</h3>
					</div>			
					<div style={{display: "flex", flexDirection: "row", gap: "25px"}}>
						<h3> Notifications - Alert </h3>
						<h3>This notification takes a boolean input and returns 'Success' if the prior action was successful, or 'Fail', if the prior action was unsuccessful.</h3>
					</div>	
					<div style={{display: "flex", flexDirection: "row", gap: "25px"}}>
						<h3> Save & Load to a Text File </h3>
						<h3>Helper Function that allows you to load from a save file to a string array, or save a string to a text file. Works with .ini files too.</h3>
					</div>
				</div>
				

				
				
			</div>
		);
	}
}

export default Documentation;
