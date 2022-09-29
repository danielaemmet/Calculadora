// Variables
const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const resultadoInput = document.getElementById("result");


const btnSumar = document.getElementById("suma");
const btnRestar = document.getElementById("resta");
const btnMulti = document.getElementById("multi");
const btnDivi = document.getElementById("div");

const sum = (a, b) => a + b;
const res = (a, b) => a - b;
const mul = (a, b) => a * b;
const div = (a, b) => a / b;

btnSumar.addEventListener("click", () => {
    const num1 = parseInt(num1Input.value);
    const num2 = parseInt(num2Input.value);
    resultadoInput.value = sum(num1, num2);
});

btnRestar.addEventListener("click", () => {
    const num1 = parseInt(num1Input.value);
    const num2 = parseInt(num2Input.value);
    resultadoInput.value = res(num1, num2);
});

btnMulti.addEventListener("click", () => {
    const num1 = parseInt(num1Input.value);
    const num2 = parseInt(num2Input.value);
    resultadoInput.value = mul(num1, num2);
});

btnDivi.addEventListener("click", () => {
    const num1 = parseInt(num2Input.value);
    const num2 = parseInt(num2Input.value);
    resultadoInput.value = div(num1, num2);
});

btnSumar.addEventListener("click", sum);
btnRestar.addEventListener("click", res);
btnMulti.addEventListener("click", mul);
btnDivi.addEventListener("click", div);
