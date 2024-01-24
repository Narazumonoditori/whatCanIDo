'use stirct';

{
  //aside.scroll();
  const html = document.querySelector('html');
  const aside = document.querySelector('#aside');
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if (scrollY) {
      aside.classList.add('is-scrolled');

    } else {
      aside.classList.remove('is-scrolled');
    }
  });

  //aside.click();
  const navBtn = document.querySelector('#aside button');
  navBtn.addEventListener('click', () => {
    aside.classList.toggle('is-clicked');
    html.classList.toggle('is-clicked');
  });

  //#mask.click();
  const mask = document.querySelector('#mask');
  mask.addEventListener('click', () => {
    aside.classList.remove('is-clicked');
    html.classList.remove('is-clicked');
  });
}