// Get DOM elements
const menu = document.getElementById('menuOverlay');
const openBtn = document.getElementById('hamburgerBtn');
const closeBtn = document.getElementById('closeBtn');
const profileBtn = document.getElementById('profileImage');
// Open menu
openBtn.addEventListener('click', () => {
  menu.classList.remove('hidden');
});

// Close menu
closeBtn.addEventListener('click', () => {
  menu.classList.add('hidden');
});

profileBtn.addEventListener('click', () => {
    //change the image to other image 
    if (profileBtn.src.includes('./images/profile.webp')) {
        profileBtn.src = './images/profile2.jpg';
    } else {
        profileBtn.src = './images/profile2.jpg';
    }
});

const hamburgerBtn = document.getElementById('hamburgerBtn');
const menuOverlay = document.getElementById('menuOverlay');
const navbar = document.getElementById('navbar');

hamburgerBtn.addEventListener('click', () => {
  menuOverlay.classList.remove('hidden');
  navbar.classList.add('hidden');
});

closeBtn.addEventListener('click', () => {
  menuOverlay.classList.add('hidden');
  navbar.classList.remove('hidden');
});

  document.addEventListener('DOMContentLoaded', function() {
    const contactBtn = document.querySelector('#menuOverlay button.mt-10');
    const contactForm = document.getElementById('contact');
    const closeBtn = document.getElementById('closeBtn');
    const menuOverlay = document.getElementById('menuOverlay');

    if (contactBtn && contactForm) {
      contactBtn.addEventListener('click', function() {
        contactForm.classList.remove('hidden');
        menuOverlay.classList.add('hidden');
      });
    }

    // Optional: Hide contact form when overlay is closed
    if (closeBtn && contactForm) {
      closeBtn.addEventListener('click', function() {
        contactForm.classList.add('hidden');
      });
    }
  });