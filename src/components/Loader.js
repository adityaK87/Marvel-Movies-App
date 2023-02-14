import React from "react";
import "../styles/index.css";
import loader from "../assets/loader.gif";

const Loader = () => {
	return (
		<div className='loader'>
			<img src={loader} alt='' width='100px' />
		</div>
	);
};

export default Loader;
