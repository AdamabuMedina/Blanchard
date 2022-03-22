import "../vendor/yandex-map"

function init() {
  let center = [55.758468, 37.601088];

  let myMap = new ymaps.Map("map", {
    center: center,
    zoom: 15,
    controls: ["smallMapDefaultSet"],
  });

  let placeMarkCustom = new ymaps.Placemark(
    center,
    {
      balloonContent: "Леонтьевский переулок, дом 5/1",
    },
    {
      iconLayout: "default#image",
      iconImageHref: "../img/map-cursor.svg",
      iconImageSize: [20, 20],
      iconImageOffset: [0, 0],
    }
  );

  myMap.controls.remove("searchControl");
  myMap.controls.remove("trafficControl");
  myMap.controls.remove("fullscreenControl");
  myMap.controls.remove("rulerControl");
  myMap.behaviors.disable("scrollZoom");
  myMap.behaviors.disable("multiTouch");
  myMap.behaviors.disable("drag");
  myMap.controls.remove("typeSelector");
  myMap.geoObjects.add(placeMarkCustom);
}

const widthScreen = window.innerWidth;
let flag = 0;
let coordinate = document.documentElement.scrollTop;

if (widthScreen >= 1025) {
  if (coordinate >= 4000) {
    ymaps.ready(init);
    flag = 1;
  }
}

if (widthScreen <= 1024 && widthScreen >= 769) {
  if (coordinate >= 4600) {
    ymaps.ready(init);
    flag = 1;
  }
}

if (widthScreen <= 768 && widthScreen >= 321) {
  if (coordinate >= 5500) {
    ymaps.ready(init);
    flag = 1;
  }
}

if (widthScreen <= 320) {
  if (coordinate >= 5200) {
    ymaps.ready(init);
    flag = 1;
  }
}

window.addEventListener("scroll", () => {
  let mapOffset = document.querySelector("#map").offsetTop;
  let scrollY = window.scrollY;
  if (scrollY >= mapOffset - 1500 && flag === 0) {
    ymaps.ready(init);
    flag = 1;
  }
});
