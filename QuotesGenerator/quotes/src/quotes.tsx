import React from "react"; // Importing React for using JSX and functional components.
import { QuotesProps } from "./type"; // Importing the QuotesProps type for defining component props.

const Quotes: React.FC<QuotesProps> = ({ quotes, children }) => {
  // Quotes component with props typed as QuotesProps, including quotes array and children.

  return (
    <section className="w-full max-w-[80%] mx-auto mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {/* Section element with responsive grid layout and max width set to 80% centered in the viewport. */}

      {quotes.map((quote, index) => (
        <div
          key={index} // Unique key for each quote, using index as key.
          className="p-4 bg-white rounded shadow-md border-l-4 border-blue-500"
          // Styling for each quote card with padding, white background, rounded corners, shadow, and left border.
        >
          <p className="text-lg font-serif mb-2">"{quote.content}"</p>
          {/* Quote content displayed in a serif font with margin-bottom for spacing. */}

          <p className="text-right text-sm text-gray-600">- {quote.author}</p>
          {/* Quote author displayed on the right in smaller, gray text. */}
        </div>
      ))}

      <div className="mt-6">{children}</div>
      {/* Optional children components displayed below the quotes with top margin for spacing. */}
    </section>
  );
};

export default Quotes; // Exporting the Quotes component as the default export.
