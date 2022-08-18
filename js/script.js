
const BurgerButton = document.querySelector(".button-burger");
const BurgerMenu = document.querySelector(".header__menu");

BurgerButton.addEventListener('click', function() {
  BurgerMenu.classList.toggle('active');
});

const swiper = new Swiper('.section-slider__swiper', {
  // Optional parameters
  	autoplay: {
		delay: 2000,
	  },
  direction: 'horizontal',
  loop: true,
  // If we need pagination
   pagination: {
		el: '.swiper-pagination',
		paginationClickable: true,
    type: 'bullets',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});
