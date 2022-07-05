const h1 = document.querySelector("div.hello:first-child h1");

console.log(h1);
console.dir(h1);

// h1.innerText = "Hello";

// h1.style.color = "blue"

function handleTitleClick() {
    const currentcolor = h1.style.color;
    let newColor;
    if (currentcolor === "blue") {
        newColor = "red";
    } else {
        newColor = "blue";
    }
    h1.style.color = newColor;
}

function handleMouseEnter() {
    h1.innerText = "Mouse is here!";
}

function handleMouseLeave() {
    h1.innerText = "Mouse is gone!";
}

function handleWindowResize() {
    document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
    alert("copier");
}

function handleWindowOffline() {
    alert("Sos no WIFI");
}

function handleWindowOnline() {
    alert("All Good");
}


h1.addEventListener("click", handleTitleClick)
// title.onmouseenter = handleMouseEnter;  // 위에꺼랑 같음
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);