"use strict";

// -----------footer data------------

const date = document.querySelector(".footer-date");
date.textContent = new Date().getFullYear();

// ----------------show menu------------------

const burgerMenu = document.querySelector(".burger-menu");
const navMenu = document.querySelector(".nav-menu");
const menuContainer = document.querySelector(".menu-container");

burgerMenu.addEventListener("click", () => {
  const navMenuHeight = navMenu.getBoundingClientRect().height;
  const menuContainerHeight = menuContainer.getBoundingClientRect().height;

  if (menuContainerHeight === 0) {
    menuContainer.style.height = `${navMenuHeight}px`;
  } else {
    menuContainer.style.height = 0;
  }
});

// ---------------fixed menu------------------

const navbar = document.querySelector(".nav");
const homeBtn = document.querySelector(".home-btn");

window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;
  const navbarHeight = navbar.getBoundingClientRect().height;

  if (scrollHeight > navbarHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }

  if (scrollHeight > 500) {
    homeBtn.classList.add("show-btn");
  } else {
    homeBtn.classList.remove("show-btn");
  }
});

// ------------smooth scroll-----------------

const scrollMenuLinks = document.querySelectorAll(".nav-menu-link");

scrollMenuLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);

    const navbarHeight = navbar.getBoundingClientRect().height;
    const containerHeight = menuContainer.getBoundingClientRect().height;
    const fixedNavbar = navbar.classList.contains("fixed-nav");
    let position = element.offsetTop - navbarHeight;

    if (!fixedNavbar) {
      position = position - navbarHeight;
    }
    if (navbarHeight > 82) {
      position = position + containerHeight;
    }

    window.scrollTo({
      left: 0,
      top: position,
    });

    menuContainer.style.height = 0;
    // console.log(id);
  });
});
