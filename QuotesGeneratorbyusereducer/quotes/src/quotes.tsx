import React from "react"; 
import { QuotesProps } from "./type"; 

const Quotes: React.FC<QuotesProps> = ({ quotes, children }) => {
 

  return (
    <section className="w-full max-w-[80%] mx-auto mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
     

      {quotes.map((quote, index) => (
        <div
          key={index} 
          className="p-4 bg-white rounded shadow-md border-l-4 border-blue-500"
        
        >
          <p className="text-lg font-serif mb-2">"{quote.content}"</p>
         

          <p className="text-right text-sm text-gray-600">- {quote.author}</p>
          
        </div>
      ))}

      <div className="mt-6">{children}</div>
      {/* Optional children components displayed below the quotes with top margin for spacing. */}
    </section>
  );
};

export default Quotes; 
