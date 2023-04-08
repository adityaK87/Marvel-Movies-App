import React, { useState, useEffect } from "react";
import { fetchMarvelData } from "../api/index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "../components/LandingPage";
import CharactersList from "../components/CharactersList";
import Navbar from "../components/Navbar";
import Loader from "../components/Loader";
import ComicList from "../components/ComicList";
import SeriesList from "../components/SeriesList";
import About from "../components/About";
import useGlobalContext from "../context";
import Swiper from "../components/Swiper";
import Footer from "../components/Footer";

const AppRouter = () => {
	const [characters, setCharacters] = useState([]);
	const [comics, setComics] = useState([]);
	const [series, setSeriesData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [offset, setOffset] = useState(0);

	useEffect(() => {
		setIsLoading(true);
		fetchMarvelData(setCharacters, "characters", setIsLoading, offset);
		fetchMarvelData(setComics, "comics", setIsLoading, offset);
		fetchMarvelData(setSeriesData, "series", setIsLoading, offset);
		setIsLoading(false);
	}, [offset]);

	return (
		<>
			<useGlobalContext.Provider value={{ isLoading, offset, setOffset }}>
				<Router>
					<Navbar />
					<Routes>
						<Route
							path='/'
							element={
								<>
									<LandingPage />
									<Swiper />
									<Footer />
								</>
							}
						/>
						<Route path='/about' element={<About />} />
						<Route
							path='/characters'
							element={<CharactersList characters={characters} />}
						/>
						<Route
							path='/comics'
							element={<ComicList comics={comics} />}
						/>
						<Route
							path='/series'
							element={<SeriesList series={series} />}
						/>
					</Routes>
				</Router>
			</useGlobalContext.Provider>
		</>
	);
};

export default AppRouter;
