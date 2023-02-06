import React from "react";
import Card from "./Card";

const SeriesList = ({ seriesData }) => {
	return (
		<div className='character-list'>
			{seriesData?.map(
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

export default SeriesList;
