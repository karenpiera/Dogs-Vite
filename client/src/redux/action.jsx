import axios from "axios"; // PASAR A AXIOS

export const getDogs = () => (dispatch) => {
	return axios.get("http://localhost:3001/dogs").then(({ data }) => {
		dispatch({
			type: "GET_DOGS",
			payload: data,
		});
	});
};

export const getDogByName = (name) => (dispatch) => {
	return axios
	.get(`http://localhost:3001/name?name=${name}`)
	.then(({ data }) => {
		dispatch({
		type: "GET_DOG_BY_NAME",
		payload: data,
		});
	});
  }

export const getDogTemperament = () => (dispatch) => {
	return axios
		.get("http://localhost:3001/temperament")
		.then(({ data }) => {
			dispatch({
				type: "GET_TEMPERAMENT",
				payload: data,
			});
		});
};

export const getDetail = (id) => (dispatch) => {
	return axios
		.get(`http://localhost:3001/dogs/${id}`)
		.then(({ data }) => {
			dispatch({
				type: "GET_DETAIL",
				payload:data,
			});
		});
};

export const filterByWeight = (payload) => {
	return {
		type: "FILTER_BY_WEIGHT",
		payload,
	};
};

export const filterByName = (payload) => {
	return {
		type: "FILTER_BY_NAME",
		payload,
	};
};

export const filterByTemperament = (payload) => {
	return {
		type: "FILTER_BY_TEMPERAMENT",
		payload,
	};
};

