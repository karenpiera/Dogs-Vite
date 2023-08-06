const { API_KEY } = process.env;
const axios = require("axios");
const { Temperament } = require("../db");

const getTemperament = async () => {
	try {
		const response = await axios.get(
			`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`
		);

		const temperaments = response.data
			.filter((breed) => breed.temperament) // Filtrar solo las razas con un temperamento definido
			.map((breed) => breed.temperament.split(","))
			.flat()
			.map((temp) => temp.trim())
			.filter((temp, index, arr) => temp && arr.indexOf(temp) === index); // Eliminar duplicados y valores vacíos

		await Promise.all(
			temperaments.map(async (temp) => {
				await Temperament.findOrCreate({ where: { name: temp } });
			})
		);
	} catch (error) {
		console.error("Error fetching temperaments:", error);
	}
};

module.exports = {
	getTemperament,
};







// const { API_KEY } = process.env;
// const axios = require("axios");
// const { Temperament } = require("../db");

// const getTemperament = async () => {
// 	const apiTemp = await axios.get(
// 		`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`
// 	);

// 	const dogTemp = await apiTemp.data
// 		.map((temp) => {
// 			if (temp.temperament) {
// 				return temp.temperament;
// 			}
// 		})
// 		.join()
// 		.split(",");

// 	const temps = [];
// 	dogTemp.map((temp) => {
// 		if (!temps.includes(temp.trim()) && temp) {
// 			temps.push(temp.trim());
// 		}
// 	});

// 	temps.map(async (temp) => {
// 		await Temperament.findOrCreate({
// 			where: { name: temp },
// 		});
// 	});
// };

// module.exports = {
// 	getTemperament,
// };
