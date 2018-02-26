var navMain = document.querySelector(".main-nav");
var navButtonMenu = document.querySelector(".button-menu");

navMain.classList.remove("main-nav--nojs");
navButtonMenu.addEventListener("click", function () {
  if (navMain.classList.contains("main-nav--closed")) {
      navMain.classList.remove("main-nav--closed");
      navMain.classList.add("main-nav--opened");
  } else {
    navMain.classList.add("main-nav--closed");
    navMain.classList.remove("main-nav--opened");
  }
});

var buttonOrder = document.querySelector(".week-good__button-order");
if (buttonOrder) {
  var modalMessage = document.querySelector(".modal-order");
  var overlay = document.querySelector(".modal-overlay");
  buttonOrder.addEventListener("click", function (evt) {
    evt.preventDefault();
    overlay.classList.add("modal-order--show");
    modalMessage.classList.add("modal-order--show");
  });

  overlay.addEventListener("click", function (evt) {
    if (evt.target === overlay) {
      evt.preventDefault();
      modalMessage.classList.remove("modal-order--show");
      overlay.classList.remove("modal-order--show");
    }
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (modalMessage.classList.contains("modal-order--show")) {
        modalMessage.classList.remove("modal-order--show");
        overlay.classList.remove("modal-order--show");
      }
    }
  });
}

var buttonsBuy = document.querySelectorAll(".button-buy");
if (buttonsBuy.length>0) {
  var modalMessage = document.querySelector(".modal-order");
  var overlay = document.querySelector(".modal-overlay");
  buttonsBuy.forEach(function(button) {
    button.addEventListener("click", function (evt) {
      evt.preventDefault();
      modalMessage.classList.add("modal-order--show");
      overlay.classList.add("modal-order--show");
    });
  });

  overlay.addEventListener("click", function (evt) {
    if (evt.target === overlay) {
      evt.preventDefault();
      modalMessage.classList.remove("modal-order--show");
      overlay.classList.remove("modal-order--show");
    }
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (modalMessage.classList.contains("modal-order--show")) {
        modalMessage.classList.remove("modal-order--show");
        overlay.classList.remove("modal-order--show");
      }
    }
  });
}
