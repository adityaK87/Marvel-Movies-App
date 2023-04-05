import React from "react";
import "../styles/index.css";

const SwiperCard = ({ cardName, cardImage }) => {
	return (
		<div className='swiperCard'>
			<img src={cardImage} alt={cardName} />
			<h3>{cardName}</h3>
		</div>
	);
};

export default SwiperCard;
