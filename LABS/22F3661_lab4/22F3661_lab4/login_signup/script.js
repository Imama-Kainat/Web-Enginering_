// ===========================Handle Signup=======================


// When to use const?
// When the variable should not be reassigned (but can still be modified).
// For DOM element selections, as they don’t need reassignment. 
//means properties can be change but totally address and reference cant be changed 

const signupForm = document.getElementById('signupForm');
if (signupForm) {
  signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get user input
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    // Validate fields
    if (name === '' || email === '' || password.length < 6) {
      alert('Please fill all fields. Password must be at least 6 characters.');
      return;
    }

    // Store user details in localStorage
    // localStorage is a browser-provided storage mechanism that allows data to persist even after the browser is closed (
    localStorage.setItem('user', JSON.stringify({ name, email, password }));
    // The setItem method is used to save data in localStorage with a key ('user') and value (in this case, the user data converted to a JSON string).
    // localStorage can only store data as strings. JSON.stringify converts the user object (which contains properties like name, email, and password) into a JSON string format so it can be stored.
    alert('Signup successful! Redirecting to login page.');

    // Redirect to login page
    window.location.href = 'login.html';
    // The window.location.href changes the current page to login.html. This means the user is redirected to the Login Page right after successfully signing up.
  
// About local Storage:==================================
// Each website (including localhost) can store 5MB of data.
// Data remains even after refreshing or closing the browser.
// It is not encrypted and can be accessed via JavaScript.
});
}




//==================== Handle Login=========================
const loginForm = document.getElementById('loginForm');
if (loginForm) {
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Listens for form submission and prevents the page from reloading. This allows JavaScript to handle login validation manually. 
    // preventDefault(); what do ?
    // ✅ Handle form validation in JavaScript without losing user input.
    // ✅ Check user credentials from localStorage before allowing login.
    // ✅ Provide instant feedback (e.g., incorrect password) without refreshing
    //if will not do it we will lose everything 
    // Get user input
    const loginEmail = document.getElementById('loginEmail').value.trim();
    const loginPassword = document.getElementById('loginPassword').value.trim();

    // Retrieve user details from localStorage
    const storedUser = JSON.parse(localStorage.getItem('user'));
    // retrieves the stored user data (which is in string format).converts that string back into a JavaScript object. now holds the user's details (name, email, password) as an object.

    // Validate login credentials
    if (storedUser && storedUser.email === loginEmail && storedUser.password === loginPassword) {
      alert(`Welcome back, ${storedUser.name}!`);
    } else {
      alert('Invalid email or password. Please try again.');
    }
  });
}
