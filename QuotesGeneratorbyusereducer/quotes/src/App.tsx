import React, { useReducer } from "react";
import { Quote } from "./type.tsx";
import { fetchRandomQuote } from "./fetchquote.tsx";
import Quotes from "./quotes.tsx";

// Define action types
type ActionType =
  | { type: "SET_QUOTES"; payload: Quote[] }
  | { type: "SET_LOADING"; payload: boolean }
  | { type: "SET_LIMIT"; payload: string };

// Define the state structure and initial state
interface State {
  quotes: Quote[];
  isLoading: boolean;
  limit: string;
}

const initialState: State = {
  quotes: [],
  isLoading: false,
  limit: "",
};

// Reducer function to manage state
const reducer = (state: State, action: ActionType): State => {
  switch (action.type) {
    case "SET_QUOTES":
      return { ...state, quotes: action.payload };
    case "SET_LOADING":
      return { ...state, isLoading: action.payload };
    case "SET_LIMIT":
      return { ...state, limit: action.payload };
    default:
      return state;
  }
};

const App: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleFetchQuotes = () => {
    if (!state.limit || isNaN(Number(state.limit))) {
      return alert("Enter a valid number.");
    }
    dispatch({ type: "SET_LOADING", payload: true });
    fetchRandomQuote(Number(state.limit))
      .then((quotes) => dispatch({ type: "SET_QUOTES", payload: quotes }))
      .catch((err) => console.error("Error:", err))
      .finally(() => dispatch({ type: "SET_LOADING", payload: false }));
  };

  return (
    <main className="w-screen min-h-screen py-12 px-4 bg-gradient-to-br from-indigo-100 to-purple-50 flex flex-col items-center">
      <section className="w-full max-w-xl p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold text-indigo-600 text-center mb-4">
          Quotes Generator
        </h2>
        <form
          onSubmit={(e) => (e.preventDefault(), handleFetchQuotes())}
          className="flex flex-col gap-4"
        >
          <label
            htmlFor="quote-limit"
            className="text-lg font-medium text-gray-700"
          >
            Number of Quotes
          </label>
          <div className="flex">
            <input
              id="quote-limit"
              type="number"
              min={1}
              max="25"
              value={state.limit}
              onChange={(e) =>
                dispatch({ type: "SET_LIMIT", payload: e.target.value })
              }
              placeholder="Enter a number"
              className="flex-1 p-3 border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-indigo-300 text-gray-700"
            />
            <button
              type="submit"
              className="px-4 py-3 bg-indigo-600 text-white font-semibold rounded-r-lg hover:bg-indigo-700 transition duration-300"
            >
              {state.isLoading ? (
                <svg
                  className="animate-spin h-5 w-5 text-white mx-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  ></path>
                </svg>
              ) : (
                "Fetch"
              )}
            </button>
          </div>
        </form>
      </section>

      <Quotes quotes={state.quotes}>
        <div className="text-center mt-4 text-indigo-500 font-semibold">
          {Number(state.limit) > 0 &&
            state.quotes.length > 0 &&
            `${state.limit} quotes loaded`}
        </div>
      </Quotes>
    </main>
  );
};

export default App;
