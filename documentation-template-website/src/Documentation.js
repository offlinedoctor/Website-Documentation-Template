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
					{					
						this.props.documentation_helper_functions.map(eachIteration =>
							<div style={{display: "flex", flexDirection: "row", gap: "25px"}}>
								<h3> {eachIteration[0]} </h3>
								<h3> {eachIteration[1]} </h3>
							</div>
						)
					}
				</div>
				

				
				
			</div>
		);
	}
}

export default Documentation;
