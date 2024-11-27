import React, { createContext, useReducer, ReactNode, useEffect } from "react";

export interface Movie {
  id: number;
  title: string;
  watched: boolean;
}

type MovieState = Movie[];

type MovieAction =
  | { type: "ADD_MOVIE"; payload: string }
  | { type: "TOGGLE_MOVIE"; payload: number }
  | { type: "REMOVE_MOVIE"; payload: number };

const movieReducer = (state: MovieState, action: MovieAction): MovieState => {
  switch (action.type) {
    case "ADD_MOVIE":
      return [
        ...state,
        { id: Date.now(), title: action.payload, watched: false },
      ];
    case "TOGGLE_MOVIE":
      return state.map((movie) =>
        movie.id === action.payload
          ? { ...movie, watched: !movie.watched }
          : movie
      );
    case "REMOVE_MOVIE":
      return state.filter((movie) => movie.id !== action.payload);
    default:
      return state;
  }
};

export const MovieContext = createContext<{
  state: MovieState;
  dispatch: React.Dispatch<MovieAction>;
}>({
  state: [],
  dispatch: () => null,
});

export const MovieProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(movieReducer, [], () => {
    const localData = localStorage.getItem("movies");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem("movies", JSON.stringify(state));
  }, [state]);

  return (
    <MovieContext.Provider value={{ state, dispatch }}>
      {children}
    </MovieContext.Provider>
  );
};
