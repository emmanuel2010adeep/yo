const navLinks = document.querySelectorAll('header nav a');
const logoLink = document.querySelector('.logo');
const sections = document.querySelectorAll('section');
const menuIcon = document.querySelector('#menu-icon');
const navBar = document.querySelector('header nav');

menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('bx-x');
  navBar.classList.toggle('active');
});

const activePage = () => {
  const header = document.querySelector('header');
  const bars = document.querySelector('.bars-animation');

  navLinks.forEach(link => link.classList.remove('active'));
  header.classList.remove('active');
  setTimeout(() => header.classList.add('active'), 1100);
  bars.classList.remove('active');
  setTimeout(() => bars.classList.add('active'), 1100);
  sections.forEach(link => link.classList.remove('active'));
  menuIcon.classList.remove('bx-x');
  navBar.classList.remove('active');
};

navLinks.forEach((link, idx) => {
  link.addEventListener('click', () => {
    if (!link.classList.contains('active')) {
      activePage();
      link.classList.add('active');
      setTimeout(() => {
        sections[idx].classList.add('active');
      }, 1100);
    }
  });
});

logoLink.addEventListener('click', () => {
  if (!navLinks[0].classList.contains('active')) {
    activePage();
    navLinks[0].classList.add('active');
    setTimeout(() => {
      sections[0].classList.add('active');
    }, 1100);
  }
});

function sendMessage() {
  alert("This function is currently unavailable, please contact through phone/WhatsApp.");
  document.querySelector('#contactform').reset();
}
