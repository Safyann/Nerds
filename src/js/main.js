const $ = require("jquery");

$(function() {
  // Когда страница загрузится
  $(".navigation__link").each(function() {
    // получаем все нужные нам ссылки
    var location = window.location.href; // получаем адрес страницы
    var link = this.href; // получаем адрес ссылки

    if (location == link) {
      $(".navigation__link").removeClass("active"); // удаляем класс у остальных ссылок
      $(this).addClass("active"); //добавляем класс
    }
  });
});

var link = document.querySelector(".contacts__btn");

var popup = document.querySelector(".modal-write");
var close = popup.querySelector(".modal-close");

var form = popup.querySelector("form");
var name = popup.querySelector("[name=name]");
var email = popup.querySelector("[name=email]");
var messange = popup.querySelector("[name=comment]");

link.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  name.focus();
});

close.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function(evt) {
  if (!name.value || !email.value || !messange.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  }
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
});

ymaps.ready(init);
var myMap;
var myPlacemark;

function init () {
  myMap = new ymaps.Map("map", { center: [59.938631, 30.323055], zoom: 16 });

  myMap.behaviors.disable("scrollZoom");

  myPlacemark = new ymaps.Placemark([59.93860953, 30.32296867], {}, { iconLayout: "default#image", iconImageHref: "img/icons/map-marker.png", iconImageSize: [231, 190], iconImageOffset: [-50, -190] });

  myMap.geoObjects.add(myPlacemark);
}