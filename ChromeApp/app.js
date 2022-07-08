const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
// const loginInput = loginForm.querySelector("#login-form input"); // 첫줄 지우고
// const loginButton = loginForm.querySelector("#login-form button"); // 첫줄 지우고

const link = document.querySelector("a");

function onLoginSubmit(event) {
    event.preventDefault(); // preventDefault : 브라우저가 기본 동작을 실행하지 못하게 막음
    console.log(loginInput.value);
}

loginForm.addEventListener("submit", onLoginSubmit);