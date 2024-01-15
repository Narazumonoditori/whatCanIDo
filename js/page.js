'use strict';

{
  //indexBtn.click()
  const indexBtn = document.querySelector('.c-btn-index');
  indexBtn.addEventListener('click', () => {
    indexBtn.parentNode.classList.toggle('is-clicked');
  });

  //indexMask.click()
  const mask = document.querySelector('.p-sub-aside .mask');
  mask.addEventListener('click', () => {
    mask.parentNode.classList.remove('is-clicked');
  });
}

{
  //tabmenus.click()
  function tabMenu(menuItems, tabContents) {
    menuItems.forEach((clickedItem, index) => {
      clickedItem.addEventListener('click', e => {
        e.preventDefault();

        menuItems.forEach((item) => {
          item.classList.remove('is-actived');
        });
        clickedItem.classList.add('is-actived');

        tabContents.forEach((tabContent) => {
          tabContent.classList.remove('is-actived');
        });
        tabContents[index].classList.add('is-actived');
      });
    });
  }

  const menuItems = document.querySelectorAll('#content1 .tab-buttons li a');
  const tabContents = document.querySelectorAll('#content1 .tab-contents > li');
  tabMenu(menuItems, tabContents);

  const menuItems2 = document.querySelectorAll('#content2 .tab-buttons li a');
  const tabContents2 = document.querySelectorAll('#content2 .tab-contents > li');
  tabMenu(menuItems2, tabContents2);
}

