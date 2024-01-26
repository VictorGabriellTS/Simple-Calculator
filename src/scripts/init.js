const body = document.getElementById("body");
const theme = window.localStorage.getItem("theme");

if (theme === "dark-theme") {
    body.classList.add("dark-theme");
    body.classList.remove("light-theme");
}
