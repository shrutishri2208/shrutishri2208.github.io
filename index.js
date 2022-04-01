function displayNextImage() {
  try {
    console.log("HELLO");
    console.log(x);
    x = x === images.length - 1 ? 0 : x + 1;
    document.getElementById("icons").src = images[x];
  } catch (error) {
    console.log(error);
  }
}

function startTimer() {
  setInterval(displayNextImage, 1000);
}

var images = [],
  x = -1;
images[0] = "hello.png";
images[1] = "monitor.png";
images[2] = "rubik.png";
