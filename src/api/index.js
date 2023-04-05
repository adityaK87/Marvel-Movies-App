import axios from "axios";

const Marvel_Url = `https://gateway.marvel.com/v1/public`;
const Api_Key = `?ts=1&apikey=cc6ac16a633e9da105201c3b22f9a85b&hash=eb2c311d0dbdd12fde696a186d0225e7`;

export const fetchMarvelData = async (
	setFunction,
	category,
	setIsLoading,
	offset
) => {
	try {
		setIsLoading(true);
		const response = await axios.get(
			`${Marvel_Url}/${category}${Api_Key}&limit=20&offset=${offset}`
		);
		setFunction(response?.data?.data);
		console.log(response?.data?.data);
	} catch (error) {
		console.log(error);
	} finally {
		setIsLoading(false);
	}
};
