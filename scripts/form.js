// Get the current year
const currentYear = new Date().getFullYear();
document.getElementById('current-year').textContent = currentYear;

// Get the last modified date
const lastModifiedDate = document.lastModified;
document.getElementById('last-modified-date').textContent = lastModifiedDate;

// Array of product objects
const products = [
    { id: 'product1', name: 'Product 1' },
    { id: 'product2', name: 'Product 2' },
    { id: 'product3', name: 'Product 3' },
    { id: 'product4', name: 'Product 4' },
    { id: 'product5', name: 'Product 5' }
];

// Populate product options dynamically
const productSelect = document.getElementById('productName');
products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.id;
    option.textContent = product.name;
    productSelect.appendChild(option);
});

// Track review submissions using localStorage
window.addEventListener('load', () => {
    const reviewCount = localStorage.getItem('reviewCount') || 0;
    localStorage.setItem('reviewCount', parseInt(reviewCount) + 1);
});
