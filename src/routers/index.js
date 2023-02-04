import React, { useState, useEffect } from "react";
import { movieData } from "../api";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "../components/LandingPage";
import CharactersList from "../components/CharactersList";
import Navbar from "../components/Navbar";
// import MoviesContextMenu from '../context/index';

const AppRouter = () => {
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
				</Routes>
				{/* </MoviesContextMenu.Provider> */}
			</Router>
		</>
	);
};

export default AppRouter;
