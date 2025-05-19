document.getElementById("feedbackForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }
    
    document.getElementById("responseMessage").textContent = "We will contact you soon. Thanks for your feedback!";
    this.reset();
});
