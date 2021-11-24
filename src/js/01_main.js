let burger = document.querySelector('.hamburger'),
    tabletMenu = document.querySelector('.tablet-header__menu'),
    dropdownLinks = document.querySelectorAll('.tablet-header__menu .nav__item.dropdown'),
    dropdownContents = document.querySelectorAll('.dropdown-content-tablet');

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

if(window.innerWidth < 766) {
  let stepImage = document.querySelectorAll('.steps-items__img');
  let stepWebp = document.querySelectorAll('.steps-items__item picture source');

  console.log(stepImage[0])
  stepImage[0].setAttribute('src', './img/step-1-m.png')
  stepWebp[0].setAttribute('srcset', './img/step-1-m.webp')
  stepImage[1].setAttribute('src', './img/step-2-m.png')
  stepWebp[1].setAttribute('srcset', './img/step-2-m.webp')
  stepImage[2].setAttribute('src', './img/step-3-m.png')
  stepWebp[2].setAttribute('srcset', './img/step-3-m.webp')

}
