(function() {
    var availableFlights = [
        { flightNumber: 'AI101', from: 'Mumbai', to: 'Delhi', price: 5000 },
        { flightNumber: 'AI102', from: 'Delhi', to: 'Bangalore', price: 6000 },
        { flightNumber: 'AI103', from: 'Kolkata', to: 'Chennai', price: 4500 },
        { flightNumber: 'AI104', from: 'Hyderabad', to: 'Mumbai', price: 5500 },
        { flightNumber: 'AI105', from: 'Pune', to: 'Jaipur', price: 4800 }
    ];
  
  
    function displayFlights() {
        const flightList = document.getElementById('flights');
        const flightSelect = document.getElementById('flightSelect');
  
        flightList.innerHTML = '';
        flightSelect.innerHTML = '';
  
        availableFlights.forEach(flight => {
           
            const li = document.createElement('li');
            li.textContent = `${flight.flightNumber} from ${flight.from} to ${flight.to} (₹${flight.price})`;
            flightList.appendChild(li);
  
          
            const option = document.createElement('option');
            option.value = flight.flightNumber;
            option.textContent = `${flight.flightNumber} - ${flight.from} to ${flight.to}`;
            flightSelect.appendChild(option);
        });
    }
  
    
    function searchFlight(from, to) {
        return availableFlights.filter(flight => flight.from === from && flight.to === to);
    }
  
   
    function bookFlight(flightNumber) {
        const flight = availableFlights.find(flight => flight.flightNumber === flightNumber);
        
        if (flight) {
            document.getElementById('confirmationMessage').textContent =
                `Flight ${flight.flightNumber} from ${flight.from} to ${flight.to} successfully booked for ₹${flight.price}.`;
            document.getElementById('confirmation').style.display = 'block';
        } else {
            alert('Flight not found.');
        }
    }
  
    
    function addFlight(flightNumber, from, to, price) {
        availableFlights.push({ flightNumber, from, to, price });
        displayFlights();
        alert(`New flight ${flightNumber} added successfully.`);
    }
  

    function removeFlight(flightNumber) {
        const index = availableFlights.findIndex(flight => flight.flightNumber === flightNumber);
        if (index !== -1) {
            availableFlights.splice(index, 1);
            displayFlights();
            alert(`Flight ${flightNumber} removed successfully.`);
        } else {
            alert('Flight not found.');
        }
    }
  
    document.getElementById('flightBookingForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const flightNumber = document.getElementById('flightSelect').value;
        bookFlight(flightNumber);
    });
  

    document.getElementById('newFlightForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const flightNumber = document.getElementById('newFlightNumber').value;
        const from = document.getElementById('newFrom').value;
        const to = document.getElementById('newTo').value;
        const price = document.getElementById('newPrice').value;
        addFlight(flightNumber, from, to, price);
    });
  
   
    document.getElementById('flightRemoveForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const flightNumber = document.getElementById('removeFlightNumber').value;
        removeFlight(flightNumber);
    });
  

    displayFlights();
  
})();
