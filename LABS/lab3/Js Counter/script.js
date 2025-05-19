
let count = 0;


const counterElement = document.getElementById("counter");
const increaseButton = document.getElementById("increase");
const decreaseButton = document.getElementById("decrease");

// Function to update the displayed counter value
function updateCounter() {
    counterElement.innerText = count;
}

// Increase button functionality
// an event listener. It listens for a click event on the increaseButton. 
// When the button is clicked, the function inside the event listener runs.
increaseButton.addEventListener("click", function() {
    count++;  
    updateCounter();  
});

// Decrease button functionality
decreaseButton.addEventListener("click", function() {
    if (count > 0) {
        count--;  
    }
    updateCounter();   
});
