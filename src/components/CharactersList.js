import React from "react";
import Card from "./Card";

const CharactersList = ({ characterData }) => {
	console.log(characterData);
	return (
		<div className='character-list'>
			{characterData?.map(
				({ name, id, thumbnail: { path }, description }) => {
					return (
						<Card
							key={id}
							name={name}
							path={path}
							description={description}
						/>
					);
				}
			)}
		</div>
	);
};
export default CharactersList;
