// filepath: c:/Users/marsa/OneDrive/Desktop/web final/week2/script.js
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const loginErrorDiv = document.getElementById('login-error');

    const loginFormDiv = document.getElementById('login-form');
    const contentAreaDiv = document.getElementById('content-area');
    const welcomeUsernameSpan = document.getElementById('welcome-username');
    const profileInfoDiv = document.getElementById('profile-info');
    const adminContentDiv = document.getElementById('admin-content');
    const adminDataDiv = document.getElementById('admin-data');
    const editorContentDiv = document.getElementById('editor-content');
    const editorDataDiv = document.getElementById('editor-data');
    const logoutButton = document.getElementById('logout-button');

    const API_BASE_URL = 'http://localhost:3000'; // Adjust if your server runs elsewhere

    // --- Helper Functions ---

    async function fetchData(endpoint, token) {
        try {
            const response = await fetch(`${API_BASE_URL}/${endpoint}`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.error(`Error fetching ${endpoint}:`, error);
            // Handle specific errors, e.g., 401 Unauthorized might mean token expired
            if (error.message.includes('401') || error.message.includes('403')) {
                logout(); // Log out if token is invalid or forbidden
            }
            return null; // Indicate failure
        }
    }

    function displayLoginError(message) {
        loginErrorDiv.textContent = message;
        loginErrorDiv.style.display = 'block';
    }

    function hideLoginError() {
        loginErrorDiv.style.display = 'none';
    }

    function showContentArea(username, role) {
        welcomeUsernameSpan.textContent = username;
        loginFormDiv.style.display = 'none';
        contentAreaDiv.style.display = 'block';
        hideLoginError();

        // Reset content areas
        profileInfoDiv.innerHTML = 'Loading profile...';
        adminContentDiv.style.display = 'none';
        adminDataDiv.innerHTML = '';
        editorContentDiv.style.display = 'none';
        editorDataDiv.innerHTML = '';

        loadProtectedData(role);
    }

    function showLoginForm() {
        loginFormDiv.style.display = 'block';
        contentAreaDiv.style.display = 'none';
        usernameInput.value = '';
        passwordInput.value = '';
    }

    async function loadProtectedData(role) {
        const token = localStorage.getItem('authToken');
        if (!token) {
            logout(); // Should not happen if called after login, but safety check
            return;
        }

        // Fetch profile data (assuming /profile returns basic user info)
        const profileData = await fetchData('profile', token);
        if (profileData) {
            // Adjust based on actual data structure returned by /profile
            profileInfoDiv.innerHTML = `<p>Profile details: ${JSON.stringify(profileData)}</p>`;
        } else {
            profileInfoDiv.innerHTML = '<p class="text-danger">Could not load profile data.</p>';
        }

        // Fetch admin data if user has admin role
        if (role === 'admin') {
            const adminData = await fetchData('admin', token);
            if (adminData) {
                adminContentDiv.style.display = 'block';
                 // Adjust based on actual data structure returned by /admin
                adminDataDiv.innerHTML = `<p>Admin specific info: ${JSON.stringify(adminData)}</p>`;
            } else {
                 adminContentDiv.style.display = 'block'; // Show section even if data fails
                 adminDataDiv.innerHTML = '<p class="text-danger">Could not load admin data.</p>';
            }
        }

        // Fetch editor data if user has editor or admin role
        if (role === 'editor' || role === 'admin') {
             const editorData = await fetchData('editor', token);
             if (editorData) {
                editorContentDiv.style.display = 'block';
                 // Adjust based on actual data structure returned by /editor
                editorDataDiv.innerHTML = `<p>Editor specific info: ${JSON.stringify(editorData)}</p>`;
             } else {
                 editorContentDiv.style.display = 'block'; // Show section even if data fails
                 editorDataDiv.innerHTML = '<p class="text-danger">Could not load editor data.</p>';
             }
        }
    }

    function logout() {
        localStorage.removeItem('authToken');
        localStorage.removeItem('userRole'); // Remove role as well
        localStorage.removeItem('username'); // Remove username
        showLoginForm();
    }

    // --- Event Listeners ---

    loginForm.addEventListener('submit', async (event) => {
        event.preventDefault(); // Prevent default form submission
        hideLoginError();

        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        if (!username || !password) {
            displayLoginError('Please enter both username and password.');
            return;
        }

        try {
            const response = await fetch(`${API_BASE_URL}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            if (!response.ok) {
                 const errorData = await response.json().catch(() => ({ message: 'Login failed. Please check your credentials.' }));
                 throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
            }

            const data = await response.json(); // Expecting { token: '...', user: { username: '...', role: '...' } }

            if (data.token && data.user && data.user.role) {
                localStorage.setItem('authToken', data.token);
                localStorage.setItem('userRole', data.user.role); // Store role
                localStorage.setItem('username', data.user.username); // Store username
                showContentArea(data.user.username, data.user.role);
            } else {
                // This case implies the backend response format is unexpected
                 console.error('Login response missing token or user data:', data);
                 displayLoginError('Login failed due to unexpected server response.');
            }

        } catch (error) {
            console.error('Login error:', error);
            displayLoginError(error.message || 'An error occurred during login.');
        }
    });

    logoutButton.addEventListener('click', logout);

    // --- Initial Check ---
    // Check if user is already logged in (token exists)
    const storedToken = localStorage.getItem('authToken');
    const storedRole = localStorage.getItem('userRole');
    const storedUsername = localStorage.getItem('username');
    if (storedToken && storedRole && storedUsername) {
        
        console.log('User already logged in.');
        showContentArea(storedUsername, storedRole);
    } else {
        console.log('User not logged in.');
        showLoginForm();
    }
});
