const input = document.querySelector("input");
let fizzResult = "";

input.addEventListener("input", updateValue);

function updateValue(e) {
    let userInput = e.target.value;
    let fizz = false;
    let buzz = false;
    let fizzBuzz = false;

    if (userInput % 3 == 0) {
        fizz = true;
    }
    if (userInput % 5 == 0) {
        buzz = true;
    }
    if (fizz == true && buzz == true) {
        fizzResult = "Fizz Buzz!"
    } else if (fizz == true) {
        fizzResult = "Fizz..."
    } else if (buzz == true) {
        fizzResult = "...Buzz"
    } else {
        fizzResult = "..."
    }
    document.getElementsByClassName("result").textContent = "test";
    console.log(fizzResult);
}