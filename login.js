$(document).ready(() => {
    const validateEmail = email => /^[a-zA-Z0-9._%+-]+@northeastern\.edu$/.test(email);
    const validateInput = (input, minLength, maxLength) => {
        return input && input.length >= minLength && input.length <= maxLength && !/[^a-zA-Z0-9]/.test(input);
    };

    const validateForm = () => {
        let isValid = true;
        const email = $('#email').val().trim();
        const username = $('#username').val().trim();
        const password = $('#password').val();
        const confirmPassword = $('#confirmPassword').val();

        if (!validateEmail(email)) {
            $('#emailError').text("Invalid email. Use your northeastern email.");
            isValid = false;
        } else {
            $('#emailError').text("");
        }

        if (!validateInput(username, 3, 15)) {
            $('#usernameError').text("Username must be 3-15 characters, no special characters.");
            isValid = false;
        } else {
            $('#usernameError').text("");
        }

        if (password.length < 6 || password.length > 20) {
            $('#passwordError').text("Password must be 6-20 characters.");
            isValid = false;
        } else {
            $('#passwordError').text("");
        }

        if (password !== confirmPassword) {
            $('#confirmPasswordError').text("Passwords do not match.");
            isValid = false;
        } else {
            $('#confirmPasswordError').text("");
        }

        $('#loginButton').prop('disabled', !isValid);
    };

    $('#loginForm input').on('input', validateForm);

    $('#loginForm').on('submit', function(event) {
        event.preventDefault();
        if ($('#loginButton').is(':enabled')) {
            window.location.href = 'calculator.html?username=' + encodeURIComponent($('#username').val());
        }
    });
});
