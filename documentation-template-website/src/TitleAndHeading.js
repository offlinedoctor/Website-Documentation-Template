import React from 'react';
import TitleAndHeadingStyle from './TitleAndHeading.css';

class TitleAndHeading extends React.Component
{
	render()
	{
		return(
			<div class="TitleAndHeading">
				<h1>{this.props.title}</h1>
				<h2>{this.props.description}</h2>
			</div>
		);
	}
}

export default TitleAndHeading;
