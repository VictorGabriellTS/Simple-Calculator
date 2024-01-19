

function Calc() {
    document.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            const calcInput = document.getElementById("calcInput");
            try {
                let calcValue = eval(calcInput.value);
                const resultText = document.getElementById("resultText");
                resultText.innerText = calcValue;
                resultText.classList.add("most-result");
                return;
            } catch {
                ErrorPopUp();
            }
        }
    });
}

Calc();
