var availableFlights = [
    { flightNumber: 'AI101', from: 'New York', to: 'London', price: 700 },
    { flightNumber: 'AI102', from: 'London', to: 'Paris', price: 120 },
    { flightNumber: 'AI103', from: 'Tokyo', to: 'Sydney', price: 850 },
    { flightNumber: 'AI104', from: 'Dubai', to: 'New York', price: 950 },
    { flightNumber: 'AI105', from: 'Paris', to: 'Berlin', price: 150 }
  ];


// 1. Filter Available Flights:
// Write a function `filterFlights` that takes an array of flight objects and a predicate function. The function should return an array of flights that match the condition in the predicate.

function filterFlights(flights, predicate) {
    return flights.filter(predicate);
}

// 2. Sort Flights by Price:
// Write a function `sortFlights` that takes an array of flight objects and a comparator function. The function should return a new array of flights sorted based on the comparator function.
function sortFlights(flights, comparator) {
    return flights.slice().sort(comparator);
}

// 3. Reduce to Calculate Total Revenue:
// Write a function `calculateTotalRevenue` that takes an array of flight objects and returns the total revenue if all the available seats are sold.
function calculateTotalRevenue(flights) {
    return flights.reduce((total, flight) => total + flight.price, 0);
}
console,log(calculateTotalRevenue())

// 4. Compose to Apply Multiple Filters:[ask]
// Write a function `composeFilters` that takes an array of predicate functions and returns a single function. This single function can be used to filter flights that satisfy all the conditions.


// 5. Find Flight by ID:
// Write a function `findFlightById` that takes an array of flight objects and a flight ID. The function should return the flight object that matches the given ID.

function findFlightById(flights, flightId) {
    return flights.find(flight => flight.flightNumber === flightId);
}

