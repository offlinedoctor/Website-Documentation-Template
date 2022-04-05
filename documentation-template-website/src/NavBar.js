import React from 'react';
import NavBarStyle from './NavBar.css';

const SideBarButtons = ["Introduction", "Documentation", "Sources", "Special Thanks"];

class NavBar extends React.Component
{
	render()
	{
		return(
			<>
				<div class="sideNavBar">
					<h3 style={{color: "white", fontFamily: "DejaVu", textAlign: "center"}}>Editor Utility Widget Helper Functions</h3>
					{
						SideBarButtons.map(eachIteration =>
							<button style={{width: "100%", textAlign: "left"}} class="navButton" id={eachIteration}>{eachIteration}</button>
						)
					}
				</div>
			</>
		);
	}
}

export default NavBar;
