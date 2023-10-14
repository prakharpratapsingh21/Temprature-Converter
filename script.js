document.addEventListener("DOMContentLoaded", function () {
    const temperatureInput = document.getElementById("temperature");
    const unitSelect = document.getElementById("unit");
    const convertButton = document.getElementById("convert");
    const resultDisplay = document.getElementById("result");

    convertButton.addEventListener("click", function () {
        const temperature = parseFloat(temperatureInput.value);
        const unit = unitSelect.value;
        let convertedTemperature;

        if (unit === "celsius") {
            convertedTemperature = (temperature * 9/5) + 32;
            resultDisplay.textContent = `${temperature}°C is equal to ${convertedTemperature.toFixed(2)}°F`;
        } else if (unit === "fahrenheit") {
            convertedTemperature = (temperature - 32) * 5/9;
            resultDisplay.textContent = `${temperature}°F is equal to ${convertedTemperature.toFixed(2)}°C`;
        } else {
            resultDisplay.textContent = "Invalid unit selection";
        }
    });
});
