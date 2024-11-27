import React from "react";
import { MovieProvider } from "./MovieContext.tsx";
import MovieInput from "./MovieInput.tsx";
import MovieList from "./MovieList.tsx";

const App: React.FC = () => {
  return (
    <MovieProvider>
      <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-8">
        <h1 className="text-3xl font-bold mb-4">Movie Watchlist</h1>
        <MovieInput />
        <MovieList />
      </div>
    </MovieProvider>
  );
};

export default App;
