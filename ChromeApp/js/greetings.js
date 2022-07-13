const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
// const loginInput = loginForm.querySelector("#login-form input"); // 첫줄 지우고
// const loginButton = loginForm.querySelector("#login-form button"); // 첫줄 지우고
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"

function onLoginSubmit(event) {
    event.preventDefault(); // preventDefault : 브라우저가 기본 동작을 실행하지 못하게 막음
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const typedUsername = loginInput.value;
    localStorage.setItem(USERNAME_KEY, typedUsername);
    // greeting.innerText = "Hello " + username;
    paintGreetings(typedUsername);
    // greeting.innerText = `Hello ${username}`;   // 위에꺼랑 같음
    // greeting.classList.remove(HIDDEN_CLASSNAME);
}

function paintGreetings(username) {
    // const username = localStorage.getItem(USERNAME_KEY);
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUsername);
}