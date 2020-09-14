'use strict';

// Strip id from href. This function removes #
function getHash(url) {
  var hashPos = url.lastIndexOf('#');
  return url.substring(hashPos + 1);
}

var HIDDEN_CLASS = 'u-display-none';
var ACTIVE_CLASS = 'is-active';
var links = document.querySelectorAll('.js-tab-menu-link');
var contents = document.querySelectorAll('.js-tab-menu-content');

function toggleMenu(event) {
  event.preventDefault();
  links.forEach(function (link) {
    link.classList.remove(ACTIVE_CLASS);
  });
  this.classList.add(ACTIVE_CLASS);
  contents.forEach(function (content) {
    content.classList.add(HIDDEN_CLASS);
  });
  var linkHref = getHash(this.getAttribute('href'));
  var contentId = document.getElementById(linkHref);
  contentId.classList.remove(HIDDEN_CLASS);
}

function hideAllContents() {
  links.forEach(function (link) {
    link.classList.remove(ACTIVE_CLASS);
  });
  links[0].classList.add(ACTIVE_CLASS);
  contents.forEach(function (content) {
    content.classList.add(HIDDEN_CLASS);
  });
  contents[0].classList.remove(HIDDEN_CLASS);
}

if (links[0] && contents[0]) {
  hideAllContents();
  links.forEach(function (link) {
    link.addEventListener('click', toggleMenu);
  });
}
