// ## Part 1: Understanding Arrays

// ### Task 1: Defining an Array of Flights
// 1. Define an array called `availableFlights` which contains several flight objects. Each flight should have the following properties:
//    - `flightNumber`: A unique flight number (e.g., 'AI101').
//    - `from`: The departure city (e.g., 'New York').
//    - `to`: The destination city (e.g., 'London').
//    - `price`: The price of the flight (e.g., 700).

// ### Example:
// ```javascript
// var availableFlights = [
//     { flightNumber: 'AI101', from: 'New York', to: 'London', price: 700 },
//     { flightNumber: 'AI102', from: 'London', to: 'Paris', price: 120 }
// ];

var availableFlights = [
  { flightNumber: 'AI101', from: 'New York', to: 'London', price: 700 },
  { flightNumber: 'AI102', from: 'London', to: 'Paris', price: 120 },
  { flightNumber: 'AI103', from: 'Tokyo', to: 'Sydney', price: 850 },
  { flightNumber: 'AI104', from: 'Dubai', to: 'New York', price: 950 },
  { flightNumber: 'AI105', from: 'Paris', to: 'Berlin', price: 150 }
];

// ### Task 2: Manipulating the Flight Data
// - Write a function `searchFlight(from, to)` that searches for flights from one city to another and returns matching flights.
function searchFlight(from, to) {
  return availableFlights.filter(flight => flight.from === from && flight.to === to);
}

// - Write a function `bookFlight(flightNumber)` that takes a flight number as an argument and "books" the flight if it exists, otherwise it shows an error message.


function bookFlight(flightNumber) {
  const flight = availableFlights.find(flight => flight.flightNumber === flightNumber);
  
  if (flight) {
      console.log(`Flight ${flight.flightNumber} from ${flight.from} to ${flight.to} has been successfully booked for $${flight.price}.`);
  } else {
      console.log(`Error: Flight with flight number ${flightNumber} not found.`);
  }
}



// ## Part 2: Understanding IIFE (Immediately Invoked Function Expressions)

// ### Task 3: Wrapping Your Code in an IIFE
// - Wrap your entire flight booking system code inside an IIFE to prevent pollution of the global namespace.
  
// ### Example:
// ```javascript
// (function() {
//     // Your flight booking system code here
// })();
(function() {
  var availableFlights = [
      { flightNumber: 'AI101', from: 'New York', to: 'London', price: 700 },
      { flightNumber: 'AI102', from: 'London', to: 'Paris', price: 120 },
      { flightNumber: 'AI103', from: 'Tokyo', to: 'Sydney', price: 850 },
      { flightNumber: 'AI104', from: 'Dubai', to: 'New York', price: 950 },
      { flightNumber: 'AI105', from: 'Paris', to: 'Berlin', price: 150 }
  ];

  function searchFlight(from, to) {
      return availableFlights.filter(flight => flight.from === from && flight.to === to);
  }

  function bookFlight(flightNumber) {
      const flight = availableFlights.find(flight => flight.flightNumber === flightNumber);
      
      if (flight) {
          console.log(`Flight ${flight.flightNumber} from ${flight.from} to ${flight.to} has been successfully booked for $${flight.price}.`);
      } else {
          console.log(`Error: Flight with flight number ${flightNumber} not found.`);
      }
  }
})();




// ### Task 4: Immediate Flight Booking
// - Modify the IIFE to automatically search for and book a flight between two cities (e.g., New York to London) when the code is run.

(function() {
  var availableFlights = [
      { flightNumber: 'AI101', from: 'New York', to: 'London', price: 700 },
      { flightNumber: 'AI102', from: 'London', to: 'Paris', price: 120 },
      { flightNumber: 'AI103', from: 'Tokyo', to: 'Sydney', price: 850 },
      { flightNumber: 'AI104', from: 'Dubai', to: 'New York', price: 950 },
      { flightNumber: 'AI105', from: 'Paris', to: 'Berlin', price: 150 }
  ];

  function searchFlight(from, to) {
      return availableFlights.filter(flight => flight.from === from && flight.to === to);
  }

  function bookFlight(flightNumber) {
      const flight = availableFlights.find(flight => flight.flightNumber === flightNumber);
      
      if (flight) {
          console.log(`Flight ${flight.flightNumber} from ${flight.from} to ${flight.to} has been successfully booked for $${flight.price}.`);
      } else {
          console.log(`Error: Flight with flight number ${flightNumber} not found.`);
      }
  }


  var foundFlights = searchFlight('New York', 'London');

  if (foundFlights.length > 0) {
     
      bookFlight(foundFlights[0].flightNumber);
  } else {
      console.log('No flights found from New York to London.');
  }

})();



// ### Task 5: Adding New Flights
// - Write a function to add new flights to the `availableFlights` array. This function should take in flight details (number, from, to, price) and add the new flight to the array.

function addFlight(flightNumber, from, to, price) {
//   availableFlights.push({ flightNumber, from, to, price });
  console.log(`New flight ${flightNumber} from ${from} to ${to} added successfully.`);
}

// ### Task 6: Removing Flights
// - Write a function that removes a flight based on the flight number.
function removeFlight(flightNumber) {
  const index = availableFlights.findIndex(flight => flight.flightNumber === flightNumber);
  
  if (index !== -1) {
      availableFlights.splice(index, 1);
      console.log(`Flight ${flightNumber} has been removed successfully.`);
  } else {
      console.log(`Error: Flight with flight number ${flightNumber} not found.`);
  }
}



  