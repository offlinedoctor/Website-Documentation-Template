import React from 'react';
import TitleAndHeadingStyle from './TitleAndHeading.css';

class TitleAndHeading extends React.Component
{
	render()
	{
		return(
			<div class="TitleAndHeading" style={{paddingTop: "250px", paddingBottom: "250px"}}>
				<h1>{this.props.title}</h1>
				<h2>{this.props.description}</h2>
			</div>
		);
	}
}

export default TitleAndHeading;
