const mobileMenu = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav-list');

mobileMenu.addEventListener('click', () => {
    navList.classList.toggle('active');
});

const carouselContainer = document.querySelector('.carousel-container');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;
const imageWidth = 250; 
const margin = 10; 
const imagesToShow = 3; 
const totalImages = document.querySelectorAll('.carousel-container img').length;

// Função para atualizar a posição do carrossel
function updateCarousel() {
    const offset = currentIndex * -((imageWidth + margin) * imagesToShow); 
    carouselContainer.style.transform = `translateX(${offset}px)`;
}

prevBtn.addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = Math.ceil(totalImages / imagesToShow) - 1; 
    }
    updateCarousel();
});

nextBtn.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex >= Math.ceil(totalImages / imagesToShow)) {
        currentIndex = 0; // Volta para o primeiro conjunto
    }
    updateCarousel();
});

updateCarousel();

document.querySelectorAll('.carousel-container img').forEach(img => {
    img.addEventListener('click', function() {
        const movieId = this.getAttribute('data-id');
        window.location.href = `movies-details.html?id=${movieId}`;
    });
});

function showAlert(message) {
    alert(message);
}

//links
const links = document.querySelectorAll('nav a');

links.forEach(link => {
    link.addEventListener('click', (event) => {
        const href = link.getAttribute('href');

        if (href === "movies.details.html") {
            event.preventDefault(); // Impede a navegação padrão
            const message = "To see the movie info and reviews, click on any movie in the 'Highlights' section on the home page.";
            showAlert(message);
        } else if (href === "#") { 
            event.preventDefault(); // Impede a navegação padrão
            const message = "To see the movie info and reviews, click on any movie in the 'Highlights' section on the home page.";
            showAlert(message);
        }
    });
});

