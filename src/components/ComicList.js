import React from "react";
import Card from "./Card";

const ComicList = ({ comicData }) => {
	return (
		<div className='character-list'>
			{comicData?.map(
				({ title, id, thumbnail: { path }, description }) => {
					return (
						<Card
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
