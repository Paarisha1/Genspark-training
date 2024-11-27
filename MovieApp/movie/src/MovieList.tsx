import React, { useContext } from "react";
import { MovieContext } from "./MovieContext.tsx";
import { FaTrash, FaCheck } from "react-icons/fa";

const MovieList: React.FC = () => {
  const { state, dispatch } = useContext(MovieContext);

  if (state.length === 0) {
    return <p className="text-gray-400">Your watchlist is empty!</p>;
  }

  return (
    <ul className="w-80">
      {state.map((movie) => (
        <li
          key={movie.id}
          className={`flex items-center justify-between p-3 mb-3 rounded-lg bg-gray-800 ${
            movie.watched ? "text-green-400" : "text-white"
          }`}
        >
          <span>{movie.title}</span>
          <div>
            <button
              onClick={() =>
                dispatch({ type: "TOGGLE_MOVIE", payload: movie.id })
              }
              className="text-green-400 mr-3"
            >
              <FaCheck />
            </button>
            <button
              onClick={() =>
                dispatch({ type: "REMOVE_MOVIE", payload: movie.id })
              }
              className="text-red-400"
            >
              <FaTrash />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
