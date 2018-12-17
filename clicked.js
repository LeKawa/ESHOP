var firstgif = document.querySelectorAll('.secondgif_item');
var counter = 0;
var intervalId = null;

function finish() {
  clearInterval(intervalId);
  // alert("TERMINE");
}

function cascada() {
  counter++;
  if (counter == 5) finish();
  else {
   firstgif[counter].style.display = "block";
  }
}

function start() {
  skullBite()
  intervalId = setInterval(cascada, 100);
}


function skullBite() {
  var target = new THREE.Vector3();
  target.copy(point);
  TweenMax.to(jaw.rotation, .2, {
    x: 0.5
  });
  TweenMax.to(jaw.rotation, .1, {
    x: 0,
    delay: .2
  });
  TweenMax.to(wrapper.position, .2, {
    x: target.x,
    y: target.y,
    z: target.z,
    repeat: 1,
    yoyo: true
  });

}
