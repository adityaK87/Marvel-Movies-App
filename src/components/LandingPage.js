import React, { useEffect, useState, useRef } from "react";
import "../styles/index.css";
import DOTS from "vanta/dist/vanta.rings.min";
import { Link } from "react-router-dom";

const LandingPage = ({
	handleOnCharacters,
	handleOnComics,
	handleOnSeries,
}) => {
	const [vantaEffect, setVantaEffect] = useState(null);
	const myRef = useRef(null);
	useEffect(() => {
		if (!vantaEffect) {
			setVantaEffect(
				DOTS({
					el: myRef.current,
					mouseControls: true,
					touchControls: true,
					gyroControls: false,
					minHeight: 200.0,
					minWidth: 200.0,
					scale: 1.0,
					scaleMobile: 1.0,
				})
			);
		}
		return () => {
			if (vantaEffect) vantaEffect.destroy();
		};
	}, [vantaEffect]);

	return (
		<div ref={myRef} className='landing-page'>
			<div className='btns'>
				<Link
					to='/characters'
					onClick={handleOnCharacters}
					className='btn'>
					Characters
				</Link>
				<button onClick={handleOnComics} className='btn'>
					Comics
				</button>
				<button onClick={handleOnSeries} className='btn'>
					Series
				</button>
			</div>
		</div>
	);
};

export default LandingPage;
