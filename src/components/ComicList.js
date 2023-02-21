import React from "react";
import Card from "./Card";
import Pagination from "./Pagination";

const ComicList = ({ comicData }) => {
	const { results, total } = comicData;
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

export default ComicList;
