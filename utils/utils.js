export function scroll() {
  window.scrollTo(0, window.innerHeight);
}

export function addListeners(fncScroll) {
  if (window.addEventListener) {
    window.addEventListener('mousewheel', fncScroll, false);
    window.addEventListener('wheel', fncScroll, false);
    window.addEventListener('keyup', fncScroll, false);
    window.addEventListener('touchstart', fncScroll, false);
    window.addEventListener('touchend', fncScroll, false);
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        if (!('ontouchstart' in window)) {
            window.body.style = "overflow: scroll;";
            window.documentElement.style = "overflow: scroll;";
        }
    }
  } else {
      window.attachEvent('onmousewheel', fncScroll, false);
      window.attachEvent('onkeyup', fncScroll, false);
  }
}

export function removeListeners(fncScroll) {
  if (window.addEventListener) {
    window.removeEventListener('mousewheel', fncScroll, false);
    window.removeEventListener('wheel', fncScroll, false);
    window.removeEventListener('keyup', fncScroll, false);
    window.removeEventListener('touchstart', fncScroll, false);
    window.removeEventListener('touchend', fncScroll, false);
  } else {
      window.detachEvent('onmousewheel', fncScroll, false);
      window.detachEvent('onkeyup', fncScroll, false);
  }
}