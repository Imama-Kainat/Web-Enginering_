# **📖 Student Discount System - README**  

## **📌 Overview**  
This project implements a **Roll-Number Based Discount System** where students enter their roll number to dynamically generate a discount percentage on selected products. The discount is derived from the middle two digits of the roll number, with a maximum limit of **50% (or 60% with additional purchases).**  

It features real-time price updates, theme switching (light/dark mode), and discount calculations using **JavaScript functions, DOM manipulation, and array methods like `map()` and `reduce()`.**  

---

## **🛠 Features**  
✅ Extracts the **middle two digits** of the roll number for discount calculation  
✅ **Dynamic product selection** with real-time discounted price updates  
✅ **Discount limit enforcement** (max 50%, increases to 60% after 2 purchases)  
✅ Uses **`reduce()`** to apply multiple discounts on multiple products  
✅ **Dark Mode / Light Mode Toggle** with **localStorage** for preference saving  

---

## **🖥️ How I Approached This Project**  

### **1️⃣ Extracting Discount Percentage from Roll Number**  
- When the student enters their roll number, I **extract the middle two digits** (e.g., from `21F-9445`, I take `44`).  
- If the extracted number is greater than `50`, I cap it at **50%** (or **60% if they have more than 2 purchases**).  

### **2️⃣ Product Selection & Discount Calculation**  
- A **list of products** (Laptop, Smartphone, Headphones) is displayed dynamically.  
- When a student selects a product, the **discount is calculated instantly** and updates the UI in real time.  
- If multiple products are selected, I used **`reduce()`** to apply the discount across all chosen items.  

### **3️⃣ Real-Time DOM Manipulation**  
- The discounted price updates **without reloading the page** by manipulating the DOM.  
- The **original price and final price** are both displayed dynamically.  

### **4️⃣ Theme Toggle (Dark Mode & Light Mode)**  
- I implemented a **dark/light mode switch** to enhance UI/UX.  
- The selected theme is **saved in `localStorage`**, so it remains consistent even after a page refresh.  
- **CSS dynamically updates** the background and text colors when switching themes.  

---

## **🚀 Technologies Used**  
- **HTML5** – Structure of the webpage  
- **CSS3** – Styling and Dark Mode theme  
- **JavaScript (Vanilla JS)** – Logic, DOM Manipulation, and Dynamic Price Updates  

---

## **🛠 How to Use the Discount System**  

1️⃣ Enter your **roll number** (e.g., `21F-9445`).  
2️⃣ Select a **product** from the list.  
3️⃣ The **discount percentage** is calculated based on your roll number.  
4️⃣ The **discounted price** is displayed instantly.  
5️⃣ If multiple products are selected, their **combined discount is applied** using `reduce()`.  
6️⃣ Toggle between **Light Mode / Dark Mode** using the switch button.  

---

## **🎯 Additional Constraints Considered**  
✔ **Max Discount Limit:** The discount is capped at **50%**, even if the roll number suggests a higher value.  
✔ **Multiple Purchases Rule:** After 2 purchases, the max discount increases to **60%**.  
✔ **Edge Cases Handled:**  
   - If the roll number format is incorrect, it **displays an error message**.  
   - If no product is selected, it **prevents incorrect calculations**.  
✔ **Instant Updates:** The UI updates dynamically without **page reloads**.  

---

## **📸 Screenshot of the UI (AliExpress Theme)**  
![Student Discount System](https://i.imgur.com/example.png)  

---

## **📜 Future Enhancements**  
🔹 Add an **extra promo code system** for special discounts.  
🔹 Implement a **shopping cart** for multiple product selection.  
🔹 Provide an **option to download the invoice** after purchase.  

---

## **📌 Conclusion**  
This project successfully implements a **dynamic discount system** using **JavaScript, DOM manipulation, and array methods** while ensuring **real-time updates** and a **user-friendly interface.** 🚀  

