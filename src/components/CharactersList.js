import React, { useContext } from "react";
import Card from "./Card";
import useGlobalContext from "../context";
import Pagination from "./Pagination";
import Loader from "./Loader";

const CharactersList = ({ characters }) => {
	const { results, total } = characters; //destructuring the character data
	const { isLoading } = useContext(useGlobalContext);
	return (
		<>
			{isLoading ? (
				<Loader />
			) : (
				<div className='card-list'>
					{results?.map(
						({
							name,
							id,
							thumbnail: { path },
							description,
							urls,
						}) => {
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
			)}
			<Pagination totalResults={total} />
		</>
	);
};
export default CharactersList;
