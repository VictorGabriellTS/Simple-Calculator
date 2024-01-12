

function Calc() {
    document.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            const calcInput = document.getElementById("calcInput");
            try {
                let calcValue = eval(calcInput.value);
                let finalResult = calcValue;
                const resultText = document.getElementById("resultText");
                resultText.innerText = finalResult;
                resultText.classList.add("most-result");
                return;
            } catch {
                ErrorPopUp();
            }
        }
    });
}

Calc();
