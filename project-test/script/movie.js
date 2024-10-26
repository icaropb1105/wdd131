// Carousel Functionality
const carousel = document.getElementById('movie-carousel');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');

let scrollAmount = 0;

nextBtn.addEventListener('click', () => {
    carousel.scrollBy({ left: 220, behavior: 'smooth' });
    scrollAmount += 220;
    checkButtons();
});

prevBtn.addEventListener('click', () => {
    carousel.scrollBy({ left: -220, behavior: 'smooth' });
    scrollAmount -= 220;
    checkButtons();
});

// Disable prev button if at the start
function checkButtons() {
    if (scrollAmount <= 0) {
        prevBtn.disabled = true;
    } else {
        prevBtn.disabled = false;
    }
}

// Search Validation
const searchBtn = document.getElementById('search-btn');
const searchInput = document.getElementById('search-input');
const errorMessage = document.getElementById('error-message');

searchBtn.addEventListener('click', () => {
    if (searchInput.value.trim() === "") {
        errorMessage.style.display = 'block';
    } else {
        errorMessage.style.display = 'none';
        alert(`Searching for "${searchInput.value}"...`);
    }
});
