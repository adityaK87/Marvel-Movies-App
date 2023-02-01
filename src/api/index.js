import axios from "axios";
export const movieData = async (category, setApiData) => {
	try {
		const response = await axios.get(
			`https://gateway.marvel.com/v1/public/${category.toLowerCase()}?ts=1&apikey=cc6ac16a633e9da105201c3b22f9a85b&hash=eb2c311d0dbdd12fde696a186d0225e7`
		);
		setApiData(response.data.data.results);
	} catch (error) {
		console.log(error);
	}
};
