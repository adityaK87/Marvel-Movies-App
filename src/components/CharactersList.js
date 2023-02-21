import React from "react";
import Card from "./Card";
import Pagination from "./Pagination";

const CharactersList = ({ characterData }) => {
	const { results, total } = characterData; //destructuring the character data
	return (
		<>
			<Pagination totalResults={total} />
			<div className='card-list'>
				{results?.map(
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
		</>
	);
};
export default CharactersList;
