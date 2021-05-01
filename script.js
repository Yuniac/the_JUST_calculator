// the display outputs
const current = document.querySelector(".current-value");
const previous = document.querySelector(".previous-value");


// the delete - clear buttons 
const clearAll = document.querySelector(".clear-cell");
const clearEntery = document.querySelector(".delete-cell");
// clear removes everything
clearAll.addEventListener("click", () => {
    current.textContent = "";
    previous.textContent = "";
    disableButtons();
});
// clear entry removes the last number inputted
clearEntery.addEventListener("click", () => {
    current.textContent = current.textContent.slice(0, (current.textContent.length - 1));
});


// the math operations buttons
const math = document.getElementsByClassName("math");
const mathButtons = Array.from(math);

const add = document.getElementById("add");
const divide = document.getElementById("divide");
const minus = document.getElementById("minus");
const multiply = document.getElementById("multiply");
const dotButton = document.getElementById("decimal");
const equalButton = document.getElementById("equal");

// the disabled buttons onload (=, .)
const opButtons = document.getElementsByClassName("disable");
const operatorButtons = Array.from(opButtons)



function disableButtons() {
    operatorButtons.forEach((button) => { button.disabled = true; })
}

function enableButtons() {
    operatorButtons.forEach((button) => { button.disabled = false; })
}

disableButtons();


// the numbers 
const numbers = document.getElementsByClassName("numbers");
const numbersButtons = Array.from(numbers);

// numbers event loop
numbersButtons.forEach((button) => {
    button.addEventListener("click", () => {
        current.textContent += button.textContent;
        enableButtons();
    });
});


// symbols event loop
mathButtons.forEach((button) => {
    button.addEventListener("click", () => {
        previous.textContent = current.textContent + button.textContent;
        current.textContent = "";
        disableButtons();
    })
})

// the dot button
dotButton.addEventListener("click", () => {
    current.textContent += ".";
    disableButtons();
})

equalButton.addEventListener("click", () => {
    previous.textContent = eval(previous.textContent + current.textContent);
    current.textContent = "";
    disableButtons();
})
