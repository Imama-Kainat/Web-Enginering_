// Sample product list
const products = [
    { name: "Laptop", price: 80000 },
    { name: "Smartphone", price: 50000 },
    { name: "Headphones", price: 5000 }
];

const productList = document.getElementById("productList");
const rollNumberInput = document.getElementById("rollNumber");
const finalPriceDisplay = document.getElementById("finalPrice");
const themeToggle = document.getElementById("toggleTheme");

let selectedProduct = null;

// Populate product list dynamically
products.forEach((product, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${product.name} - Rs.${product.price}`;
    listItem.onclick = () => selectProduct(index);
    productList.appendChild(listItem);
});

// Function to extract discount from roll number
function getDiscount(rollNumber) {
    const match = rollNumber.match(/\d{2}/g);
    if (!match) return 0;
    let discount = parseInt(match[1]) || 0; // Extract middle two digits
    return Math.min(discount, 50); // Maximum discount is 50%
}

// Function to handle product selection
function selectProduct(index) {
    selectedProduct = products[index];
    calculateFinalPrice();
}

// Function to calculate and update the final price
function calculateFinalPrice() {
    if (!selectedProduct) return;
    const rollNumber = rollNumberInput.value.trim();
    if (!rollNumber) {
        finalPriceDisplay.textContent = "Enter your roll number to see discount!";
        return;
    }

    let discount = getDiscount(rollNumber);
    let discountedPrice = selectedProduct.price - (selectedProduct.price * discount / 100);
    finalPriceDisplay.textContent = `Discount: ${discount}% | Final Price: Rs.${discountedPrice}`;
}

// Listen for roll number input change
rollNumberInput.addEventListener("input", calculateFinalPrice);

// Dark Mode Toggle
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});
