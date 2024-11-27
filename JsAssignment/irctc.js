const bookings = [
    { trainName: "Rajdhani Express", destination: "Delhi", classType: "AC", availableSeats: 5 },
    { trainName: "Shatabdi Express", destination: "Mumbai", classType: "Sleeper", availableSeats: 0 },
    { trainName: "Duronto Express", destination: "Kolkata", classType: "AC", availableSeats: 10 },
    { trainName: "Garib Rath", destination: "Delhi", classType: "Sleeper", availableSeats: 15 },
];

const filterBookings = (bookings,filterCriteria) => {
    return bookings.filter(filterCriteria); 
}

const filterCriteriaUsingDestination = (booking) => booking.destination === 'Kolkata';

const filterCriteriaUsingClassType = (booking) => booking.classType === 'AC';

const filterCriteriaUsingAvailableSeats = (booking) => booking.availableSeats > 0;

const getAllTheTrainNames = (bookings) => bookings.map(booking => booking.trainName);

const totalAvailableSeats = (bookings) => bookings.reduce((acc,booking) => acc + booking.availableSeats,0);

const getTuplesBasedOnAvailableSeats = (bookings) => bookings.map(booking => [booking.trainName,booking.availableSeats])
.filter(tuple => tuple[1] >= 10);


// console.log(getAllTheTrainNames(filterBookings(bookings,filterCriteriaUsingAvailableSeats)));
console.log(getTuplesBasedOnAvailableSeats(bookings));

const getBookingsBasedOnAvailableTuples = (bookings,tuples) => {
    return tuples.map((tuple) => {
        let obj = {};
       bookings.forEach((booking) => {
            if(booking.trainName === tuple[0] && booking.availableSeats === tuple[1]) {
              obj = booking 
            } 
        })
        return obj;
    })
}
console.log(getBookingsBasedOnAvailableTuples(bookings,getTuplesBasedOnAvailableSeats(bookings)));