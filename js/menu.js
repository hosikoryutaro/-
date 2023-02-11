"use strict";

document.querySelector(".nav-wrapper").addEventListener("click", function () {
  document.querySelector(".menu").classList.toggle("is-active");
});

window.onload = function () {
  const nav = document.getElementById("nav-wrapper");
  const hamburger = document.getElementById("js-hamburger");
  const blackBg = document.getElementById("js-black-bg");
  const navi = document.querySelector("nav.navi");
  navi.querySelectorAll("li").forEach((li) =>
    li.addEventListener("click", (e) => {
      e.stopPropagation();
      nav.classList.toggle("open");
      document.querySelector(".menu").classList.toggle("is-active");
    })
  );

  hamburger.addEventListener("click", function () {
    nav.classList.toggle("open");
  });
};
