
// For closing the menu automatically when a link in the navbar is clicked
// Select all nav links
const navLinks = document.querySelectorAll('.nav-link');
const navbarCollapse = document.querySelector('.navbar-collapse');

// Add click event listener to every link in the navbar
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // If the menu is currenlty expanded, close it when a link is clicked
        if (navbarCollapse.classList.contains('show')) {
            // create new instance of Collapse component and do toggle
            new bootstrap.Collapse(navbarCollapse).toggle();
        }
    });
});
