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

if(window.innerWidth < 766 && window.location.pathname=='/') {
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
if (window.location.href.indexOf('price') > 1) {
  let tabs = document.querySelectorAll('.price-tab');
// tabs content with same index
  let tabsContent = document.querySelectorAll('.tab-content');
  // wrapper of btn
  let priceTabsWrapper = document.querySelector('.price-tabs');

  function hideTabsContent() {
  // hide all tabs content
  tabsContent.forEach(e => {
      e.classList.add('tab-hidden')
  });
  tabs.forEach(e => {
      // remove all active
      e.classList.remove('active');
  })
  };
  function showTabContent(e) {
  // show target tab default item (first)
  tabsContent[e].classList.remove('tab-hidden')
  tabs[e].classList.add('active');

  };
  // hide all tabs
  hideTabsContent();
  showTabContent(0)




  priceTabsWrapper.addEventListener('click', function(event) {
  // get all tabs. 1 element = item and have a key
  tabs.forEach((item2,key) => {
      // if we click on item
      if(item2.contains(event.target)) {
          // hide all others
          hideTabsContent()
          // show chosen
          showTabContent(key);
      };
  });
  });

}

let scrollToTop = document.querySelector('.scroll-to-top');
document.addEventListener('DOMContentLoaded', () => {
  scrollToTop.style.opacity = '0';
  document.addEventListener('scroll', () => {
    if(window.pageYOffset > 100) {
      scrollToTop.style.opacity = '1';
    }
    else {
      scrollToTop.style.opacity = '0'
    }
  })
})

const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};



