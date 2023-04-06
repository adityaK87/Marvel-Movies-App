import React from "react";
import { Link } from "react-router-dom";
import "../styles/index.css";
const DropDown = () => {
	return (
		<ul className='nav__submenu'>
			<li className='nav__submenu-item '>
				<Link to='/characters' className='links'>
					Characters
				</Link>
			</li>
			<li className='nav__submenu-item '>
				<Link to='/comics' className='links'>
					Comis
				</Link>
			</li>
			<li className='nav__submenu-item '>
				<Link to='/series' className='links'>
					Series
				</Link>
			</li>
		</ul>
	);
};

export default DropDown;
