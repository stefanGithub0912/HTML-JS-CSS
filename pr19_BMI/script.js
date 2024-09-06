function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // Convert cm to meters

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        document.getElementById('result').innerText = 'Please enter valid values';
        return;
    }

    const bmi = weight / (height * height);
    let classification = '';

    if (bmi < 18.5) {
        classification = 'Underweight';
    } else if (bmi < 24.9) {
        classification = 'Normal weight';
    } else if (bmi < 29.9) {
        classification = 'Overweight';
    } else {
        classification = 'Obese';
    }

    document.getElementById('result').innerText = `Your BMI is ${bmi.toFixed(2)} (${classification})`;
}
