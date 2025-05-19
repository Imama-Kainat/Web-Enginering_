# **3D Flip Product Cards**  

## **Introduction**  
Hi! I built a **visually unique 3D flip product card** using **pure HTML, CSS, and JavaScript**. The goal was to create an interactive product display where users can see basic product details on the front and additional information on the back upon hover.  

This project was designed with **smooth 3D flipping animations using only CSS**, while product data is dynamically loaded from a JavaScript object instead of hardcoding it in HTML.  

---

## **Features Implemented**  

### ✅ **3D Flip Animation (CSS Only)**  
- I used **CSS `perspective` and `transform`** properties to create a smooth 3D flip effect.  
- The **card flips** when hovered, revealing the back side.  
- No JavaScript-based animations were used, ensuring a pure CSS transition.  

### ✅ **Dynamic Product Generation**  
- Instead of manually writing each product card in HTML, I created a **JavaScript object containing multiple product details**.  
- A **JavaScript function dynamically generates** the product cards from this object, ensuring scalability and flexibility.  

### ✅ **Front Side (Basic Product Info)**  
- Displays:  
  - **Product Name**  
  - **Product Price**  
  - **Product Image**  

### ✅ **Back Side (Detailed Product Info)**  
- Upon flipping, the back side displays:  
  - 📦 **Material Used** (e.g., Leather, Suede)  
  - 🛋️ **Comfort Details** (e.g., Padded insole, Ankle support)  
  - 🎯 **Best Usage** (e.g., Party, Office, Weddings)  
  - 📏 **Available Sizes** (e.g., Sizes 5-11)  
  - ⭐ **Customer Rating** (e.g., ⭐⭐⭐⭐⭐)  
  - 🛒 **"Buy Now" Button** (Logs purchase to console)  

### ✅ **Proper Layout & Alignment (CSS Grid & Flexbox)**  
- The **product grid** is responsive, using `grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));` for **equal distribution**.  
- The **content on the back is left-aligned** with proper spacing using **Flexbox**.  
- Icons are added for **better readability and structure**.  

### ✅ **Dark Mode with Sun 🌞 & Moon 🌙 Toggle**  
- I implemented a **dark mode toggle** using a **sun 🌞 and moon 🌙 icon**.  
- Clicking the **moon (🌙)** enables **dark mode**, changing:  
  - Background to **dark brown (#3B2F2F)**  
  - Text to **white**  
  - Both front and back of the card to **match the theme**  
- Clicking the **sun (🌞)** restores the **light mode**, making the background **bright again**.  

### ✅ **Constraint Followed (No Frameworks!)**  
- I followed the project constraints **strictly**:  
  - ❌ **No Bootstrap, Tailwind, or jQuery** – Everything was built using **vanilla HTML, CSS, and JavaScript**.  
  - ✅ **Pure CSS animations** (no JavaScript-based flips).  
  - ✅ **Grid-based layout** for structured alignment.  

---

## **How to Use This Project?**  

1. **Download the project files** (`index.html`, `styles.css`, `script.js`).  
2. **Open `index.html`** in a browser.  
3. **Hover over the product cards** to see the **3D flip animation**.  
4. **Click "Buy Now"** to log the purchase to the console.  
5. **Click the moon 🌙 (top-right corner)** to enable dark mode.  
6. **Click the sun 🌞** to switch back to light mode.  

---

## **Future Improvements** (If I Continue This)  
🔹 **Add a shopping cart** to store selected products.  
🔹 **Enhance animations** with a slight delay for smoother transitions.  
🔹 **Fetch real product data** from an API instead of using a JavaScript object.  
🔹 **Make it fully responsive** for mobile devices.  

---

## **Conclusion**  
I successfully created **a fully functional, interactive, and visually appealing product card** that meets all the project requirements. This project helped me improve my **CSS animations, JavaScript DOM manipulation, and UI/UX design skills**.  

Hope you like it! 🚀 Let me know if you have any suggestions! 😊  

---

### **Tech Stack Used**  
✅ **HTML** – Structure  
✅ **CSS (Grid, Flexbox, Animations)** – Styling & 3D Flip  
✅ **JavaScript (DOM Manipulation, Dark Mode Toggle, Dynamic Data)** – Interactivity  


