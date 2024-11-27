var transactions = [];
var currentUser = null;
var balance = 50000;
var updateDisplayDate = function () {
    var today = new Date().toLocaleDateString();
    document.getElementById("current-date").textContent = "As of ".concat(today);
};
var updateTransactionsDisplay = function () {
    var container = document.getElementById("transactions-container");
    container.innerHTML = "\n    <div class=\"transaction-list bg-white shadow-md rounded-lg overflow-hidden\">\n      <div class=\"transaction-header bg-gray-200 font-bold flex\">\n        <div class=\"flex-1 py-2 px-4\">Type</div>\n        <div class=\"flex-1 py-2 px-4\">To</div>\n        <div class=\"flex-1 py-2 px-4\">Amount</div>\n        <div class=\"flex-1 py-2 px-4\">Date & Time</div>\n      </div>\n      ".concat(transactions.map(function (t) { return "\n        <div class=\"transaction-item flex border-b border-gray-200\">\n          <div class=\"flex-1 py-2 px-4\">\n            <span class=\"".concat(t.type === "deposit" ? "text-green-600" : t.type === "withdrawal" ? "text-red-600" : t.type === "transfer" ? "text-blue-600" : "text-orange-600", "\">\n              ").concat(t.type, "\n            </span>\n          </div>\n          <div class=\"flex-1 py-2 px-4\">").concat(t.recipient || "N/A", "</div>\n          <div class=\"flex-1 py-2 px-4\">").concat(t.amount, "\u20B9</div>\n          <div class=\"flex-1 py-2 px-4 text-gray-500\">").concat(t.time, " ").concat(t.date, "</div>\n        </div>"); }).join(""), "\n    </div>");
    document.getElementById("current-balance").textContent = "".concat(balance, "\u20B9");
};
var calculateTotals = function () {
    var totalIn = transactions.filter(function (t) { return t.type === "deposit"; }).reduce(function (sum, t) { return sum + t.amount; }, 0);
    var totalOut = transactions.filter(function (t) { return ["withdrawal", "loan", "transfer"].includes(t.type); }).reduce(function (sum, t) { return sum + t.amount; }, 0);
    document.getElementById("total-in").textContent = "".concat(totalIn, "\u20B9");
    document.getElementById("total-out").textContent = "".concat(totalOut, "\u20B9");
    document.getElementById("total-interest").textContent = "".concat((balance * 0.015).toFixed(2), "\u20B9");
};
var addTransaction = function (type, amount, recipient) {
    if (!currentUser)
        return alert("Please login first");
    var newTransaction = { type: type, number: transactions.length + 1, amount: amount, recipient: recipient, date: new Date().toLocaleDateString(), time: new Date().toLocaleTimeString() };
    transactions.push(newTransaction);
    balance += type === "deposit" ? amount : -amount;
    updateTransactionsDisplay();
    calculateTotals();
};
var showMainContent = function () {
    document.getElementById("login-container").style.display = "none";
    document.getElementById("main-content").style.display = "block";
    updateTransactionsDisplay();
    updateDisplayDate();
    calculateTotals();
};
var addEventListenerById = function (id, callback) {
    document.getElementById(id).addEventListener("click", callback);
};
addEventListenerById("sort-button", function () {
    var _a;
    for (var i = 0; i < transactions.length - 1; i++) {
        for (var j = 0; j < transactions.length - i - 1; j++) {
            if (transactions[j].amount < transactions[j + 1].amount) {
                _a = [transactions[j + 1], transactions[j]], transactions[j] = _a[0], transactions[j + 1] = _a[1];
            }
        }
    }
    updateTransactionsDisplay();
});
addEventListenerById("transfer-button", function () {
    var amount = parseFloat(document.getElementById("transfer-amount").value);
    var recipient = document.getElementById("transfer-recipient").value;
    if (amount && recipient)
        addTransaction("withdrawal", amount, recipient);
});
addEventListenerById("loan-button", function () {
    var amount = parseFloat(document.getElementById("loan-amount").value);
    if (amount)
        addTransaction("loan", amount);
});
addEventListenerById("credit-button", function () {
    var amount = parseFloat(document.getElementById("credit-amount").value);
    if (amount)
        addTransaction("deposit", amount);
});
addEventListenerById("login-button", function () {
    var username = document.getElementById("login-username").value;
    var password = document.getElementById("login-password").value;
    currentUser = username; // Placeholder for user authentication
    document.getElementById("user-name").textContent = currentUser;
    showMainContent();
});
addEventListenerById("close-account-button", function () {
    alert("Account closed successfully.");
    currentUser = null;
});
if (currentUser)
    showMainContent();
else {
    document.getElementById("main-content").style.display = "none";
    document.getElementById("login-container").style.display = "block";
}
