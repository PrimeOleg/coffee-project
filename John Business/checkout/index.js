// Get DOM elements
const drinkSelect = document.getElementById('drink-select');
const milkSelects = [...document.querySelectorAll('#milk-select')];
const toppingSelects = [...document.querySelectorAll('#topping-select')];
const calculateBtn = document.getElementById('calculate-btn');
const totalPriceDisplay = document.getElementById('total-price');

// Calculate total price
calculateBtn.addEventListener('click', () => {
    let totalPrice = parseFloat(drinkSelect.value);

    // Add selected milks
    milkSelects.forEach(select => {
        totalPrice += parseFloat(select.value);
    });

    // Add selected toppings
    toppingSelects.forEach(select => {
        totalPrice += parseFloat(select.value);
    });

    // Display the total price
    totalPriceDisplay.textContent = totalPrice.toFixed(2);
});
