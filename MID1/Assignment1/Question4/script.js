// Elements
const accountNumberElem = document.getElementById("account-number");
const balanceElem = document.getElementById("account-balance");
const transactionHistoryElem = document.getElementById("transaction-history");
const depositBtn = document.getElementById("deposit-btn");
const withdrawBtn = document.getElementById("withdraw-btn");
const downloadBtn = document.getElementById("download-btn");
const amountInput = document.getElementById("amount");

// Generate Account Number from Roll Number
const rollNumber = "1234"; // Replace with user input
const accountNumber = `ACC-${rollNumber}`;
accountNumberElem.textContent = accountNumber;

// Set Initial Deposit
let balance = parseInt(rollNumber[rollNumber.length - 1]) * 1000;
balanceElem.textContent = balance;

// Transactions Array
let transactions = [];

// Deposit Function
depositBtn.addEventListener("click", () => {
    let amount = parseInt(amountInput.value);
    if (amount % parseInt(rollNumber) !== 0) {
        alert("Deposit must be a multiple of your roll number.");
        return;
    }
    transactions.push({ type: "deposit", amount });
    updateBalance();
});

// Withdraw Function (80% Limit)
withdrawBtn.addEventListener("click", () => {
    let amount = parseInt(amountInput.value);
    let maxWithdraw = balance * 0.8;
    if (amount > maxWithdraw) {
        alert("Withdrawal exceeds 80% limit.");
        return;
    }
    transactions.push({ type: "withdrawal", amount });
    updateBalance();
});

// Update Balance using Reduce
const updateBalance = () => {
    balance = transactions.reduce((total, t) => t.type === "deposit" ? total + t.amount : total - t.amount, balance);
    balanceElem.textContent = balance;
    updateTransactionHistory();
};

// Display Transaction History
const updateTransactionHistory = () => {
    transactionHistoryElem.innerHTML = "";
    transactions.forEach((t) => {
        let li = document.createElement("li");
        li.classList.add("transaction", t.type);
        li.textContent = `${t.type.toUpperCase()}: PKR ${t.amount}`;
        transactionHistoryElem.appendChild(li);
    });
};

// Download Transaction History
downloadBtn.addEventListener("click", () => {
    let data = transactions.map(t => `${t.type.toUpperCase()}: PKR ${t.amount}`).join("\n");
    let blob = new Blob([data], { type: "text/plain" });
    let link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "transaction_history.txt";
    link.click();
});

// Dark Mode
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}
