const bookings = [
    { trainName: "Rajdhani Express", destination: "Delhi", classType: "AC", availableSeats: 5 },
    { trainName: "Shatabdi Express", destination: "Mumbai", classType: "Sleeper", availableSeats: 0 },
    { trainName: "Duronto Express", destination: "Kolkata", classType: "AC", availableSeats: 10 },
    { trainName: "Garib Rath", destination: "Delhi", classType: "Sleeper", availableSeats: 15 },
];

const filterBookings = (bookings, destination, classType, seats) => {
    return bookings.filter(booking => {
        return (destination === '' || booking.destination === destination) &&
               (classType === '' || booking.classType === classType) &&
               (seats === 0 || booking.availableSeats > 0);
    });
}

const displayBookings = (filteredBookings) => {
    const tableBody = document.querySelector('#trainTable tbody');
    tableBody.innerHTML = ''; // Clear previous rows

    filteredBookings.forEach(booking => {
        const row = `
            <tr>
                <td>${booking.trainName}</td>
                <td>${booking.destination}</td>
                <td>${booking.classType}</td>
                <td>${booking.availableSeats}</td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });
}

document.getElementById('filterBtn').addEventListener('click', () => {
    const destination = document.getElementById('destination').value;
    const classType = document.getElementById('classType').value;
    const seats = parseInt(document.getElementById('seats').value);
    
    const filtered = filterBookings(bookings, destination, classType, seats);
    displayBookings(filtered);
});

// Display all bookings on page load
displayBookings(bookings);
