import React, { useState, useEffect } from "react";
import {
	// movieData,
	fetchCharactersData,
	fetchComicsData,
	fetchSeriesData,
} from "../api";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "../components/LandingPage";
import CharactersList from "../components/CharactersList";
import Navbar from "../components/Navbar";
import Loader from "../components/Loader";
import ComicList from "../components/ComicList";
import SeriesList from "../components/SeriesList";
// import MoviesContextMenu from '../context/index';

const AppRouter = () => {
	const [characters, setCharacters] = useState([]);
	const [comics, setComics] = useState([]);
	const [seriesData, setSeriesData] = useState([]);
	// const [category, setCategory] = useState("characters");
	// const [isLoading, setIsLoading] = useState(false);

	// useEffect(() => {
	// 	movieData(category, setApiData, setIsLoading);
	// 	console.log("inside useEffect " + apiData);
	// }, [category]);

	useEffect(() => {
		fetchCharactersData(setCharacters);
		fetchComicsData(setComics);
		fetchSeriesData(setSeriesData);
	}, []);

	// const handleOnCharacters = () => {
	// 	setCategory("characters");
	// };

	// const handleOnComics = () => {
	// 	setCategory("comics");
	// 	console.log("handleOnComics Called ");
	// };
	// const handleOnSeries = () => {
	// 	setCategory("series");
	// };
	return (
		<>
			<Router>
				<Navbar />
				{/* <MoviesContextMenu.Provider > */}
				<Routes>
					<Route
						path='/'
						element={
							<LandingPage
							// handleOnCharacters={handleOnCharacters}
							// handleOnComics={handleOnComics}
							// handleOnSeries={handleOnSeries}
							/>
						}
					/>
					<Route
						path='/characters'
						element={<CharactersList characterData={characters} />}
					/>
					<Route
						path='/comics'
						element={<ComicList comicData={comics} />}
					/>
					<Route
						path='/series'
						element={<SeriesList seriesData={seriesData} />}
					/>
				</Routes>
				{/* </MoviesContextMenu.Provider> */}
			</Router>
		</>
	);
};

export default AppRouter;
