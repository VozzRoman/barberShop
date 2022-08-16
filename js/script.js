
const swiper = new Swiper('.section-slider__swiper', {
  // Optional parameters
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