const sliderImages = document.querySelectorAll(".slide-in");

window.addEventListener("scroll", debounce(checkSlide));

function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

function checkSlide() {
  sliderImages.forEach((el) => {
    const slideInAt = window.scrollY + window.innerHeight - el.height / 2;
    const imageBottom = el.offsetTop + el.height;
    const isHalfShown = slideInAt > el.offsetTop;
    const isNotScrolledPast = window.scrollY < imageBottom;
    if (isHalfShown && isNotScrolledPast) {
      el.classList.add("active");
    } else {
      el.classList.remove("active");
    }
  });
}
