let menu = {
  navClassList: navigation.classList,
  navigation: {
    addClass: () => menu.navClassList.add('scroll'),
    removeClass: () => menu.navClassList.remove('scroll'),
    showNavOnScroll: () => {
      if (scrollY != 0) menu.navigation.addClass();
      else menu.navigation.removeClass();
    },
    activateMenuAtCurrentSection: section => {
      const targetLine = scrollY + innerHeight / 2;
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const menuElement = document.querySelector(
        `.menu a[href*=${section.getAttribute('id')}]`
      );
      menuElement.classList.remove('active');
      if (
        targetLine >= sectionTop &&
        !(sectionTop + sectionHeight <= targetLine)
      ) {
        menuElement.classList.add('active');
      }
    },
    sections: [home, services, about],
    onUpdateMenu: () => {
      menu.navigation.sections.forEach(item =>
        menu.navigation.activateMenuAtCurrentSection(item)
      );
    }
  },
  bodyClassList: document.body.classList,
  expanded: {
    open: () => menu.bodyClassList.add('menu-expanded'),
    close: () => menu.bodyClassList.remove('menu-expanded')
  },
  btnBackTopClassList: backToTopButton.classList,
  backToTopButton: {
    show: () => menu.btnBackTopClassList.add('show'),
    hidden: () => menu.btnBackTopClassList.remove('show'),
    onScrollEvent: () => {
      if (scrollY > 550) menu.backToTopButton.show();
      else menu.backToTopButton.hidden();
    }
  },
  scrollEvents: () => {
    menu.navigation.showNavOnScroll();
    menu.backToTopButton.onScrollEvent();
    menu.navigation.onUpdateMenu();
  }
};

document.addEventListener('scroll', () => menu.scrollEvents());

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(`
  #home,
  #home img, 
  #home .stats, 
  #services,
  #services header,
  #services .card,
  #about,
  #about header,
  #about p,
  #about img,
  #contact,
  #contact .content,
  footer
`);

menu.scrollEvents();
