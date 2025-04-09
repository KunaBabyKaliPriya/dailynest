function validate_form() {
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var pincode = document.getElementById("pincode").value;
    var error_message = document.getElementById("error_message");

    // Reset error message
    error_message.innerHTML = "";
    error_message.style.padding = "10px";

    // Name Validation (at least 3 characters)
    if (name.length < 3) {
        error_message.innerHTML = "Please enter a valid Name.";
        return false;
    }

    // Phone Number Validation (should be exactly 10 digits)
    if (!/^\d{10}$/.test(phone)) {
        error_message.innerHTML = "Please enter a valid 10-digit Phone Number.";
        return false;
    }

    // Pincode Validation (should be exactly 6 digits)
    if (!/^\d{6}$/.test(pincode)) {
        error_message.innerHTML = "Please enter a valid 6-digit Pincode.";
        return false;
    }

    // Email Validation (should contain '@' and be at least 6 characters long)
    if (email.indexOf("@") === -1 || email.length < 6) {
        error_message.innerHTML = "Please enter a valid E-mail ID.";
        return false;
    }

    // Redirect to payment page after successful validation
    window.location.href = "Payment HTML.html";
    return false; // Prevent default form submission
}
