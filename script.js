const header = document.getElementById('header-frame'); 
const logo = document.querySelector('.headerlogo');

let isScrolled = false; 

window.addEventListener('scroll', () => {
  if (window.scrollY > 0 && !isScrolled) {
    header.classList.add('scrolled');
    logo.src = 'Media/AM logo.png'; 
    isScrolled = true;
  } else if (window.scrollY === 0 && isScrolled) {
    header.classList.remove('scrolled');
    logo.src = 'Media/Astrid-and-Miyu-Logo white.png'; 
    isScrolled = false;
  }
});