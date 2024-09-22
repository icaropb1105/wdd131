// getdates.js

// Get the current year
const currentYear = new Date().getFullYear();
document.getElementById('current-year').textContent = currentYear;

// Get the last modified date
const lastModifiedDate = document.lastModified;
document.getElementById('last-modified-date').textContent = lastModifiedDate;
