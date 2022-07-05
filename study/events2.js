const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
    h1.classList.toggle("cliked");
}

h1.addEventListener("click", handleTitleClick)
