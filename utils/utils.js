export function scrollTop() {
  handleTranslate(0);
}

export function scrollBottom() {
  handleTranslate(1);
}

function handleTranslate(section) {
  const el = document.getElementById('container');
  const position = section * 100;
  el.style.webkitTransform = 'translateY(-' + position + '%)';
  el.style.mozTransform = 'translateY(-' + position + '%)';
  el.style.msTransform = 'translateY(-' + position + '%)';
  el.style.transform = 'translateY(-' + position + '%)';
}

export function addListeners(fncScroll, fncTouch) {
  if (document.addEventListener) {
    document.addEventListener('mousewheel', fncScroll, false);
    document.addEventListener('wheel', fncScroll, false);
    document.addEventListener('keyup', fncScroll, false);
    document.addEventListener('touchstart', fncTouch, false);
    document.addEventListener('touchend', fncTouch, false);
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        if (!('ontouchstart' in window)) {
            document.body.style = "overflow: scroll;";
            document.documentElement.style = "overflow: scroll;";
        }
    }
  } else {
      document.attachEvent('onmousewheel', fncScroll, false);
      document.attachEvent('onkeyup', fncScroll, false);
  }
}

export function removeListeners(fncScroll, fncTouch) {
  if (document.addEventListener) {
    document.removeEventListener('mousewheel', fncScroll, false);
    document.removeEventListener('wheel', fncScroll, false);
    document.removeEventListener('keyup', fncScroll, false);
    document.removeEventListener('touchstart', fncTouch, false);
    document.removeEventListener('touchend', fncTouch, false);
  } else {
      document.detachEvent('onmousewheel', fncScroll, false);
      document.detachEvent('onkeyup', fncScroll, false);
  }
}