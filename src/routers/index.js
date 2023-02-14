import React, { useState, useEffect } from "react";
import { movieData } from "../api";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "../components/LandingPage";
import CharactersList from "../components/CharactersList";
import Navbar from "../components/Navbar";
import Loader from "../components/Loader";
import ComicList from "../components/ComicList";
import SeriesList from "../components/SeriesList";

const AppRouter = () => {
	const [apiData, setApiData] = useState([]);
	const [category, setCategory] = useState("characters");
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		movieData(category, setApiData, setIsLoading);
		console.log("inside useEffect " + apiData);
	}, [category, setApiData]);

	const setCategoryToLocalStorage = (category) => {
		localStorage.setItem("category", category);
	};

	const handleOnCharacters = () => {
		// localStorage.setItem("category", "characters");
		setCategoryToLocalStorage("characters");
		setCategory(localStorage.getItem("category"));
	};

	const handleOnComics = () => {
		// localStorage.setItem("category", "comics");

		setCategoryToLocalStorage("comics");
		setCategory(localStorage.getItem("category"));
	};
	const handleOnSeries = () => {
		setCategoryToLocalStorage("series");
		// localStorage.setItem("category", "series");
		setCategory(localStorage.getItem("category"));
	};

	return (
		<>
			<Router>
				{isLoading ? <Loader /> : " "}
				<Navbar />
				<Routes>
					<Route
						path='/'
						element={
							<LandingPage
								handleOnCharacters={handleOnCharacters}
								handleOnComics={handleOnComics}
								handleOnSeries={handleOnSeries}
							/>
						}
					/>
					<Route
						path='/characters'
						element={<CharactersList characterData={apiData} />}
					/>
					<Route
						path='/comics'
						element={<ComicList comicData={apiData} />}
					/>
					<Route
						path='/series'
						element={<SeriesList seriesData={apiData} />}
					/>
				</Routes>
			</Router>
		</>
	);
};

export default AppRouter;
