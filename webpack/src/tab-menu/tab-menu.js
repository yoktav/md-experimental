import getHash from '../utilities/getHash';

const HIDDEN_CLASS = 'u-display-none';
const ACTIVE_CLASS = 'is-active';

const links = document.querySelectorAll('.js-tab-menu-link');
const contents = document.querySelectorAll('.js-tab-menu-content');

function toggleMenu(event) {
  event.preventDefault();

  links.forEach(link => {
    link.classList.remove(ACTIVE_CLASS);
  });
  this.classList.add(ACTIVE_CLASS);

  contents.forEach(content => {
    content.classList.add(HIDDEN_CLASS);
  });

  const linkHref = getHash(this.getAttribute('href'));
  const contentId = document.getElementById(linkHref);
  contentId.classList.remove(HIDDEN_CLASS);
}

function hideAllContents() {
  links.forEach(link => {
    link.classList.remove(ACTIVE_CLASS);
  });
  links[0].classList.add(ACTIVE_CLASS);

  contents.forEach(content => {
    content.classList.add(HIDDEN_CLASS);
  });
  contents[0].classList.remove(HIDDEN_CLASS);
}

if (links[0] && contents[0]) {
  hideAllContents();

  links.forEach(link => {
    link.addEventListener('click', toggleMenu);
  });
}
