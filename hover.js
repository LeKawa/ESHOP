var clip = document.querySelector('.color');
var duration = 1.5;








const tl = new TimelineMax()


tl.to("img", 1, {
  clipPath: "inset(0% 0px 0% 0px)",
  ease: Power4.easeOut,
  yoyo: false
});

//
// tl.to("img", duration, {
//   clipPath: "inset(0% 0px 0% 0px)",
//   ease: Power4.easeOut,
//   yoyo: false
// }, "reveal");
//
//
// tl.play();





//
// clip.addEventListener("mouseover", function(event) {
//   tl.play();
// });
// clip.addEventListener("mouseleave", function(event) {
//   tl.reverse();
// });
//
// var down = new TimelineMax();
//
//
// down.to(".product-image_image", duration, {
//   clipPath: "inset(100% 0px 0% 0px)",
//   ease: Power4.easeOut,
//   yoyo: false
// }, "reveal");
//
// down.to("h1", duration, {
//   clipPath: "inset(0px 0px 100% 0px)",
//   ease: Power4.easeOut,
//   yoyo: false
// }, "reveal");
// down.stop();
