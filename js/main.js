"use strict";
/*
-- Animations Init
*/
AOS.init({ once: true });

/*
-- Smooth Scroll Init
*/
let scroll = new SmoothScroll('a[href*="#"]');

/*
-- Active Link
*/
const links = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section");

function changeLinkState() {
  let index = sections.length;

  while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

  links.forEach(link => link.classList.remove("active"));
  links[index].classList.add("active");
}

changeLinkState();
window.addEventListener("scroll", changeLinkState);
