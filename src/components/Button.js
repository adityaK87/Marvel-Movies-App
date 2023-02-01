import React from "react";
import "../styles/index.css";

const Button = ({ name, handleOnCharacters }) => {
	return (
		<button className='btn' onClick={handleOnCharacters}>
			{name}
		</button>
	);
};

export default Button;
