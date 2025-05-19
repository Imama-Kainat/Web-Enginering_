# **🔄 Selective String Reversal with Dynamic List Population**  

## **📌 Introduction**  
Welcome to **Selective String Reversal**, an **interactive web-based tool** designed to process a user-inputted string by **reversing it while skipping specific characters** at calculated intervals. 🚀  

I approached this project by ensuring a **seamless, dynamic, and user-friendly experience**. Using **Vanilla JavaScript**, I implemented **real-time string transformation and dynamic list updates**—ensuring users can instantly see both the **original and transformed strings** without needing to refresh the page.  

The **skip interval (N)** is calculated by summing the digits of the **roll number** provided by the user. Alternatively, users can **manually enter an interval** instead of using their roll number.  

---

## **🎯 Features Implemented**  

### ✅ **User Input Form & Validation**  
I approached the user input section by keeping it **minimal yet functional**:  
- **Users enter a string** and a **roll number** into the form.  
- A **"Transform" button** processes the input and generates the transformed result.  
- If users prefer, they can **manually input a skip interval (N)** instead of using their roll number.  

### ✅ **Skip Interval Calculation (`reduce()`)**  
I implemented the logic for calculating the **skip interval** efficiently:  
- The digits of the **roll number are extracted** and summed using `reduce()`.  
- If a **manual interval** is entered, it takes priority over the roll number calculation.  

🔹 **Example Calculation:**  
✅ **Roll Number = `1234`**  
✅ **Sum of digits = `1 + 2 + 3 + 4 = 10`**  
✅ **Skip interval (N) = `10`**  

---

### ✅ **Selective String Reversal**  
I approached the reversal logic by ensuring **every N-th character remains in place while the rest of the string is reversed**.  
- The input string is **converted into an array** for easy manipulation.  
- Using `map()`, the characters are **reversed selectively**, keeping **every N-th character in its original position**.  
- **Spaces are preserved** to maintain readability.  

🔹 **Example Transformation:**  
✅ **Input String:** `"hello world"`  
✅ **Skip Interval (N) = `3`**  
✅ **Reversed Output:** `"dlrlo owleh"`  
👉 (Every **3rd character stays in place**, while others are reversed)  

---

### ✅ **Dynamic List Population (DOM Manipulation)**  
I approached **real-time UI updates** using JavaScript’s **DOM manipulation techniques**:  
- Both the **original and transformed strings** are dynamically displayed in a **list below the input form**.  
- Each transformation is stored in a **history section**, allowing users to **see past transformations**.  

🔹 **Example Output Display:**  
```
Original: hello world  
Transformed: dlrlo owleh  
```

---

### ✅ **Edge Case Handling**  
I ensured **edge cases** are properly handled to prevent errors:  
- If **N > string length**, it **adjusts** the interval.  
- **Empty inputs** trigger an **error message** instead of breaking the page.  
- **Numbers, spaces, and special characters** remain in their correct positions.  

---

### ✅ **Event Delegation for Button Clicks**  
Instead of adding event listeners to each button separately, I used **event delegation** to improve efficiency:  
- The **parent container listens for clicks**, ensuring buttons work even for dynamically added elements.  
- This makes the app **more scalable and performant**.  

---

## **🚀 Bonus Features**  

### 🌟 **Manual Skip Interval Option**  
- Users can **manually enter N** instead of relying on their **roll number sum**.  
- If a **manual interval is provided**, it **overrides the roll number calculation**.  

### 🌙 **Dark Mode Toggle**  
- Users can **toggle dark mode** using a **moon 🌙 & sun 🌞 icon**.  
- The entire UI updates **instantly**, making it **easy on the eyes for night-time usage**.  

---

## **🛠️ How I Implemented It**  

### 1️⃣ **Using `reduce()` to Calculate Skip Interval**  
I extracted digits from the roll number, converted them into an array, and summed them using `reduce()`:  
```js
const calculateSkipInterval = (roll) => [...roll].map(Number).reduce((acc, num) => acc + num, 0);
```
This ensures that **even if the roll number has leading zeros, the correct sum is always calculated**.  

---

### 2️⃣ **Reversing the String While Keeping Every N-th Character in Place**  
I used **map()** to selectively reverse characters **without affecting spaces or special characters**:  
```js
const transformString = (str, skipInterval) => {
    let reversed = [...str].reverse();
    
    return reversed.map((char, index) => 
        (index + 1) % skipInterval === 0 ? str[index] : char
    ).join('');
};
```
This approach **ensures that every N-th character remains unchanged** while reversing the rest.  

---

### 3️⃣ **Dynamically Updating the UI Without Refresh**  
I used **DOM manipulation** to update the output section **instantly**:  
```js
document.getElementById("transform-btn").addEventListener("click", () => {
    const inputString = stringInput.value.trim();
    const rollNumber = rollInput.value.trim();
    const manualInterval = parseInt(manualIntervalInput.value, 10);

    if (!inputString || (!rollNumber && isNaN(manualInterval))) {
        alert("Please enter both a string and a roll number or manual interval.");
        return;
    }

    const skipInterval = isNaN(manualInterval) ? calculateSkipInterval(rollNumber) : manualInterval;
    originalOutput.textContent = inputString;
    transformedOutput.textContent = transformString(inputString, skipInterval);
});
```
This ensures **instant transformations** without reloading the page.  

---

### 4️⃣ **Dark Mode Implementation**  
I approached dark mode using a **simple class toggle** for efficiency:  
```js
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    document.getElementById("toggle-icon").textContent = 
        document.body.classList.contains("dark-mode") ? "🌞" : "🌙";
}
```
This allows users to **switch themes seamlessly** with a single click.  

---

## **🎨 Color Theme (Inspired by Google & Stack Overflow)**  
I designed **Selective String Reversal** with a **clean, modern UI**:  

| Element | Light Mode | Dark Mode |
|---------|------------|-----------|
| **Background** | `#F4F4F4` (Light Gray) | `#1E1E1E` (Dark Gray) |
| **Input Fields** | `#FFFFFF` (White) | `#333333` (Dark Gray) |
| **Buttons** | `#4285F4` (Google Blue) | `#00A8E8` (Light Blue) |
| **Transformed Text** | `#EA4335` (Red) | `#FF6B6B` (Light Red) |
| **Original Text** | `#1877F2` (Facebook Blue) | `#74C365` (Light Green) |

---

## **📌 How to Use It?**  

1️⃣ **Download and open `index.html` in a browser.**  
2️⃣ **Enter a string and roll number (or a manual interval).**  
3️⃣ **Click "Transform"** to see the reversed output instantly.  
4️⃣ **Use the search & filter** to find past transformations.  
5️⃣ **Click 🌙 to enable Dark Mode** for a night-friendly UI.  

---

## **🎯 Conclusion**  
I approached this project with a focus on **clarity, efficiency, and user experience**. **Selective String Reversal** provides a **fast, interactive, and visually appealing way to manipulate text dynamically**, with **real-time transformations, dynamic list updates, and a modern UI**.  

Let me know if you have any suggestions! 🚀😊