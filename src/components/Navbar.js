import React from "react";
import "../styles/index.css";
import logo from "../assets/marvel.png";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";

const Navbar = () => {
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
