
// JavaScript for counting
const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
  counter.innerText = '0';

  const updateCounter = () => {
    const targetValue = +counter.getAttribute('data-target');
    const startingValue = +counter.innerText;

    const increment = targetValue / 100;

    if (startingValue < targetValue) {
      counter.innerText = `${Math.ceil(startingValue + increment)}`;
      setTimeout(updateCounter, 30);
    } else {
      counter.innerText = targetValue;
    }
  };

  updateCounter();
});



// Function to update navbar background color based on scroll position
function updateNavbarBackground() {
  var scrolled = window.scrollY;
  var navbar = document.querySelector('.navbar');

  // Check if the user has scrolled past the navbar
  if (scrolled > navbar.offsetTop) {
    navbar.classList.add('solid'); // Add solid class to change background color
  } else {
    navbar.classList.remove('solid'); // Remove solid class to revert to original background color
  }
}

// Call the function on page load and scroll
window.addEventListener('load', updateNavbarBackground);
window.addEventListener('scroll', updateNavbarBackground);


// Function to update navbar background color and logo based on scroll position
function updateNavbar() {
  var scrolled = window.scrollY;
  var navbar = document.querySelector('.navbar');
  var logo = document.querySelector('.navbar-brand img');

  // Get the current page URL
  var currentPage = window.location.pathname;

  // Check if the current page is the homepage
  var isHomepage = currentPage === '/index.html' || currentPage === '/'; // Add any additional homepage URLs as needed

  // Check if the user has scrolled past the navbar
  if (isHomepage) {
    // If it's the homepage, always use the white logo
    logo.src = 'assets/img/Logo-white.png';
  } else {
    // For other pages, change the logo and background color based on scroll
    if (scrolled > navbar.offsetTop) {
      navbar.classList.add('solid'); // Add solid class to change background color
      // Change the logo image source
      logo.src = 'assets/img/Logo-white.png';
    } else {
      navbar.classList.remove('solid'); // Remove solid class to revert to original background color
      // Change the logo image source back to the original
      logo.src = 'assets/img/Logo-black.png';
    }
  }
}

// Call the function on page load and scroll
window.addEventListener('load', updateNavbar);
window.addEventListener('scroll', updateNavbar);



// Function to update navbar background color and link colors based on scroll position and page
function updateNavbarLinks() {
  console.log('Update navbar function is called.');
  var scrolled = window.scrollY;
  var navbar = document.querySelector('.navbar');
  var links = document.querySelectorAll('.navbar-nav .nav-link');
  var icons = document.querySelectorAll('.navbar-nav .nav-link i'); 

  // Get the current page URL
  var currentPage = window.location.pathname;

  // Define the URLs that represent the homepage
  var homepageURLs = ['/index.html', '/']; // Add any additional homepage URLs as needed

  // Check if the current page is the homepage
  var isHomepage = homepageURLs.includes(currentPage);

  // Change link colors based on whether the current page is the homepage
  if (isHomepage) {
    // For the homepage, set link colors to white
    links.forEach(function(link) {
      link.style.color = 'white';
    });
  } else {
    // For pages other than the homepage, set link colors to black initially
    links.forEach(function(link) {
      link.style.color = 'black';
    });

    // If scrolled past the navbar, change link colors to white
    if (scrolled > navbar.offsetTop) {
      links.forEach(function(link) {
        link.style.color = 'white';
      });
    }
  }

  // Change navbar background color based on scroll position
  if (scrolled > navbar.offsetTop) {
    navbar.classList.add('solid'); // Add solid class to change background color
  } else {
    navbar.classList.remove('solid'); // Remove solid class to revert to original background color
  }
}

// Call the function on page load and scroll
window.addEventListener('load', updateNavbarLinks);
window.addEventListener('scroll', updateNavbarLinks);
