(function () {
    var _a, _b, _c;
    var availableFlights = [
        { flightNumber: 'AI101', from: 'Mumbai', to: 'Delhi', price: 5000 },
        { flightNumber: 'AI102', from: 'Delhi', to: 'Bangalore', price: 6000 },
        { flightNumber: 'AI103', from: 'Kolkata', to: 'Chennai', price: 4500 },
        { flightNumber: 'AI104', from: 'Hyderabad', to: 'Mumbai', price: 5500 },
        { flightNumber: 'AI105', from: 'Pune', to: 'Jaipur', price: 4800 }
    ];
    var getEl = function (id) { return document.getElementById(id); };
    function renderFlights() {
        var flightList = getEl('flights');
        var flightSelect = getEl('flightSelect');
        flightList.innerHTML = flightSelect.innerHTML = '';
        availableFlights.forEach(function (_a) {
            var flightNumber = _a.flightNumber, from = _a.from, to = _a.to, price = _a.price;
            flightList.innerHTML += "<li>".concat(flightNumber, " from ").concat(from, " to ").concat(to, " (\u20B9").concat(price, ")</li>");
            flightSelect.innerHTML += "<option value=\"".concat(flightNumber, "\">").concat(flightNumber, " - ").concat(from, " to ").concat(to, "</option>");
        });
    }
    function bookFlight(flightNumber) {
        var flight = availableFlights.find(function (f) { return f.flightNumber === flightNumber; });
        var confirmation = getEl('confirmationMessage');
        flight
            ? confirmation.textContent = "Flight ".concat(flight.flightNumber, " from ").concat(flight.from, " to ").concat(flight.to, " successfully booked for \u20B9").concat(flight.price, ".")
            : alert('Flight not found.');
        getEl('confirmation').style.display = flight ? 'block' : 'none';
    }
    function addFlight(flightNumber, from, to, price) {
        availableFlights.push({ flightNumber: flightNumber, from: from, to: to, price: price });
        renderFlights();
    }
    function removeFlight(flightNumber) {
        var index = availableFlights.findIndex(function (f) { return f.flightNumber === flightNumber; });
        index !== -1 ? availableFlights.splice(index, 1) : alert('Flight not found.');
        renderFlights();
    }
    (_a = getEl('flightBookingForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (e) {
        e.preventDefault();
        bookFlight(getEl('flightSelect').value);
    });
    (_b = getEl('newFlightForm')) === null || _b === void 0 ? void 0 : _b.addEventListener('submit', function (e) {
        e.preventDefault();
        addFlight(getEl('newFlightNumber').value, getEl('newFrom').value, getEl('newTo').value, parseFloat(getEl('newPrice').value));
    });
    (_c = getEl('flightRemoveForm')) === null || _c === void 0 ? void 0 : _c.addEventListener('submit', function (e) {
        e.preventDefault();
        removeFlight(getEl('removeFlightNumber').value);
    });
    renderFlights();
})();
