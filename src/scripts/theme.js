function SwitchTheme() {
    const body = document.getElementById("body");
    function SwitchBodyClass() {
        body.classList.toggle("light-theme");
        body.classList.toggle("dark-theme");
    }

    function SaveTheme() {
        window.localStorage.setItem(
            "theme",
            body.classList.contains("dark-theme") ? "dark-theme" : "light-theme"
        );
    }

    function SwitchThemeIcon() {
        const themeIcon = document.getElementById("themeIcon");
        themeIcon.classList.toggle("fa-moon");
        themeIcon.classList.toggle("fa-sun");
    }

    const switchThemeBtn = document.getElementById("switchThemeBtn");
    switchThemeBtn.addEventListener("click", function () {
        SwitchBodyClass();
        SaveTheme();
        SwitchThemeIcon();
    });
}

SwitchTheme();
