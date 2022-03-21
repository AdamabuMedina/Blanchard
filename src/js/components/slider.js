import Swiper from "../vendor/swiper.min";

const sliderGallery = new Swiper(".gallery__slider", {
  navigation: {
    nextEl: '.slider-control__arrow--next',
    prevEl: '.slider-control__arrow--prev',
  },
  pagination: {
    el: '.slider-control__fraction',
    type: 'fraction'
  },
  updateOnWindowResize: true,
  a11y: {
    enabled: true,
    prevSlideMessage: 'Предыдущий слайд',
    nextSlideMessage: 'Следующий слайд',
    firstSlideMessage: 'Это первый слайд',
    lastSlideMessage: 'Это последний слайд',
    paginationBulletMessage: 'перейти к слайду {{index}}',
    notificationClass: 'swiper-notification',
  },
  breakpoints: {
    500: {
      slidesPerColumnFill: 'row',
      // slidesPerGroup: 1,
      slidesPerView: 1,
      slidesPerColumn: 0,
      updateOnWindowResize: true,
    },
    720: {
      slidesPerColumnFill: 'row',
      slidesPerGroup: 2,
      slidesPerView: 2,
      slidesPerColumn: 1,
      updateOnWindowResize: true,
      spaceBetween: 34,
    },
    1024: {
      slidesPerColumnFill: 'row',
      // slidesPerGroup: 2,
      slidesPerView: 2,
      slidesPerColumn: 1,
      updateOnWindowResize: true,
      spaceBetween: 34,
    },
    1330: {
      spaceBetween: 50,
      slidesPerColumnFill: 'row',
      updateOnWindowResize: true,
      slidesPerView: 3,
      slidesPerColumn: 1,
    }
  }
})

const eventsSliders = document.querySelector(".events__slider")

const sliderEvents = new Swiper(eventsSliders, {
  slidesPerView: 3,
  navigation: {
    nextEl: '.events__next',
    prevEl: '.events__prev',
  },
  spaceBetween: 50,
  slidesPerColumnFill: 'row',
  updateOnWindowResize: true,
  slidesPerColumn: 1,
  // breakpoints: {
  //   500: {
  //     slidesPerColumnFill: 'row',
  //     // slidesPerGroup: 1,
  //     slidesPerView: 1,
  //     slidesPerColumn: 0,
  //     updateOnWindowResize: true,
  //   },
  //   720: {
  //     slidesPerColumnFill: 'row',
  //     slidesPerGroup: 2,
  //     slidesPerView: 2,
  //     slidesPerColumn: 1,
  //     updateOnWindowResize: true,
  //     spaceBetween: 34,
  //   },
  //   1024: {
  //     slidesPerColumnFill: 'row',
  //     // slidesPerGroup: 2,
  //     slidesPerView: 2,
  //     slidesPerColumn: 1,
  //     updateOnWindowResize: true,
  //     spaceBetween: 34,
  //   },
  //   1330: {
  //     spaceBetween: 50,
  //     slidesPerColumnFill: 'row',
  //     updateOnWindowResize: true,
  //     slidesPerView: 3,
  //     slidesPerColumn: 1,
  //   }
  // }
})
