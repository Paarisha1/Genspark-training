(function() {
    interface Flight {
        flightNumber: string;
        from: string;
        to: string;
        price: number;
    }

    const availableFlights: Flight[] = [
        { flightNumber: 'AI101', from: 'Mumbai', to: 'Delhi', price: 5000 },
        { flightNumber: 'AI102', from: 'Delhi', to: 'Bangalore', price: 6000 },
        { flightNumber: 'AI103', from: 'Kolkata', to: 'Chennai', price: 4500 },
        { flightNumber: 'AI104', from: 'Hyderabad', to: 'Mumbai', price: 5500 },
        { flightNumber: 'AI105', from: 'Pune', to: 'Jaipur', price: 4800 }
    ];

    const getEl = <T extends HTMLElement>(id: string): T => document.getElementById(id) as T;

    function renderFlights(): void {
        const flightList = getEl<HTMLUListElement>('flights');
        const flightSelect = getEl<HTMLSelectElement>('flightSelect');

        flightList.innerHTML = flightSelect.innerHTML = '';
        availableFlights.forEach(({ flightNumber, from, to, price }) => {
            flightList.innerHTML += `<li>${flightNumber} from ${from} to ${to} (₹${price})</li>`;
            flightSelect.innerHTML += `<option value="${flightNumber}">${flightNumber} - ${from} to ${to}</option>`;
        });
    }

    function bookFlight(flightNumber: string): void {
        const flight = availableFlights.find(f => f.flightNumber === flightNumber);
        const confirmation = getEl<HTMLParagraphElement>('confirmationMessage');
        flight 
            ? confirmation.textContent = `Flight ${flight.flightNumber} from ${flight.from} to ${flight.to} successfully booked for ₹${flight.price}.`
            : alert('Flight not found.');
        getEl('confirmation').style.display = flight ? 'block' : 'none';
    }

    function addFlight(flightNumber: string, from: string, to: string, price: number): void {
        availableFlights.push({ flightNumber, from, to, price });
        renderFlights();
    }

    function removeFlight(flightNumber: string): void {
        const index = availableFlights.findIndex(f => f.flightNumber === flightNumber);
        index !== -1 ? availableFlights.splice(index, 1) : alert('Flight not found.');
        renderFlights();
    }

    getEl('flightBookingForm')?.addEventListener('submit', e => {
        e.preventDefault();
        bookFlight(getEl<HTMLSelectElement>('flightSelect').value);
    });

    getEl('newFlightForm')?.addEventListener('submit', e => {
        e.preventDefault();
        addFlight(
            getEl<HTMLInputElement>('newFlightNumber').value,
            getEl<HTMLInputElement>('newFrom').value,
            getEl<HTMLInputElement>('newTo').value,
            parseFloat(getEl<HTMLInputElement>('newPrice').value)
        );
    });

    getEl('flightRemoveForm')?.addEventListener('submit', e => {
        e.preventDefault();
        removeFlight(getEl<HTMLInputElement>('removeFlightNumber').value);
    });

    renderFlights();
})();




// Interface Definition:

// interface Flight: Defines the structure of a flight object with properties: flightNumber, from, to, and price.
// Flight Data:

// const availableFlights: This array contains a list of predefined flights, each conforming to the Flight interface.
// Utility Function:

// getEl<T>: A generic utility function used to get DOM elements by their ID and cast them to a specific type (HTMLElement or its subclasses, like HTMLInputElement or HTMLSelectElement). This ensures type safety when manipulating DOM elements.
// Flight Rendering (renderFlights):

// renderFlights(): Clears existing flight information in the HTML (flightList and flightSelect), then loops through availableFlights to dynamically update two elements:
// A list (<ul>) displaying each flight's details.
// A dropdown (<select>) where users can select a flight to book.
// Flight Booking (bookFlight):

// bookFlight(flightNumber): Finds a flight based on the selected flight number and, if found, displays a confirmation message with the flight's details (flight number, from, to, and price). If the flight isn't found, it shows an alert. It also controls the visibility of a confirmation section based on the result.
// Add Flight (addFlight):

// addFlight(flightNumber, from, to, price): Adds a new flight object to the availableFlights array with the provided details (flight number, from, to, and price). After adding, it calls renderFlights() to update the UI with the new flight list.
// Remove Flight (removeFlight):

// removeFlight(flightNumber): Finds the index of the flight to be removed based on the flight number. If the flight exists, it's removed from the availableFlights array, and the UI is updated by calling renderFlights(). If the flight is not found, an alert is shown.
// Event Listeners:

// For each form (flightBookingForm, newFlightForm, flightRemoveForm), an event listener is added to handle form submissions.
// On submission of the booking form, it calls bookFlight() using the selected flight from the dropdown.
// On submission of the "add flight" form, it calls addFlight() using the values entered by the user.
// On submission of the "remove flight" form, it calls removeFlight() using the flight number entered.
// Initial Flight Rendering:

// renderFlights(): This function is called at the end to initially populate the flight list and dropdown when the page loads.