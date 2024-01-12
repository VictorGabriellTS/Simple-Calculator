function ErrorPopUp() {
    const errorPopUp = document.getElementById("errorPopUp");
    errorPopUp.classList.remove("d-none");
    const closePopUpBtn = document.getElementById("closePopUpBtn");
    closePopUpBtn.addEventListener("click", function () {
        errorPopUp.classList.add("d-none")
    });
}
