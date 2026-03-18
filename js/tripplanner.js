const API_BASE = '';

async function setupTripCalculator() {
    const calculateBtn = document.getElementById('calculate-btn');
    const resetBtn = document.getElementById('reset-btn');

    if (!calculateBtn || !resetBtn) return;

    calculateBtn.addEventListener('click', calculateBudget);
    resetBtn.addEventListener('click', resetCalculator);
}

async function calculateBudget() {
    const days = parseInt(document.getElementById('days')?.value) || 0;
    const hotelCost = parseInt(document.getElementById('hotel-cost')?.value) || 0;
    const foodCost = parseInt(document.getElementById('food-cost')?.value) || 0;
    const travelCost = parseInt(document.getElementById('travel-cost')?.value) || 0;

    if (days < 1) {
        alert('Please enter at least 1 day for your trip.');
        return;
    }

    // Try API first, fallback to local calculation
    try {
        const response = await fetch(`${API_BASE}/api/calculate-trip`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                days: days,
                hotelCostPerDay: hotelCost,
                foodCostPerDay: foodCost,
                travelCost: travelCost
            })
        });
        
        if (response.ok) {
            const result = await response.json();
            displayResults(result);
        } else {
            throw new Error('API error');
        }
    } catch (error) {
        // Fallback to local calculation
        const accommodationTotal = days * hotelCost;
        const foodTotal = days * foodCost;
        const total = accommodationTotal + foodTotal + travelCost;
        
        displayResults({
            accommodationTotal,
            foodTotal,
            travelCost,
            total
        });
    }
}

function displayResults(result) {
    document.getElementById('accommodation-total').textContent = formatCurrency(result.accommodationTotal);
    document.getElementById('food-total').textContent = formatCurrency(result.foodTotal);
    document.getElementById('travel-total').textContent = formatCurrency(result.travelCost);
    document.getElementById('grand-total').textContent = formatCurrency(result.total);

    const resultsDisplay = document.getElementById('results-display');
    resultsDisplay.classList.add('show');
    
    animateValue('grand-total', 0, result.total, 1000);
}

function resetCalculator() {
    document.getElementById('days').value = '';
    document.getElementById('hotel-cost').value = '';
    document.getElementById('food-cost').value = '';
    document.getElementById('travel-cost').value = '';

    const resultsDisplay = document.getElementById('results-display');
    resultsDisplay.classList.remove('show');
}

function formatCurrency(amount) {
    return 'Rs ' + amount.toLocaleString('en-IN');
}

function animateValue(id, start, end, duration) {
    const obj = document.getElementById(id);
    if (!obj) return;
    
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const current = Math.floor(progress * (end - start) + start);
        obj.textContent = formatCurrency(current);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

document.addEventListener('DOMContentLoaded', setupTripCalculator);
