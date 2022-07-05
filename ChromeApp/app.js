const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
// const loginInput = loginForm.querySelector("#login-form input"); // 첫줄 지우고
// const loginButton = loginForm.querySelector("#login-form button"); // 첫줄 지우고

function btnClick() {
    console.log("click");
}


loginButton.addEventListener("click", btnClick);