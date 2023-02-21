import React from "react";
import "../styles/index.css";

const About = () => {
	return (
		<>
			<div className='about'>
				<h1>Marvel Corporate Information</h1>
			</div>

			<div className='marvel-intro'>
				<h1>Marvel Introduction</h1>
				<p>
					The Marvel Cinematic Universe (MCU) is an American media
					franchise and shared universe centered on a series of
					superhero films produced by Marvel Studios. The films are
					based on characters that appear in American comic books
					published by Marvel Comics. The franchise also includes
					television series, short films, digital series, and
					literature. The shared universe, much like the original
					Marvel Universe in comic books, was established by crossing
					over common plot elements, settings, cast, and characters.
					<b>
						<a
							href='https://en.wikipedia.org/wiki/Marvel_Cinematic_Universe'
							target='_blank'>
							Read More
						</a>
					</b>
				</p>
			</div>
			<div className='marvel-intro'>
				<h1 className='company-info '>COMPANY INFO AND CONTACT</h1>
				<p>
					Marvel Entertainment, LLC, a wholly-owned subsidiary of The
					Walt Disney Company, is one of the world's most prominent
					character-based entertainment companies, built on a proven
					library of more than 8,000 characters featured in a variety
					of media over seventy-five years. Marvel utilizes its
					character franchises in entertainment, licensing and
					publishing. For more information visit marvel.com. © 2023
					MARVEL
				</p>
			</div>

			<div className='marvel-intro'>
				<h2>Corporate Headquarters</h2>
				<h3>Marvel Entertainment, LLC</h3>
				<p>1290 Avenue of the Americas</p>
				<text>New York, NY 10104</text>
			</div>
		</>
	);
};

export default About;
