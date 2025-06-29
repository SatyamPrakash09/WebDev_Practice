document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("loginForm");
    const errorMessage = document.getElementById("error-message");

    // Event listener for form submission
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form reload

        const userId = document.getElementById("userId").value;
        const password = document.getElementById("password").value;

        // Check if credentials are already stored
        const storedUserId = localStorage.getItem("storedUserId");
        const storedPassword = localStorage.getItem("storedPassword");

        if (!storedUserId || !storedPassword) {
            // If no credentials are stored, save them
            localStorage.setItem("storedUserId", userId);
            localStorage.setItem("storedPassword", password);
            alert("Credentials saved successfully! You can now log in.");
            form.reset();
        } else if (userId === storedUserId && password === storedPassword) {
            // Validate credentials
            alert("Login successful!");
            errorMessage.textContent = ""; // Clear error message
        } else {
            // If credentials don't match, update them with new data
            localStorage.setItem("storedUserId", userId);
            localStorage.setItem("storedPassword", password);
            alert("New credentials saved successfully!");
            form.reset();
        }
    });
});