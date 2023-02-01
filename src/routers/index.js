import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "../App";
import CharactersList from "../components/CharactersList";
import Navbar from "../components/Navbar";
// import MoviesContextMenu from '../context/index';

const AppRouter = () => {
	return (
		<>
			<Router>
				<Navbar />
				{/* <MoviesContextMenu.Provider > */}
				<Routes>
					<Route path='/' element={<App />} />
					<Route path='/characters' element={<CharactersList />} />
				</Routes>
				{/* </MoviesContextMenu.Provider> */}
			</Router>
		</>
	);
};

export default AppRouter;
