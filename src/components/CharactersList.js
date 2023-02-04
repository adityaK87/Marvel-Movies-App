import React from "react";
import CharacterCard from "./CharacterCard";

const CharactersList = ({ characterData }) => {
	console.log(characterData);
	return (
		<div className='character-list'>
			{characterData?.map(({ name, id, thumbnail, description }) => {
				return (
					<CharacterCard
						key={id}
						name={name}
						thumbnail={thumbnail}
						description={description}
					/>
				);
			})}
		</div>
	);
};
export default CharactersList;
