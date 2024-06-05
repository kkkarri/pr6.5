function calculateSum() {
    const number1 = parseFloat(document.getElementById('number1').value);
    const number2 = parseFloat(document.getElementById('number2').value);

    if (!isNaN(number1) && !isNaN(number2)) {
        const sum = number1 + number2;
        document.getElementById('result').innerText = `Сума: ${sum}`;
        document.getElementById('resultArea').style.display = 'block';
    } else {
        alert('Будь ласка, введіть обидва числа.');
    }
}
