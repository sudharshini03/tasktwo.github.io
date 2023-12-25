function validateForm() {
    // Basic email format validation
    var emailInput = document.getElementById('email');
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
        alert('Please enter a valid email address.');
        return false;
    }

    // Password strength requirement (at least 6 characters)
    var passwordInput = document.getElementById('password');
    if (passwordInput.value.length < 6) {
        alert('Password must be at least 6 characters.');
        return false;
    }

    // If all validations pass, redirect to the confirmation page
    window.location.href = "confirmation.html";
    return false; // Prevents the form from submitting (we're handling the redirect)
}
