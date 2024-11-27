interface Transaction {
  type: "deposit" | "withdrawal" | "transfer" | "loan";
  number: number;
  amount: number;
  recipient?: string;
  date?: string;
  time?: string;
}

let transactions: Transaction[] = [];
let currentUser: string | null = null; 
let balance = 50000;

const updateDisplayDate = () => {
  const today = new Date().toLocaleDateString();
  document.getElementById("current-date")!.textContent = `As of ${today}`;
};

const updateTransactionsDisplay = () => {
  const container = document.getElementById("transactions-container")!;
  container.innerHTML = `
    <div class="transaction-list bg-white shadow-md rounded-lg overflow-hidden">
      <div class="transaction-header bg-gray-200 font-bold flex">
        <div class="flex-1 py-2 px-4">Type</div>
        <div class="flex-1 py-2 px-4">To</div>
        <div class="flex-1 py-2 px-4">Amount</div>
        <div class="flex-1 py-2 px-4">Date & Time</div>
      </div>
      ${transactions.map(t => `
        <div class="transaction-item flex border-b border-gray-200">
          <div class="flex-1 py-2 px-4">
            <span class="${t.type === "deposit" ? "text-green-600" : t.type === "withdrawal" ? "text-red-600" : t.type === "transfer" ? "text-blue-600" : "text-orange-600"}">
              ${t.type}
            </span>
          </div>
          <div class="flex-1 py-2 px-4">${t.recipient || "N/A"}</div>
          <div class="flex-1 py-2 px-4">${t.amount}₹</div>
          <div class="flex-1 py-2 px-4 text-gray-500">${t.time} ${t.date}</div>
        </div>`).join("")}
    </div>`;
  document.getElementById("current-balance")!.textContent = `${balance}₹`;
};

const calculateTotals = () => {
  const totalIn = transactions.filter(t => t.type === "deposit").reduce((sum, t) => sum + t.amount, 0);
  const totalOut = transactions.filter(t => ["withdrawal", "loan", "transfer"].includes(t.type)).reduce((sum, t) => sum + t.amount, 0);
  document.getElementById("total-in")!.textContent = `${totalIn}₹`;
  document.getElementById("total-out")!.textContent = `${totalOut}₹`;
  document.getElementById("total-interest")!.textContent = `${(balance * 0.015).toFixed(2)}₹`;
};

const addTransaction = (type: Transaction["type"], amount: number, recipient?: string) => {
  if (!currentUser) return alert("Please login first");
  const newTransaction: Transaction = { type, number: transactions.length + 1, amount, recipient, date: new Date().toLocaleDateString(), time: new Date().toLocaleTimeString() };
  transactions.push(newTransaction);
  balance += type === "deposit" ? amount : -amount;
  updateTransactionsDisplay();
  calculateTotals();
};

const showMainContent = () => {
  document.getElementById("login-container")!.style.display = "none";
  document.getElementById("main-content")!.style.display = "block";
  updateTransactionsDisplay();
  updateDisplayDate();
  calculateTotals();
};


const addEventListenerById = (id: string, callback: () => void) => {
  document.getElementById(id)!.addEventListener("click", callback);
};

addEventListenerById("sort-button", () => {
  for (let i = 0; i < transactions.length - 1; i++) {
    for (let j = 0; j < transactions.length - i - 1; j++) {
      if (transactions[j].amount < transactions[j + 1].amount) {
        [transactions[j], transactions[j + 1]] = [transactions[j + 1], transactions[j]];
      }
    }
  }
  updateTransactionsDisplay();
});

addEventListenerById("transfer-button", () => {
  const amount = parseFloat((document.getElementById("transfer-amount") as HTMLInputElement).value);
  const recipient = (document.getElementById("transfer-recipient") as HTMLInputElement).value;
  if (amount && recipient) addTransaction("withdrawal", amount, recipient);
});

addEventListenerById("loan-button", () => {
  const amount = parseFloat((document.getElementById("loan-amount") as HTMLInputElement).value);
  if (amount) addTransaction("loan", amount);
});

addEventListenerById("credit-button", () => {
  const amount = parseFloat((document.getElementById("credit-amount") as HTMLInputElement).value);
  if (amount) addTransaction("deposit", amount);
});

addEventListenerById("login-button", () => {
  const username = (document.getElementById("login-username") as HTMLInputElement).value;
  const password = (document.getElementById("login-password") as HTMLInputElement).value;
  currentUser = username; // Placeholder for user authentication
  document.getElementById("user-name")!.textContent = currentUser;
  showMainContent();
});

addEventListenerById("close-account-button", () => {
  alert("Account closed successfully."); 
  currentUser = null; 
});

if (currentUser) showMainContent();
else {
  document.getElementById("main-content")!.style.display = "none";
  document.getElementById("login-container")!.style.display = "block";
}
