import React, { useState } from "react";
import { Quote } from "./type.tsx";
import { fetchRandomQuote } from "./fetchquote.tsx";
import Quotes from "./quotes.tsx";

const App: React.FC = () => {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [limit, setLimit] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  const handleFetchQuotes = () => {
    if (!limit || isNaN(Number(limit))) return alert("Enter a valid number.");
    setIsLoading(true);
    fetchRandomQuote(Number(limit))
      .then(setQuotes)
      .catch((err) => console.error("Error:", err))
      .finally(() => setIsLoading(false));
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
              value={limit}
              onChange={(e) => setLimit(e.target.value)}
              placeholder="Enter a number"
              className="flex-1 p-3 border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-indigo-300 text-gray-700"
            />
            <button
              type="submit"
              className="px-4 py-3 bg-indigo-600 text-white font-semibold rounded-r-lg hover:bg-indigo-700 transition duration-300"
            >
              {isLoading ? (
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

      <Quotes quotes={quotes}>
        <div className="text-center mt-4 text-indigo-500 font-semibold">
          {Number(limit) > 0 && quotes.length > 0 && `${limit} quotes loaded`}
        </div>
      </Quotes>
    </main>
  );
};

export default App;
