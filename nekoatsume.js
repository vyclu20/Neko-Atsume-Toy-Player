const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const button4 = document.getElementById("button4");
const gif = document.getElementById("gif"); 
const musicCat = document.getElementById("music-cat");
const closeBtn = document.getElementById("closeBtn");

let isMusicPlaying = false;
let audio = new Audio('bgmusic.mp3');

button1.addEventListener("click", function() {
  gif.src = "bandit.png";
});

button2.addEventListener("click", function() {
  gif.src = "peaches.png";
});

button3.addEventListener("click", function() {
  gif.src = "sunny.png";
});

button4.addEventListener("click", function() {
  gif.src = "ginger.png";
});

function showPopup() {
  var popup = document.getElementById("popup");
  popup.style.display = "block";
}

function hidePopup() {
  var popup = document.getElementById("popup");
  popup.style.display = "none";
}

gif.addEventListener("click", showPopup);
closeBtn.addEventListener("click", hidePopup);

function toggleMusic() {
  if (!isMusicPlaying) {
    audio.play();
    musicCat.src = "musiccat2.png";
    isMusicPlaying = true;
  } else {
    audio.pause();
    musicCat.src = "musiccat.png";
    isMusicPlaying = false;
  }
}

//This is to change the png images to gifs when firing the go button
const goButton = document.getElementById("go-button");

goButton.addEventListener("click", function() {
  const numLoops = document.getElementById("loops").value;
  let imageSrc = "";
  
  if (gif.src.includes("bandit.png")) {
    imageSrc = "bandit.gif";
  } else if (gif.src.includes("peaches.png")) {
    imageSrc = "peaches.gif";
  } else if (gif.src.includes("sunny.png")) {
    imageSrc = "sunny.gif";
  } else if (gif.src.includes("ginger.png")) {
    imageSrc = "ginger.gif";
  }
  
  gif.src = imageSrc;
  
  setTimeout(function() {
    gif.src = gif.src.replace(".gif", ".png");
  }, numLoops * 1690); //duration of gif, of each loop
});
