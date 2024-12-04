document.addEventListener("DOMContentLoaded", function (e) {
  // search
  document.addEventListener("click", function (e) {
    if (e.target.closest(".nav-search")) {
      document.querySelector(".search-bar").classList.add("search-bar-active");
    } else if (e.target.closest(".search-cancel")) {
      document
        .querySelector(".search-bar")
        .classList.remove("search-bar-active");
    }
  });

  // Login dan Sign Up
  document.addEventListener("click", function (e) {
    const formElement = document.querySelector(".form");
    // periksa apakah yang di klik adalah elemen 'nav-user' atau 'sudah punya akun'
    if (e.target.closest(".nav-user, .already-account")) {
      formElement.classList.add("login-active");
      formElement.classList.remove("sign-up-active");
    }

    // periksa apakah yang di klik adalah elemen 'sign-up-btn'
    if (e.target.closest(".sign-up-btn")) {
      formElement.classList.remove("login-active");
      formElement.classList.add("sign-up-active");
    }

    // periksa apakah yang di klik adalah elemen 'form-cancel'
    if (e.target.closest(".form-cancel")) {
      formElement.classList.remove("login-active");
      formElement.classList.remove("sign-up-active");
    }
  });
});
