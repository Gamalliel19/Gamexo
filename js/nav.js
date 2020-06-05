"use strict";
/*
-- Navigation
*/
const mobileNavMenu = document.getElementById("mobile-nav-menu");
const mobileNavLinks = document.getElementById("mobile-nav-links");

const openMenu = () => {
  //Show menu
  mobileNavMenu.classList.remove("display-none");
  //Add puff-in Remove puff-out
  mobileNavLinks.classList.add("puff-in-center");
  mobileNavLinks.classList.remove("puff-out-center");
  //Remove scroll from body
  document.body.style.overflow = "hidden";
};

const closeMenu = () => {
  //Remove puff-in Add puff-out
  mobileNavLinks.classList.add("puff-out-center");
  mobileNavLinks.classList.remove("puff-in-center");
  //Animate First remove after animation
  setTimeout(function() {
    mobileNavMenu.classList.add("display-none");
    //Add scroll to body
    document.body.style.overflow = "auto";
  }, 500);
};
