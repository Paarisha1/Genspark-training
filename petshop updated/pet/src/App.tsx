import React, { useEffect, useState } from "react";

interface Pet {
  id: number;
  name: string;
  animal: string;
  city: string;
  state: string;
  description: string;
  breed: string;
  images: string[];
}

// Define available breeds for each animal type
const breedOptions: { [key: string]: string[] } = {
  dog: [
    "Labrador",
    "Poodle",
    "Bulldog",
    "Beagle",
    "Shih Tzu",
    "Havanese",
    "Goldendoodle",
    "Boxer",
    "Wheaten Terrier",
  ],
  cat: ["Persian", "Maine Coon", "Sphynx", "Siamese", "British Shorthair"],
  bird: ["Cockatoo", "Parrot", "Canary", "Finch"],
  rabbit: ["American", "Dutch", "Flemish Giant", "Mini Rex"],
};

const App: React.FC = () => {
  const [pets, setPets] = useState<Pet[]>([]); // Define pets as an array of Pet objects
  const [animal, setAnimal] = useState("dog");
  const [location, setLocation] = useState("");
  const [breed, setBreed] = useState("");
  const [availableBreeds, setAvailableBreeds] = useState<string[]>(
    breedOptions[animal]
  );

  // Fetch pets based on filters
  useEffect(() => {
    const fetchPets = async () => {
      const apiUrl = `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`;
      const response = await fetch(apiUrl);
      const data = await response.json();
      setPets(data.pets || []);
    };
    fetchPets();
  }, [animal, location, breed]);

  // Update breed options when animal changes
  useEffect(() => {
    setAvailableBreeds(breedOptions[animal]);
    setBreed(""); // Reset breed selection when animal changes
  }, [animal]);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-600">
          Pet Shop
        </h1>

        {/* Search Filters */}
        <div className="flex flex-wrap justify-center space-x-4 mb-8">
          <input
            type="text"
            placeholder="Location"
            onChange={(e) => setLocation(e.target.value)}
            className="border border-gray-300 px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <select
            value={animal}
            onChange={(e) => setAnimal(e.target.value)}
            className="border border-gray-300 px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {Object.keys(breedOptions).map((a) => (
              <option key={a} value={a}>
                {a.charAt(0).toUpperCase() + a.slice(1)}
              </option>
            ))}
          </select>

          <select
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
            className="border border-gray-300 px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Any Breed</option>
            {availableBreeds.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>

          
        </div>

        {/* Pet Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {pets.map((pet) => (
            <div
              key={pet.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition"
            >
              <img
                src={pet.images[0]}
                alt={pet.name}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                {pet.name}
              </h2>
              <p className="text-gray-600">{pet.breed}</p>
              <p className="text-gray-500">
                {pet.city}, {pet.state}
              </p>
              <p className="text-sm text-gray-700 mt-4">{pet.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
