"use strict";
const dropDownLinks = document.querySelectorAll(".dropdown .nav-link");

const toggleArrows = () => {
  dropDownLinks.forEach((link) => {
    let arrowIcon = link.querySelector(".arrow-icon img");
    link.addEventListener("click", () => {
      if (arrowIcon.getAttribute("src") == "./images/icon-arrow-down.svg") {
        arrowIcon.setAttribute("src", "./images/icon-arrow-up.svg");
      } else {
        arrowIcon.setAttribute("src", "./images/icon-arrow-down.svg");
      }
    });
  });
};

toggleArrows();
