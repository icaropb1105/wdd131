// getdates.js

// Get the current year
const currentYear = new Date().getFullYear();
document.getElementById('current-year').textContent = currentYear;

// Get the last modified date
const lastModifiedDate = document.lastModified;
document.getElementById('last-modified-date').textContent = lastModifiedDate;

document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.getElementById("hamburger");
    const nav = document.querySelector("nav");

    if (hamburger && nav) {
        hamburger.addEventListener("click", function() {
            nav.classList.toggle("active");
            if (nav.classList.contains("active")) {
                hamburger.innerHTML = '&times;'; 
            } else {
                hamburger.innerHTML = '&#9776;'; 
            }
        });
    } else {
        console.error("Error");
    }
});

const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
      templeName: "Fortaleza Brazil",
      location: "Fortaleza Brazil",
      dedicated: "2019, June, 2",
      area: 36000,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/fortaleza-brazil/400x250/1-Fortaleza-Temple-Photo-2233938.jpg"
    },
    {
      templeName: "Rio de Janeiro Brazil",
      location: "Rio de Janeiro Brazil",
      dedicated: "2022, May, 8",
      area: 29966,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rio-de-janeiro-brazil/400x250/5-68078bab26944e4757ed6075968cc4a895d3a364.jpeg"
    },
    {
      templeName: "São Paulo Brazil",
      location: "São Paulo Brazil",
      dedicated: "1978, October, 30",
      area: 59246,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/sao-paulo-brazil/400x250/sao-paulo-brazil-temple-lds-187030-wallpaper.jpg"
    },
  ];

// Get references to HTML elements
const picturesDiv = document.querySelector('.pictures');
const navLinks = document.querySelectorAll('nav a');
const titleElement = document.querySelector('.title1 h1'); 

// Function to display temples
function displayTemples(templeArray) {
  picturesDiv.innerHTML = ''; // Clear the current display

  templeArray.forEach((temple) => {
    const figure = document.createElement('figure');

    const img = document.createElement('img');
    img.src = temple.imageUrl;
    img.alt = temple.templeName;
    img.loading = 'lazy'; // Enable native lazy loading

    // Create the figcaption element
    const figcaption = document.createElement('figcaption');

    const templeName = document.createElement('h3');
    templeName.textContent = temple.templeName;

    const location = document.createElement('span');
    location.textContent = `Location: ${temple.location}`;
    location.classList.add('location');

    const dedicated = document.createElement('span');
    dedicated.textContent = `Dedicated: ${temple.dedicated}`;
    dedicated.classList.add('dedicated'); 

    const area = document.createElement('span');
    area.textContent = `Area: ${temple.area} sq.ft.`;
    area.classList.add('size'); 

    figcaption.appendChild(templeName);
    figcaption.appendChild(location);
    figcaption.appendChild(dedicated);
    figcaption.appendChild(area);

    figure.appendChild(img);
    figure.appendChild(figcaption);

    picturesDiv.appendChild(figure);
  });
}


// Function to filter temples
function filterTemples(criteria) {
  let filteredTemples = temples;
  let title = 'Home'; 

  switch (criteria) {
    case 'old':
      filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
      title = 'Old';  
      break;
    case 'new':
      filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() >= 2000);
      title = 'New';  
      break;
    case 'large':
      filteredTemples = temples.filter(temple => temple.area > 90000);
      title = 'Large'; 
      break;
    case 'small':
      filteredTemples = temples.filter(temple => temple.area < 10000);
      title = 'Small';  
      break;
    default:
      filteredTemples = temples; 
      title = 'Home'; 
  }

  titleElement.textContent = title; 
  displayTemples(filteredTemples);
}


// Event listeners for navigation
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const criteria = e.target.textContent.toLowerCase();
    filterTemples(criteria);
  });
});

// Initial display of all temples (Home view)
document.addEventListener('DOMContentLoaded', () => {
  displayTemples(temples);
});

