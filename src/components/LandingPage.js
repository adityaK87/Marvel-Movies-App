import React from "react";
import Typewriter from "typewriter-effect";
import "../styles/index.css";
const LandingPage = () => {
	return (
		<div className='landing-page'>
			<h2 className='heading'>
				<span>WELCOME TO </span>
				<Typewriter
					options={{
						strings: [` MARVEL CINEMATIC UNIVERSE!`],
						autoStart: true,
						loop: true,
					}}
				/>
			</h2>
			<a className='get-started-btn' href='#card-swiper'>
				Get Started
			</a>
		</div>
	);
};

export default LandingPage;
