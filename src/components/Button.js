import React from "react";
import "../styles/index.css";

const Button = ({ name, handleOnCharacters }) => {
	console.log("clicked on button");
	return <button className='btn'>{name}</button>;
};

export default Button;
