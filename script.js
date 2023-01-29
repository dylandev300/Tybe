const el = document.querySelector(".card");
const wrap = document.querySelector(".card__wrapper");
let w = el.clientWidth;
let h = el.clientHeight;
let b = el.getBoundingClientRect();
el.addEventListener("mousemove", (e) => {
  let X = (e.clientX - b.left) / w;
  let Y = (e.clientY - b.top) / h;

  let rX = -(X - 0.5) * 26;
  let rY = (Y - 0.5) * 26;

  let bgX = 40 + 20 * X;
  let bgY = 40 + 20 * Y;

  console.log(X, Y);
  document.documentElement.style.setProperty("--x", 100 * X + "%");
  document.documentElement.style.setProperty("--y", 100 * Y + "%");

  document.documentElement.style.setProperty("--bg-x", bgX + "%");
  document.documentElement.style.setProperty("--bg-y", bgY + "%");

  document.documentElement.style.setProperty("--r-x", rX + "deg");
  document.documentElement.style.setProperty("--r-y", rY + "deg");
});


//////////////////////////////////////////////////////////////////////////////////////////////////

TweenMax.to(".block-1", 2, {
  x: "-180",
  y: "-200",
  scale: "2.2",
  ease: Expo.easeInOut,
});

TweenMax.to(".block-2", 2, {
  x: "50",
  y: "290",
  rotation:"-35",
  scale: "1.0",
  ease: Expo.easeInOut,
});

TweenMax.to(".block-3", 2, {
  x: "208.8",
  y: "-218",
  rotation: "-46",
  scale: "1.0",
  ease: Expo.easeInOut,
});

TweenMax.to(".block-4", 2, {
  x: "220",
  y: "-5",
  rotation: "87",

  scale: "1.1",
  ease: Expo.easeInOut,
});

TweenMax.from(".card", 2.4, {
  scale: "0",
  ease: Expo.easeInOut,
});
TweenMax.to(".box", 2.4, {
  y: "-100%",
  ease: Expo.easeInOut,
});


TweenMax.from(".navbar > div", 1.6, {
  opacity: 0,
  y: 60,
  ease: Expo.easeInOut,
  delay: 0.6,
});
TweenMax.from(".site-logo", 1.6, {
  opacity: 0,
  y: 40,
  ease: Expo.easeInOut,
  delay: 0.6,
});
TweenMax.from(".showreel", 1.6, {
  opacity: 0,
  y: 40,
  ease: Expo.easeInOut,
  delay: 0.6,
});
TweenMax.staggerFrom(
  ".site-menu > div",
  1,
  {
    opacity: 0,
    y: 60,
    ease: Power2.easeOut,
  },
  0.2
);