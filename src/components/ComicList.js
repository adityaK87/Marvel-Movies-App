import React, { useContext } from "react";
import Card from "./Card";
import Pagination from "./Pagination";
import useGlobalContext from "../context";
import Loader from "./Loader";

const ComicList = ({ comics }) => {
	const { results, total } = comics;
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

export default ComicList;
