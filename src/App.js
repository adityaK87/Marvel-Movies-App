import React, { useState, useEffect } from "react";
import { movieData } from "./api/index";
import LandingPage from "./components/LandingPage";

const App = () => {
	const [apiData, setApiData] = useState([]);
	const [category, setCategory] = useState("characters");

	useEffect(() => {
		movieData(category, setApiData);
		console.log("inside useEffect " + apiData);
	}, [category]);

	const handleOnCharacters = () => {
		setCategory("characters");
	};
	const handleOnComics = () => {
		setCategory("comics");
		console.log("handleOnComics Called ");
	};
	const handleOnSeries = () => {
		setCategory("series");
	};

	console.log(apiData);

	return (
		<>
			<LandingPage
				handleOnCharacters={handleOnCharacters}
				handleOnComics={handleOnComics}
				handleOnSeries={handleOnSeries}
			/>
		</>
	);
};

export default App;
