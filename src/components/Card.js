import React from "react";

const Card = ({ name, path, description, urls }) => {
	return (
		<article className='card '>
			<img
				className='card-image'
				src={`${path}.jpg`}
				alt=''
				loading='lazy'
			/>
			<p className='title'>{name}</p>
			<div className=' card-content-div'>
				{/* <p className='card-content' onClick={clickedOnPara}>
					{description === null
						? "NA"
						: `${description.slice(0, 60)}...`}
				</p> */}
				<figcaption className='font-medium'>
					{/* <div style={{ color: "#64748b" }}>
						Staff Engineer, Algolia
					</div> */}
				</figcaption>
			</div>
		</article>
	);
};

export default Card;
