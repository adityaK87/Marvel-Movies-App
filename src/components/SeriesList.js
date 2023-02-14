import React from "react";
import Card from "./Card";

const SeriesList = ({ seriesData }) => {
	return (
		<div className='card-list'>
			{seriesData?.map(
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

export default SeriesList;
