document.getElementById('convert').addEventListener('click', function() {
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;
    const resultElement = document.getElementById('result');

    const exchangeRates = {
        USD: { EUR: 0.85, GBP: 0.75 },
        EUR: { USD: 1.18, GBP: 0.88 },
        GBP: { USD: 1.34, EUR: 1.14 }
    };

    if (amount === '' || isNaN(amount)) {
        resultElement.textContent = 'Please enter a valid amount';
        return;
    }

    const rate = exchangeRates[fromCurrency][toCurrency];
    const convertedAmount = amount * rate;
    resultElement.textContent = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
});
