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
  pagination: {
    el: ".swiper-pagination-events",
    type: "bullets",
    clickable: true,
  },
  slidesPerColumnFill: 'row',
  updateOnWindowResize: true,
  slidesPerColumn: 1,
  breakpoints: {
    320: {
      spaceBetween: 20,
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    576: {
      spaceBetween: 34,
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    834: {
      spaceBetween: 27,
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
    1025: {
      spaceBetween: 50,
      slidesPerView: 3,
      slidesPerGroup: 3,
      navigation: {
        nextEl: '.events__next',
        prevEl: '.events__prev',
      },
    },
  },
})

const partnersSliders = document.querySelector(".partners__slider")

const sliderPartners = new Swiper(partnersSliders, {
  longSwipes: false,
  loop: false,
  navigation: {
    nextEl: '.partners__slider-next',
    prevEl: '.partners__slider-prev',
  },
  breakpoints: {
    // 320: {
    //   spaceBetween: 50,
    //   slidesPerView: 1,
    //   slidesPerGroup: 1,
    // },
    // 500: {
    //   spaceBetween: 40,
    //   slidesPerView: 2,
    //   slidesPerGroup: 2,
    // },
    600: {
      spaceBetween: 36,
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    769: {
      spaceBetween: 50,
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    1025: {
      spaceBetween: 50,
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
  }
})
