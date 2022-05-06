let menu = {
  navClassList: navigation.classList,
  navigation: {
    addClass: () => menu.navClassList.add('scroll'),
    removeClass: () => menu.navClassList.remove('scroll')
  },
  bodyClassList: document.body.classList,
  expanded: {
    open: () => menu.bodyClassList.add('menu-expanded'),
    close: () => menu.bodyClassList.remove('menu-expanded')
  }
};

document.addEventListener('scroll', () => {
  if (scrollY != 0) menu.navigation.addClass();
  else menu.navigation.removeClass();
});

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
