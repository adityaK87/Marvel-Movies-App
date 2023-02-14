import React from "react";
import Card from "./Card";

const CharactersList = ({ characterData }) => {
	console.log(characterData);
	return (
		<div className='card-list'>
			{characterData?.map(
				({ name, id, thumbnail: { path }, description, urls }) => {
					return (
						<Card
							urls={urls}
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
