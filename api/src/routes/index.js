const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { Dog, Temperament } = require("../db");
const { getAllDogs } = require("../controllers/dogs");
const { getTemperament } = require("../controllers/temperament");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/dogs", async (req, res) => {
	const allDogs = await getAllDogs();
	const { name } = req.query;

	if (name) {
		const dogBreed = await allDogs.filter((dog) =>
			dog.name.toLowerCase().includes(name.toLowerCase())
		);
		dogBreed.length
			? res.send(dogBreed)
			: res.status(404).send("404 Breed not found");
	} else {
		res.send(allDogs);
	}
});

router.get('/dogs/:id', async (req, res) => {
	try {
	  const allDogs = await getAllDogs();
	  const { id } = req.params;
  
	  if (id) {
		const dogDetails = allDogs.find((dog) => dog.id == id);
  
		if (dogDetails) {
		  res.send(dogDetails);
		} else {
		  res.status(404).send('Breed not found');
		}
	  } else {
		res.status(400).send('Invalid ID');
	  }
	} catch (error) {
	  console.error('Error al obtener los detalles del perro:', error.message);
	  res.status(500).send('Server Error');
	}
  });

// router.get("/dogs/name", async (req, res) => {
//   const allDogs = await getAllDogs();
//   const { name } = req.query;

//   if (name) {
//     const matchingDogs = allDogs.filter((dog) =>
//       dog.name.toLowerCase().includes(name.toLowerCase())
//     );

//     if (matchingDogs.length > 0) {
//       res.send(matchingDogs);
//     } else {
//       res.status(404).send("No breeds found matching the provided name.");
//     }
//   } else {
//     res.status(400).send("Please provide a name query parameter.");
//   }
// });

router.get("/temperament", async (req, res) => {
	const dogTemp = await getTemperament();
	const allTemper = await Temperament.findAll();
	const filteredTemper = await allTemper.map((obj) => obj.name);
	res.status(200).send(filteredTemper);
});

router.post("/dog", async (req, res) => {
	const {
		name,
		minimHeight,
		maximHeight,
		minimWeight,
		maximWeight,
		life_span,
		image,
		createdInDB,
		temperament,
	} = req.body;

	let height = minimHeight + " - " + maximHeight;
	let weight = minimWeight + " - " + maximWeight;

	const breedCreated = await Dog.create({
		name,
		height,
		weight,
		life_span,
		image,
		createdInDB,
	});

	const temperamentDb = await Temperament.findAll({
		where: { name: temperament },
	});

	breedCreated.addTemperament(temperamentDb);
	res.send("Breed created");
});

module.exports = router;