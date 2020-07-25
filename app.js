var sizeInput = document.getElementById("input__size");
var speedInput = document.getElementById("input__speed");

const validatePattern = /([0-9])\w+/g;

sizeInput.addEventListener('input', validateInput);
speedInput.addEventListener('input', validateInput);

function validateInput(input) {
    if (!input.target.value.replace(validateInput)) {
        input.target.style.border = "1px solid #f00";
    } else {
        input.target.style.border = "none";
    }
}