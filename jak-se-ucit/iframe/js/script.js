/* Progress bar - start */
function updateProgressBar() {
  const { scrollTop, scrollHeight } = document.documentElement;
  const scrollPercent =
    (scrollTop / (scrollHeight - window.innerHeight)) * 100 + "%";
  document
    .querySelector("#progress-bar")
    .style.setProperty("--progress", scrollPercent);
}

document.addEventListener("scroll", updateProgressBar);
/* Progress bar - konec */

// /* Smooth mouse scrolling - start */
// const body = document.body,
//   scrollWrap = document.getElementsByClassName("smooth-scroll-wrapper")[0],
//   height = scrollWrap.getBoundingClientRect().height - 1,
//   speed = 0.08;

// var offset = 0;

// body.style.height = Math.floor(height) + "px";

// function smoothScroll() {
//   offset += (window.pageYOffset - offset) * speed;

//   var scroll = "translateY(-" + offset + "px) translateZ(0)";
//   scrollWrap.style.transform = scroll;

//   callScroll = requestAnimationFrame(smoothScroll);
// }
// smoothScroll();
// /* Smooth mouse scrolling - konec */
