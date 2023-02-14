import React from "react";

const Card = ({ name, path, description, urls }) => {
	const clickedOnPara = () => {
		description.slice(0);
	};

	return (
		<div className='card '>
			<img
				className='card-image'
				src={`${path}.jpg`}
				alt=''
				width='384'
				height='512'
				loading='lazy'
			/>
			<div className='title'>{name}</div>
			<div className=' card-content-div'>
				<p className='card-content' onClick={clickedOnPara}>
					{description === null
						? "NA"
						: `${description.slice(0, 60)}...`}
				</p>
				<figcaption className='font-medium'>
					<div style={{ color: "#64748b" }}>
						Staff Engineer, Algolia
					</div>
				</figcaption>
			</div>
		</div>
	);
};

export default Card;
