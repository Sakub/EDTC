const sizeInput = document.getElementById("input__size");
const speedInput = document.getElementById("input__speed");
const submitButton = document.getElementById("submitBtn");
const inputsWrapper = document.getElementById("inputsWrapper");
const header = document.getElementById('header__text');
const estimateTime__text = document.getElementById('wrapper__estimatedTime');
const validatePattern = /([0-9])\w+/g;

var estimateTime;

sizeInput.addEventListener('input', validateInput);
speedInput.addEventListener('input', validateInput);
submitButton.onclick = calculate;


function validateInput(input) {
    if (!input.target.value.replace(validateInput)) {
        input.target.style.border = "1px solid #f00";
    } else {
        input.target.style.border = "none";
    }
}

function calculate() {
    fileSize = sizeInput.value;
    downloadSpeed = speedInput.value;
    if (!fileSize.replace(validatePattern) || !downloadSpeed.replace(validatePattern)) {
        return
    } else {
        estimateTime = fileSize / downloadSpeed
        if (estimateTime > 60) {
            estimateTime = (estimateTime / 60).toFixed(2);
            if (estimateTime > 60) {
                estimateTime = (estimateTime / 60).toFixed(2) + "h";
            } else {
                estimateTime += "min";
            }
        } else {
            if (estimateTime < 1) {
                estimateTime = "< 1s";
            } else {
                estimateTime += "s";
            }
        }
        displayEstimatedTime();
    }
}

function displayEstimatedTime() {
    header.innerHTML = 'YOUR ESTIMATED <br> DOWNLOAD TIME IS:'
    submitButton.innerHTML = 'BACK';
    submitButton.onclick = getBack;
    inputsWrapper.style.display = "none";
    estimateTime__text.innerHTML = estimateTime;
    estimateTime__text.style.display = 'block';
}

function getBack() {
    estimateTime__text.style.display = 'none';
    inputsWrapper.style.display = "block";
    submitButton.innerHTML = 'CALCULATE';
    header.innerHTML = 'CALCULATE ESTIMATED <br> DOWNLOAD TIME';
    submitButton.onclick = calculate;
}