import React, { useContext } from "react";
import useGlobalContext from "../context";
import Card from "./Card";
import Loader from "./Loader";
import Pagination from "./Pagination";

const SeriesList = ({ series }) => {
	const { results, total } = series;

	const { isLoading } = useContext(useGlobalContext);
	return (
		<>
			{isLoading ? (
				<Loader />
			) : (
				<div className='card-list'>
					{results?.map(
						({
							title,
							id,
							thumbnail: { path },
							description,
							urls,
						}) => {
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
			)}
			<Pagination totalResults={total} />
		</>
	);
};

export default SeriesList;
