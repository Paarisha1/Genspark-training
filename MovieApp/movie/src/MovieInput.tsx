import React, { useState, useContext } from "react";
import { MovieContext } from "./MovieContext.tsx";

const MovieInput: React.FC = () => {
  const [title, setTitle] = useState("");
  const { dispatch } = useContext(MovieContext);

  const handleAddMovie = () => {
    if (title.trim()) {
      dispatch({ type: "ADD_MOVIE", payload: title });
      setTitle("");
    }
  };

  return (
    <div className="mb-6">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter movie title"
        className="p-2 rounded-l-lg w-64 border border-gray-700 bg-gray-800"
      />
      <button
        onClick={handleAddMovie}
        className="px-4 py-2 bg-blue-500 rounded-r-lg text-white hover:bg-blue-600"
      >
        Add
      </button>
    </div>
  );
};

export default MovieInput;
