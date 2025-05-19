// Get Elements
const stringInput = document.getElementById("user-string");
const rollInput = document.getElementById("roll-number");
const manualIntervalInput = document.getElementById("manual-interval");
const transformBtn = document.getElementById("transform-btn");
const originalOutput = document.getElementById("original-output");
const transformedOutput = document.getElementById("transformed-output");

// Transform Button Click Event
transformBtn.addEventListener("click", () => {
    const inputString = stringInput.value.trim();
    const rollNumber = rollInput.value.trim();
    const manualInterval = parseInt(manualIntervalInput.value, 10);

    if (!inputString || (!rollNumber && isNaN(manualInterval))) {
        alert("Please enter both a string and a roll number or manual interval.");
        return;
    }

    const skipInterval = isNaN(manualInterval) ? calculateSkipInterval(rollNumber) : manualInterval;

    if (skipInterval > inputString.length) {
        alert("Skip interval is larger than string length. Adjusting interval.");
    }

    originalOutput.textContent = inputString;
    transformedOutput.textContent = transformString(inputString, skipInterval);
});

// Calculate Skip Interval from Roll Number
const calculateSkipInterval = (roll) => [...roll].map(Number).reduce((acc, num) => acc + num, 0);

// Transform String Function
const transformString = (str, skipInterval) => {
    let reversed = [...str].reverse();
    
    return reversed.map((char, index) => 
        (index + 1) % skipInterval === 0 ? str[index] : char
    ).join('');
};

// Dark Mode Toggle
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    document.getElementById("toggle-icon").textContent = 
        document.body.classList.contains("dark-mode") ? "🌞" : "🌙";
}
