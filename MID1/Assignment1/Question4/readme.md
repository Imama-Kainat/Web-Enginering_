# **Bank Account System 🏦**  

### **Objective**  
This project is a **bank account simulation** where the account number and initial deposit are dynamically generated using the user's **roll number**. The system supports deposits, withdrawals, and transaction tracking while enforcing **financial constraints** like limited withdrawals and deposit validation.  

---

## **📌 Features & How I Approached It**  

### **1️⃣ Generating the Bank Account**  
- I used the **roll number** to generate a **unique account number**.  
- The **initial deposit** is calculated as:  
  ```
  Last digit of roll number × 1000 PKR
  ```
  Example: If the roll number is **1234**, the initial deposit is **4 × 1000 = 4000 PKR**.  

---

### **2️⃣ Deposit System (With Roll Number Constraint) 📥**  
- Users can deposit money, but **only if the deposit amount is a multiple of the roll number**.  
- If the user enters an invalid deposit, an **alert message** is displayed:
  ```
  Deposit must be a multiple of your roll number.
  ```
- I used **modulus (%)** to check this condition before updating the balance.  

---

### **3️⃣ Withdrawal System (80% Balance Limit) 📤**  
- Users can withdraw money **only up to 80% of their current balance** to prevent overdrafting.  
- If the user tries to withdraw more than allowed, an **error message** is displayed.  
- The remaining balance updates dynamically after each transaction.  

---

### **4️⃣ Transaction History 📜**  
- I stored all transactions (deposits & withdrawals) in an **array** and used **map()** to dynamically display them on the page.  
- **reduce()** is used to **calculate the total balance** from the transaction history.  

---

### **5️⃣ DOM Manipulation & User Interface 🖥**  
- I used **event delegation** for handling deposit/withdrawal actions to ensure optimal performance.  
- The **UI updates dynamically** without needing a page refresh.  
- Added a **clean layout** with colors inspired by professional banking websites.  

---

## **🛠 Constraints & Challenges**  
✅ **Deposit Restriction** → Deposits must be multiples of the roll number.  
✅ **Withdrawal Limit** → Users can withdraw only **80% of their balance**.  
✅ **Only Vanilla JavaScript** → No external libraries (pure **HTML, CSS, JS**).  
✅ **Error Handling** → Prevents invalid deposits/withdrawals & alerts users.  

---

## **🌟 Bonus Features (Enhancements)**
✅ **Download Transaction History** → Users can **export** their transaction history as a **.txt file**.  
✅ **Dark Mode Toggle 🌙** → Implemented a **dark mode** feature for better UI experience.  

---

## **📂 File Structure**  
```
/bank-account-system
│── index.html  (Main UI)
│── style.css   (Styling)
│── script.js   (Functionality & Logic)
```

---

## **🎯 How to Use?**  
1️⃣ **Enter your roll number** → Generates an account with an initial balance.  
2️⃣ **Deposit Money** → Must be a multiple of your roll number.  
3️⃣ **Withdraw Money** → Can withdraw **up to 80%** of the balance.  
4️⃣ **View Transactions** → All transactions are stored & displayed.  
5️⃣ **Download History** → Save transactions as a `.txt` file.  

---

## **🚀 Future Improvements**  
🔹 Add **interest calculation** on deposits.  
🔹 Implement a **loan system** with eligibility checks.  
🔹 Store data **locally** so transactions persist after page reload.  

---

### **👨‍💻 My Approach**  
I focused on **clean UI, error handling, and optimized JS logic** to ensure a smooth user experience. This project demonstrates **event delegation, array methods (map, reduce), and DOM manipulation** in pure JavaScript. 🚀  

Let me know if you'd like any modifications or additional features! 😃