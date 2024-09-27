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
