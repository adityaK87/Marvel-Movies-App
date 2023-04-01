import React, { useState, useEffect } from "react";
import { movieData } from "../api";
// import
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "../components/LandingPage";
import CharactersList from "../components/CharactersList";
import Navbar from "../components/Navbar";
import Loader from "../components/Loader";
import ComicList from "../components/ComicList";
import SeriesList from "../components/SeriesList";
import About from "../components/About";
import useGlobalContext from "../context";
import CardSwiper from "../components/CardSwiper";

const AppRouter = () => {
	const [apiData, setApiData] = useState({});
	const [category, setCategory] = useState("characters");
	const [isLoading, setIsLoading] = useState(false);
	const [offset, setOffset] = useState(0);

	useEffect(() => {
		setIsLoading(true);
		movieData(category, setApiData, offset);
		console.log("inside useEffect " + apiData);
		setIsLoading(false);
	}, [category, offset]);

	const setCategoryToLocalStorage = (category) => {
		localStorage.setItem("category", category);
	};

	const handleOnCharacters = () => {
		setCategoryToLocalStorage("characters");
		// setCategory(localStorage.getItem("category"));
	};

	const handleOnComics = () => {
		setCategoryToLocalStorage("comics");
		// setCategory(localStorage.getItem("category"));
	};

	const handleOnSeries = () => {
		setCategoryToLocalStorage("series");
		// setCategory(localStorage.getItem("category"));
	};

	console.log(apiData);

	return (
		<>
			<useGlobalContext.Provider
				value={{ apiData, isLoading, setOffset }}>
				<Router>
					{isLoading ? <Loader /> : null}
					<Navbar />
					<Routes>
						<Route
							path='/'
							element={
								<>
									<LandingPage
										handleOnCharacters={handleOnCharacters}
										handleOnComics={handleOnComics}
										handleOnSeries={handleOnSeries}
									/>
									<CardSwiper />
								</>
							}
						/>
						<Route path='/about' element={<About />} />
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
			</useGlobalContext.Provider>
		</>
	);
};

export default AppRouter;
