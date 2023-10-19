const users = {};

function registerUser(username, password) {
    // Simulate password hashing (insecure, for demonstration purposes)
    users[username] = password;
}

function loginUser(username, password) {
    if (users[username] === password) {
        return true;
    }
    return false;
}

document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;
    if (loginUser(username, password)) {
        document.getElementById("login-error").textContent = "";
        document.getElementById("login-container").style.display = "none";
        document.getElementById("secured-page").style.display = "block";
    } else {
        document.getElementById("login-error").textContent = "Invalid username or password.";
    }
});

document.getElementById("register-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("register-username").value;
    const password = document.getElementById("register-password").value;
    if (users[username]) {
        document.getElementById("register-error").textContent = "Username already exists.";
    } else {
        registerUser(username, password);
        document.getElementById("register-error").textContent = "";
        document.getElementById("register-success").textContent = "Registration successful!";
    }
});

document.getElementById("logout-button").addEventListener("click", function () {
    document.getElementById("secured-page").style.display = "none";
    document.getElementById("login-container").style.display = "block";
    document.getElementById("login-username").value = "";
    document.getElementById("login-password").value = "";
});
