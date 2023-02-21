import React, { useContext } from "react";
import useGlobalContext from "../context";
import Card from "./Card";
import Pagination from "./Pagination";

const SeriesList = ({ seriesData }) => {
	const { results, total } = seriesData;
	console.log(results, total);

	const { apiData } = useContext(useGlobalContext);
	console.log(apiData);
	return (
		<>
			<Pagination totalResults={total} />
			<div className='card-list'>
				{results?.map(
					({ title, id, thumbnail: { path }, description, urls }) => {
						return (
							<Card
								urls={urls}
								key={id}
								name={title}
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

export default SeriesList;
