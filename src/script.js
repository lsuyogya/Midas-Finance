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
