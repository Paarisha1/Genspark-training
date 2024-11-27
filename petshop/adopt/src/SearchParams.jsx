import { useEffect, useState } from "react";
import Pet from "./Pet";
import useBreedData from "./useBreed";

const ANIMALS = ["bird", "dog", "cat", "horse", "rabbit", "reptile", "fish"];

const SearchParams = () => {
  const [location, setLocation] = useState("Enter Location");
  const [animal, setAnimal] = useState("dog");
  const [breed, setBreed] = useState("");

  const [breedData, status] = useBreedData(animal);
  console.log(breedData);
  const breeds = ["Havenese", "Mix", "Cockatail", "Lebra"];

  useEffect(() => {
    fetchDataFromAPI();
  }, []);

  async function fetchDataFromAPI() {
    const response = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}`
    );
    const { pets } = await response.json();
    setPets(pets);
  }

  const updateLocation = (e) => {
    setLocation(e.target.value);
  };

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            type="text"
            id="location"
            value={location}
            placeholder="location"
            onChange={(e) => updateLocation(e)}
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={(e) => {
              setAnimal(e.target.value);
              setBreed("");
            }}
          >
            <option />
            {ANIMALS.map((animal, index) => (
              <option key={index} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select
            id="breed"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
          >
            <option />
            {breeds.map((breed, index) => (
              <option key={index} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </form>
      {breedData.map((pet) => (
        <Pet
          name={pet.name}
          animal={pet.animal}
          breed={pet.breed}
          key={pet.id}
        ></Pet>
      ))}
    </div>
  );
};

export default SearchParams;
