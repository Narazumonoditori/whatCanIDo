'use strict';

{
  //.c-hamburger-btn.click();
  const body = document.querySelector('body');
  const hamburgerBtn = document.querySelector('.c-btn-hamburger');
  hamburgerBtn.addEventListener('click', () => {
    hamburgerBtn.parentNode.classList.toggle('is-clicked');
    body.classList.toggle('is-clicked');
  });

  //.c-btn-accordion.click();
  const dts = document.querySelectorAll('.p-accordion dt');
  dts.forEach((dt) => {
    dt.addEventListener('click', () => {
      dt.parentNode.classList.toggle('is-clicked');

      dts.forEach((el) => {
        if (el !== dt) {
          el.parentNode.classList.remove('is-clicked');
        }
      });
    });
  });
}