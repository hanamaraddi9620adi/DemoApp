const homeSection = document.getElementById("home");
const loginSection = document.getElementById("login");
const dashboardSection = document.getElementById("dashboard");
const userDisplay = document.getElementById("userDisplay");

const homeLink = document.getElementById("homeLink");
const loginLink = document.getElementById("loginLink");
const dashboardLink = document.getElementById("dashboardLink");
const getStarted = document.getElementById("getStarted");
const loginForm = document.getElementById("loginForm");
const loginError = document.getElementById("loginError");
const logoutBtn = document.getElementById("logoutBtn");

// Mock login credentials
const validUser = { username: "student", password: "1234" };

// Navigation
homeLink.onclick = () => showSection("home");
loginLink.onclick = () => showSection("login");
getStarted.onclick = () => showSection("login");

function showSection(section) {
  homeSection.classList.add("hidden");
  loginSection.classList.add("hidden");
  dashboardSection.classList.add("hidden");
  if (section === "home") homeSection.classList.remove("hidden");
  if (section === "login") loginSection.classList.remove("hidden");
  if (section === "dashboard") dashboardSection.classList.remove("hidden");
}

// Login logic
loginForm.onsubmit = (e) => {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  if (username === validUser.username && password === validUser.password) {
    userDisplay.textContent = username;
    dashboardLink.classList.remove("hidden");
    showSection("dashboard");
    loginError.classList.add("hidden");
  } else {
    loginError.classList.remove("hidden");
  }
};

// Logout logic
logoutBtn.onclick = () => {
  dashboardLink.classList.add("hidden");
  showSection("home");
};
