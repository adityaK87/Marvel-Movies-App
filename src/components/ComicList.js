import React from "react";
import Card from "./Card";

const ComicList = ({ comicData }) => {
	return (
		<div className='card-list'>
			{comicData?.map(
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
	);
};

export default ComicList;
