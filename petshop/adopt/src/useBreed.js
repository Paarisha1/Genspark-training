import { useEffect, useState } from "react";

const localstorage = {};

export default function useBreedData(animal) {
  const [animalBreed, setAnimalBreed] = useState([]);
  const [status, setStatus] = useState("Loading");

  useEffect(() => {
    if (localstorage[animal]) {
      setAnimalBreed(localstorage[animal]);
    } else {
      fetchBreedFromAPI();
    }
  }, [animal]);

  async function fetchBreedFromAPI() {
    setAnimalBreed([]);
    setStatus("LOADING");
    const result = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}`
    );
    const { pets } = await result.json();
    const filteredData = pets.filter((pet) => {
      console.log(pet.animal, animal);
      return pet.animal === animal;
    });
    localstorage[animal] = filteredData || [];
    setAnimalBreed(filteredData);
    setStatus("Loaded");
  }

  return [animalBreed, status];
}
