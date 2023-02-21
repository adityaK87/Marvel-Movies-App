import axios from "axios";

const Marvel_Url = `https://gateway.marvel.com/v1/public`;
const Api_Key = `?ts=1&apikey=cc6ac16a633e9da105201c3b22f9a85b&hash=eb2c311d0dbdd12fde696a186d0225e7`;
// let getCategory = localStorage.getItem("category");

export const movieData = async (category, setApiData, offset) => {
	const marvelUrl = `${Marvel_Url}/${localStorage
		.getItem("category")
		.toLowerCase()}${Api_Key}&limit=20&offset=${offset}`;

	try {
		const response = await axios.get(marvelUrl);
		setApiData(response.data.data);
		console.log(response.data.data);
	} catch (error) {
		console.log(error);
	}
};

// export const fetchCharactersData = async (setCharacters) => {
// 	try {
// 		const response = await axios.get(`${Marvel_Url}/characters${Api_Key}`);
// 		setCharacters(response.data.data.results);
// 		console.log(response);
// 	} catch (error) {
// 		console.log(error);
// 	}
// };

// export const fetchComicsData = async (setComics) => {
// 	try {
// 		const response = await axios.get(`${Marvel_Url}/comics${Api_Key}`);
// 		setComics(response.data.data.results);
// 		console.log(response);
// 	} catch (error) {
// 		console.log(error);
// 	}
// };

// export const fetchSeriesData = async (setSeriesData) => {
// 	try {
// 		const response = await axios.get(`${Marvel_Url}/series${Api_Key}`);
// 		setSeriesData(response.data.data.results);
// 		console.log(response);
// 	} catch (error) {
// 		console.log(error);
// 	}
// };
