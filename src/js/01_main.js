let burger = document.querySelector('.hamburger'),
    tabletMenu = document.querySelector('.tablet-header__menu'),
    dropdownLinks = document.querySelectorAll('.tablet-header__menu .nav__item.dropdown'),
    dropdownContents = document.querySelectorAll('.dropdown-content');

burger.addEventListener('click', () => {
  tabletMenu.classList.toggle('hidden');
  burger.classList.toggle('active');
})


//dropdowns open cyrcle
console.log(dropdownLinks);
console.log(dropdownContents)

dropdownLinks.forEach((link, i) => {
  const content = dropdownContents[i];

  console.log(link )
  console.log(content )
  link.addEventListener('click', () => {
    content.classList.toggle('active');
    link.classList.toggle('active');
  })

});
