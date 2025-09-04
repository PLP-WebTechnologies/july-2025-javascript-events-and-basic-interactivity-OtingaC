// Toggle Fun Fact
const toggleButton = document.getElementById("toggleButton");
const about = document.getElementById("about");

toggleButton.addEventListener("click", () => {
    about.classList.toggle("hidden");
});

// Click Counter
const counterButton = document.getElementById("counterButton");
const clickCount = document.getElementById("clickCount");
let count = 0;

counterButton.addEventListener("click", () => {
    count++;
    clickCount.textContent = count;
});

// Form Validation
const signupForm = document.getElementById("signupForm");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");

const usernameError = document.getElementById("usernameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let isvalid = true;
// Validate Username
    if (username.value.trim().length < 3) {
        usernameError.textContent = "Username must be at least 3 characters long.";
        isValid = false;
    } else {
        usernameError.textContent = "";
    }
// Validate Email
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.value.match(emailPattern)) {
        emailError.textContent = "Please enter a valid email address.";
        isValid = false;
    } else {
        emailError.textContent = "";
    }
// Validate Password- atleast 6characters
    if (password.value.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters long.";
        isValid = false;
    } else {
        passwordError.textContent = "";
    }
// If all fields are valid, submit the form.
    if (isValid) {
        alert("Form submitted successfully!");
        signupForm.reset();  // Clear Form
    }
});