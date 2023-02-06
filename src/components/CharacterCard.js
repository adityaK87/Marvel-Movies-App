import React from "react";
import "../styles/index.css";

const CharacterCard = ({ name, thumbnail, description, urls }) => {
	return (
		<div className='character-card'>
			<div className='img'>
				<img
					src={`${thumbnail.path}.jpg`}
					className='character-img'
					alt={name}
				/>
			</div>
			<div className='character-content'>
				<h4 className='character-name'>{name}</h4>
				{/* {description.length > 0 ? ( */}
				<p className='character-description'>{description}</p>
				{/* ) : ( */}
				{/* " " */}
				{/* )} */}
			</div>
		</div>
	);
};

export default CharacterCard;
