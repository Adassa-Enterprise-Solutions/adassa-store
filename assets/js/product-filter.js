const checkboxes = document.querySelectorAll('.category-filter');
const clearButton = document.getElementById('clear-filters');

// Load saved filters from localStorage
document.addEventListener('DOMContentLoaded', () => {
    const savedCategories = JSON.parse(localStorage.getItem('selectedCategories')) || [];
    checkboxes.forEach(cb => {
        if (savedCategories.includes(cb.value)) {
            cb.checked = true;
        }
    });
    filterProducts();
});

// Save filter state on change
checkboxes.forEach(cb => {
    cb.addEventListener('change', () => {
        saveFilters();
        filterProducts();
    });
});

clearButton.addEventListener('click', () => {
    checkboxes.forEach(cb => cb.checked = false);
    saveFilters();
    filterProducts();
});

function saveFilters() {
    const selectedCategories = Array.from(checkboxes)
            .filter(cb => cb.checked)
            .map(cb => cb.value);
    localStorage.setItem('selectedCategories', JSON.stringify(selectedCategories));
}

function filterProducts() {
    const selectedCategories = Array.from(checkboxes)
            .filter(cb => cb.checked)
            .map(cb => cb.value);

    const products = document.querySelectorAll('.product-card');

    products.forEach(product => {
        const category = product.getAttribute('data-category');
        if (selectedCategories.length === 0 || selectedCategories.includes(category)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}