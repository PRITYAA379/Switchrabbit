function showWhy() {
  const why = document.getElementById('whyPanel');
  why.style.display = 'block';
  why.scrollIntoView({ behavior: 'smooth' });
}

let touchStartX = 0;
let touchEndX = 0;
const strip = document.getElementById('swipeStrip');

document.addEventListener('touchstart', function (e) {
  touchStartX = e.changedTouches[0].screenX;
}, false);

document.addEventListener('touchend', function (e) {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipe();
}, false);

function handleSwipe() {
  if (touchEndX > touchStartX + 50) {
    strip.style.transform = "translateY(-50%) translateX(20px)";
    setTimeout(() => strip.style.transform = "translateY(-50%)", 200);
  } else if (touchEndX < touchStartX - 50) {
    strip.style.transform = "translateY(-50%) translateX(-20px)";
    setTimeout(() => strip.style.transform = "translateY(-50%)", 200);
  }
}
