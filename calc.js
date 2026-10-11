/*jslint browser */

"use strict";

// Допустимое количество: целое число от 1 (без букв, пробелов, минуса, точки)
const QUANTITY_PATTERN = /^[1-9][0-9]*$/;

function showResult(text, isError) {
    const result = document.getElementById("result");
    result.textContent = text;
    result.className = (
        isError
        ? "result error"
        : "result ok"
    );
}

function calculate() {
    const quantityText = document.getElementById("quantity").value.trim();
    const productSelect = document.getElementById("product");

    if (!QUANTITY_PATTERN.test(quantityText)) {
        showResult(
            "Ошибка: введите количество — целое число больше нуля, " +
            "только цифры.",
            true
        );
        return;
    }

    const price = parseInt(productSelect.value, 10);
    const quantity = parseInt(quantityText, 10);
    const total = price * quantity;

    showResult("Стоимость заказа: " + total + " руб.", false);
}

document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("calc-button");
    button.addEventListener("click", calculate);
});n