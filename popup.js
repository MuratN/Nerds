var link = document.querySelector(".writetous-link");
var popup = document.querySelector(".modal-writetous");
var close = popup.querySelector(".modal-close");
var login = popup.querySelector("[name=name]");
var send = popup.querySelector(".modal-button");
var email = popup.querySelector("[name=email]");
var storage = localStorage.getItem("login");
  
link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");

if (storage) {
    login.value = storage;
    email.focus();
  } else {
    login.focus();
  }
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
});

send.addEventListener("click", function (evt) {
    if (!login.value || !email.value) {
        evt.preventDefault();
        popup.classList.remove("modal-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("modal-error");
     }else {
        localStorage.setItem("login", login.value);
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
        popup.classList.remove("modal-error");
      }
    }
});