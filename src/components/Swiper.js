import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../styles/index.css";
import marvelCharacter from "../assets/marvelCharacters.jpg";
import marvelComics from "../assets/marvelComics.jpg";
import marvelSeries from "../assets/marvelSeries.png";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import SwiperCard from "./SwiperCard";
import { Link } from "react-router-dom";

const CardSwiper = () => {
	return (
		<React.Fragment>
			<Swiper
				id='card-swiper'
				slidesPerView={1}
				spaceBetween={30}
				loop={true}
				pagination={{
					clickable: true,
				}}
				autoplay={{
					delay: 4000,
					disableOnInteraction: false,
				}}
				navigation={true}
				modules={[Autoplay, Pagination, Navigation]}
				className='mySwiper'>
				<SwiperSlide>
					<Link to='/characters'>
						<SwiperCard
							cardName='Characters'
							cardImage={marvelCharacter}
						/>
					</Link>
				</SwiperSlide>
				<SwiperSlide>
					<Link to='/comics'>
						<SwiperCard
							cardName='Comics'
							cardImage={marvelComics}
						/>
					</Link>
				</SwiperSlide>
				<SwiperSlide>
					<Link to='/series'>
						<SwiperCard
							cardName='Series'
							cardImage={marvelSeries}
						/>
					</Link>
				</SwiperSlide>
			</Swiper>
		</React.Fragment>
	);
};

export default CardSwiper;
