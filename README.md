# Mitra_Aditya_002303254_Assignment-7-Web-Design-User-Experience
Simple Calculator and Stopwatch Web Application
Overview
This project consists of two web applications: a simple calculator and a stopwatch. The calculator includes a login page with validation and performs basic arithmetic operations. The stopwatch allows users to track time with start, stop, and reset functionalities.

Technologies Used
HTML
CSS
jQuery
JavaScript (ES6 with Arrow Functions)
Promises and Async/Await
Features
Part A: Calculator Application
Login Page:

Fields: Email, Username, Password, Confirm Password.
Validation:
Email must be a Northeastern University email.
Username must be 3-15 characters, no special characters.
Password must be 6-20 characters.
Confirm Password must match Password.
Error messages are displayed below the respective fields in red.
Login button is disabled until all validations pass.
Calculator Page:

Displays the logged-in username.
Two input fields for numbers.
Four buttons for arithmetic operations: Add, Subtract, Multiply, Divide.
Input validation:
Only numbers allowed.
No special characters.
Displays error messages below the fields.
Operations are handled using a single arrow function.
Part B: Stopwatch Application
A single-page application featuring:
A label displaying time in "HH:MM
" format.
A date picker that defaults to the current date.
Three buttons: Start, Stop, and Reset.
Time starts on clicking Start, pauses on Stop, and resets to 00:00:00 on Reset.
Uses setInterval and clearInterval for timing functionality.
