//HEADER

const burger = document.getElementById('burger');
const closeBurger = document.getElementById('close-burger');
const mobileMenu = document.getElementById('mobile-menu');
const header = document.getElementById('header');
const body = document.body;
let lastScrollTop = 0;

function updateHeaderHeight() {
  const headerHeight = header.offsetHeight;
  body.style.setProperty('--header-height', `${headerHeight}px`);
}

burger.addEventListener('click', () => {
  mobileMenu.classList.remove('-translate-x-full');
});

closeBurger.addEventListener('click', () => {
  mobileMenu.classList.add('-translate-x-full');
});

function toggleDropdown(id) {
  const dropdown = document.getElementById(id);
  const chevron = dropdown.previousElementSibling.querySelector('svg');
  dropdown.classList.toggle('hidden');
  chevron.classList.toggle('rotate-180');
}

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const viewportHeight = window.innerHeight;

  if (scrollTop > lastScrollTop) {
    header.style.transform = 'translateY(-100%)';
  } else {
    header.style.transform = 'translateY(0)';
  }

  if (scrollTop > viewportHeight * 0.4) {
    header.classList.add('shadow-md');
  } else {
    header.classList.remove('shadow-md');
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

window.addEventListener('resize', updateHeaderHeight);
window.addEventListener('load', updateHeaderHeight);
document.addEventListener('DOMContentLoaded', updateHeaderHeight);
//HEADER END

//Slider
document.addEventListener('DOMContentLoaded', function () {
  new Splide('#logo-carousel', {
    type: 'loop',
    perPage: 5,
    autoplay: true,
    interval: 3000,
    arrows: false,
    pagination: false,
    autoWidth: true,
    perMove: 1,
    gap: '2rem',
  }).mount();
});
document.addEventListener('DOMContentLoaded', function () {
  new Splide('#services-carousel', {
    type: 'loop',
    perPage: 3,
    autoplay: true,
    interval: 3000,
    arrows: true,
    pagination: false,
    autoWidth: true,
    perMove: 1,
    gap: '2rem',
  }).mount();
});
document.addEventListener('DOMContentLoaded', function () {
  new Splide('#testimonial-carousel', {
    type: 'loop',
    perPage: 3,
    autoplay: true,
    interval: 3000,
    arrows: true,
    pagination: false,
    autoWidth: false,
    perMove: 1,
    // gap: '2rem',
    breakpoints: {
      1024: {
        perPage: 2,
      },
      768: {
        perPage: 1,
      },
    },
  }).mount();
});

//Feather icons replacement code
document.addEventListener('DOMContentLoaded', () => {
  let retryCount = 0;
  const maxRetries = 10;
  const retryInterval = 1000; // 1 second

  const tryFeatherReplace = () => {
    try {
      feather.replace();
      console.log('Feather icons replaced successfully!');
      clearInterval(retryTimer); // Stop retrying on success
    } catch (error) {
      retryCount++;
      console.warn(`Attempt ${retryCount} failed: ${error.message}`);
      if (retryCount >= maxRetries) {
        clearInterval(retryTimer); // Stop retrying after max attempts
        console.error('Failed to replace Feather icons after 10 attempts.');
      }
    }
  };

  const retryTimer = setInterval(tryFeatherReplace, retryInterval);
  tryFeatherReplace(); // Try once immediately
});
