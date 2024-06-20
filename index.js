document.addEventListener("DOMContentLoaded", function() {
    const dropdowns = document.querySelectorAll('.nav-items');
    
    // Dropwodn toggle functionality
    dropdowns.forEach(dropdown => {
        const navLink = dropdown.querySelector('.dropdown-folks');
        const dropdownMenu = dropdown.querySelector('.dropdown-options');

        navLink.addEventListener('click', function(event) {
            event.preventDefault();
            dropdownMenu.classList.toggle('dropdown-show');
        });
    });


    // close dropdown when clicking outside
    document.addEventListener('click', function(event) {
        dropdowns.forEach(dropdown => {
            if (!dropdown.contains(event.target)) {
                const dropdownMenu = dropdown.querySelector('.dropdown-options');
                dropdownMenu.classList.remove('dropdown-show');
            }
        });
    });
});

let hamburger = document.querySelector('#openHam');
let navLinks = document.querySelector('#navlinks')
let btn = document.querySelector('#btns');
let closeHam = document.querySelector('#closeHam');

const hamburgerEvent = (navigation, close, open, btns) => {
    navLinks.style.display = navigation;
    closeHam.style.display = close;
    hamburger.style.display = open;
    btn.style.display = btns;
}

hamburger.addEventListener('click', () => hamburgerEvent("block", 'block', 'none', 'block'));
closeHam.addEventListener('click', () => hamburgerEvent("none", 'none', 'block', "none"));

