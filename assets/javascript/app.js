//button events


//adding
addBtn = document.getElementById("addBtn");
addNumbers = function () {


    number1 = document.getElementById("number1");
    number2 = document.getElementById("number2");
    // console.log(number1, number2)

    sum = parseInt(number1.value) + parseInt(number2.value);

    result = document.getElementById("displayResults");
    result.innerText = sum;
}


addBtn.addEventListener("click", addNumbers);

//subtract
subtractBtn = document.getElementById("subtractBtn");
subtractNumbers = function () {


    number1 = document.getElementById("number1");
    number2 = document.getElementById("number2");
    // console.log(number1, number2)

    difference = parseInt(number1.value) - parseInt(number2.value);

    result = document.getElementById("displayResults");
    result.innerText = difference;
}


subtractBtn.addEventListener("click", subtractNumbers);


//multiply
multiplyBtn = document.getElementById("multiplyBtn");
multiplyNumbers = function () {


    number1 = document.getElementById("number1");
    number2 = document.getElementById("number2");
    // console.log(number1, number2)

    mult = parseInt(number1.value) * parseInt(number2.value);

    result = document.getElementById("displayResults");
    result.innerText = mult;
}


multiplyBtn.addEventListener("click", multiplyNumbers);


//divide
divideBtn = document.getElementById("divideBtn");
divideNumbers = function () {


    number1 = document.getElementById("number1");
    number2 = document.getElementById("number2");
    // console.log(number1, number2)

    divided = parseInt(number1.value) / parseInt(number2.value);

    result = document.getElementById("displayResults");
    result.innerText = divided;
}

divideBtn.addEventListener("click", divideNumbers);


//clear button
clearBtn = document.getElementById("clearBtn");
clearResults = function clear() {
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
    
    result = document.getElementById("displayResults");
    result.innerText = "";
}

clearBtn.addEventListener("click", clearResults);
