const OPEN_MENU_CLASS = 'menu--open';
const OPEN_MENU_BUTTON_CLASS = 'actions__item-link--menu-open';

const menuContainer = document.querySelector('.nav');

const initMenu = (container) => {
  const menuList = container.querySelector('.menu');
  const menuItems = menuList.querySelectorAll('.menu__item-link');
  const menuButton = container.querySelector('.actions__item-link--menu');

  menuButton.addEventListener('click', () => {
    menuList.classList.toggle(OPEN_MENU_CLASS);
    menuButton.classList.toggle(OPEN_MENU_BUTTON_CLASS);

    if (menuList.classList.contains(OPEN_MENU_CLASS)) {
      menuItems[0].focus();
    }
  });
};

if (menuContainer && document.documentElement.clientWidth < 768) {
  initMenu(menuContainer);
}
