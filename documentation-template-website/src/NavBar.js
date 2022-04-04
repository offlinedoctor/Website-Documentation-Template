import React from 'react';
import NavBarStyle from './NavBar.css';

const SideBarButtons = ["Introduction", "Documentation", "Sources", "Special Thanks"];

class NavBar extends React.Component
{
	render()
	{
		return(
			<div class="sideNavBar">
				{
					SideBarButtons.map(eachIteration =>
						<button style={{width: "100%", textAlign: "left"}} id={eachIteration}>{eachIteration}</button>
					)
				}
			</div>
		
		);
	}
}

export default NavBar;
