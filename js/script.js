
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
//-------прокрутка------//
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

//---------Анимация------//
const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
	window.addEventListener('scroll', animOnScroll);
	function animOnScroll (params) {
		for (let index = 0; index < animItems.length; index++) {
			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart =4;
			
			let animItemPoint = window.innerHeight - animItemHeight / animStart;

			if(animItemHeight > window.innerHeight){
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}
			if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
				animItem.classList.add('_active');


			}else{
				if (!animItem.classList.contains('_anim-no-hide')) { //Класс _anim-no-hide убирает повторную анимацию при скроле
				animItem.classList.remove('_active');

				}
			}
			
		}
	}
	function offset(el) {  //Функуия получения координат элемента относительно документа
		var rect = el.getBoundingClientRect(),
		scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
		scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}
setTimeout(() => { //Время задержки анимации
	animOnScroll();
}, 300);

	
}