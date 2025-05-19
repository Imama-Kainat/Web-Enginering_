const products = [
    { 
        name: "Red Stiletto Heels", 
        price: "$50", 
        image: "heel1.jfif", 
        description: "Sophisticated black heels with a sleek finish, perfect for evening wear.",
        material: "Premium Leather",
        comfort: "Padded insole for all-day comfort",
        idealFor: "Perfect for parties, formal events, and dinners",
        sizes: "Available in sizes 5-11",
        rating: "⭐⭐⭐⭐☆ (4.5/5)"
    },
    { 
        name: "Elegant Black Heels", 
        price: "$60", 
        image: "heel2.jfif", 
        description: "Bold and stylish red stilettos designed for confidence and elegance.",
        material: "Suede with a glossy finish",
        comfort: "Ergonomic design with ankle support",
        idealFor: "Date nights, clubbing, and special occasions",
        sizes: "Available in sizes 6-10",
        rating: "⭐⭐⭐⭐⭐ (5/5)"
    },
    { 
        name: "Pink Party Heels", 
        price: "$70", 
        image: "heel3.jfif", 
        description: "Dazzling gold heels that add glamour to any special occasion.",
        material: "Shimmering fabric with gold detailing",
        comfort: "Soft cushioning with anti-slip sole",
        idealFor: "Weddings and celebrations",
        sizes: "Available in sizes 5-12",
        rating: "⭐⭐⭐⭐☆ (4.7/5)"
    }
];

function createProductCards() {
    const container = document.getElementById("product-container");
    container.innerHTML = ""; // Clear previous cards if any

    products.forEach(product => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <div class="card-inner">
                <!-- Front Side -->
                <div class="card-front">
                    <h3>${product.name}</h3>
                    <img src="${product.image}" alt="${product.name}" width="150">
                    <p><strong>${product.price}</strong></p>
                </div>

                <!-- Back Side -->
                <div class="card-back">
                    <p><strong>${product.description}</strong></p>
                    <p><b>Material:</b> ${product.material}</p>
                    <p><b>Comfort:</b> ${product.comfort}</p>
                    <p><b>Best For:</b> ${product.idealFor}</p>
                    <p><b>Sizes:</b> ${product.sizes}</p>
                    <p><b>Rating:</b> ${product.rating}</p>
                    <button class="buy-btn" onclick="buyNow('${product.name}')">Buy Now</button>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

function buyNow(productName) {
    console.log("Purchased: " + productName);
}

// Dark Mode Toggle using Sun & Moon Icon
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    const icon = document.getElementById("toggle-icon");

    if (document.body.classList.contains("dark-mode")) {
        icon.textContent = "🌞"; // Switch to Sun for Light Mode
    } else {
        icon.textContent = "🌙"; // Switch to Moon for Dark Mode
    }
}

// Initialize Cards
createProductCards();
