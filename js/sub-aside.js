'use strict';

{
  //asidebar-change-color
  const headerHeight = document.querySelector('.l-header').getBoundingClientRect().height;
  const sections = document.querySelectorAll('main .container > section');
  const body = document.querySelector('body');
  const bodyTop = body.getBoundingClientRect().top;
  const sidebarMenus = document.querySelectorAll('.p-sub-aside > ul > li:not(:last-child) > a');
  const sectionsTop = [];
  sections.forEach((section) => {
    sectionsTop.push(section.getBoundingClientRect().top);
  });
  
  const pagesOffsetY = sectionsTop.map((offsetY) => {
    return offsetY - bodyTop - headerHeight;
  });

  const lastContent = document.querySelector('main .container + section');
  pagesOffsetY.push(lastContent.getBoundingClientRect().top - bodyTop);

  const pagesOffsetYMathFloored = pagesOffsetY.map(pagesOffsetY => {
    return Math.floor(pagesOffsetY);
  });

  //window.scroll();
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    sidebarMenus.forEach((sidebarMenu, index) => {
      sidebarMenu.classList.remove('is-actived');

      if (pagesOffsetYMathFloored[index] <= scrollY && scrollY < pagesOffsetYMathFloored[index + 1]) {
        sidebarMenu.classList.add('is-actived');
      }
    });
  });

  //sidebarMenus.click();
  sidebarMenus.forEach((sidebarMenu, index) => {
    sidebarMenu.addEventListener('click', e => {
      e.preventDefault();
      
      window.scroll({
        left: 0,
        top: pagesOffsetYMathFloored[index],
        behavior: 'smooth',
      });
    });
  });

  //sidebarMenus-dropdown.click();
  const innerSections = document.querySelectorAll('#flow section');
  const innerSectionsClientY = [];
  innerSections.forEach((innerSection) => {
    innerSectionsClientY.push(innerSection.getBoundingClientRect().top);
  });
  const innerSectionsClientYUpdated = innerSectionsClientY.map((innerSectionClientY) => {
    return innerSectionClientY - bodyTop - headerHeight;
  });
  const dropdowns =  document.querySelectorAll('.p-drop-down a');
  
  dropdowns.forEach((dropdown, index) => {
    dropdown.addEventListener('click', e => {
      e.preventDefault();

      window.scroll({
        left: 0,
        top: innerSectionsClientYUpdated[index],
        behavior: 'smooth',
      });
    });
  });

  //flowInnerLinks.click()
  const flowInnerlinks = document.querySelectorAll('#flow header a');
  flowInnerlinks.forEach((flowInnerlink, index)=> {
    flowInnerlink.addEventListener('click', (e) => {
      e.preventDefault();

      window.scroll({
        left: 0,
        top: innerSectionsClientYUpdated[index],
        behavior: 'smooth',
      });
    });
  });
}