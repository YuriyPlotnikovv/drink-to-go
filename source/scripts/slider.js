const slider = document.querySelector('.slider .swiper-container');

const initSlider = (element) => {
  new Swiper(element, {
    watchOverflow: true,
    observer: true,
    resizeObserver: true,
    speed: 2200,
    loop: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    navigation: {
      prevEl: '.slider__arrow.slider__arrow--prev',
      nextEl: '.slider__arrow.slider__arrow--next',
    },
    pagination: {
      el: '.slider__pagination',
      clickable: true,
    },
  });
};

if (slider) {
  initSlider(slider);
}
