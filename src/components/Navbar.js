import React from "react";
import "../styles/index.css";
import logo from "../assets/marvel.png";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
import { AiFillCaretDown } from "react-icons/ai";
import DropDown from "./DropDown";

const Navbar = () => {
	const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

	const handleDropdown = (e) => {
		e.preventDefault();
		setIsDropdownOpen(!isDropdownOpen);
	};
	return (
		<nav className='navbar'>
			<div className='left'>
				<NavLink to='/'>
					<img className='left logo' src={logo} />
				</NavLink>
			</div>
			<div className='right'>
				<NavLink className='navlink' to='/'>
					Home
				</NavLink>
				<NavLink className='navlink' to='/about'>
					About
				</NavLink>
				<p
					className='navlink dropdown-icon'
					onClick={(e) => handleDropdown(e)}>
					Category <AiFillCaretDown />
				</p>
				{isDropdownOpen && <DropDown handleDropdown={handleDropdown} />}
				<NavLink
					className='navlink'
					to='https://developer.marvel.com/'
					target='_blank'>
					API
				</NavLink>
			</div>
		</nav>
	);
};

export default Navbar;
