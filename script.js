
document.addEventListener("DOMContentLoaded", function () {
var audio = document.getElementById("background-audio");
var audioControl = document.getElementById("audio-control");
var audioIcon = document.getElementById("audio-icon");

audioControl.addEventListener("click", function () {
if (audio.paused) {
  audio.play();
  audioIcon.classList.remove("ri-volume-mute-fill");
  audioIcon.classList.add("ri-volume-up-fill");
} else {
  audio.pause();
  audioIcon.classList.remove("ri-volume-up-fill");
  audioIcon.classList.add("ri-volume-mute-fill");
}
});
});
var r; // Define `r` in a higher scope to make it accessible in both event listeners
var text = document.getElementById("text");
document.addEventListener("DOMContentLoaded", (event) => {
  r = new rive.Rive({
    src: "./cat.riv",
    canvas: document.getElementById("canvas"),
    autoplay: true,
    animations: [
      "idle",
      "spark on",
      "bubble about",
      "bubble on",
      "blink",
      "shirt nintendo",
    ], // Ensure this is an array if specifying multiple animations
    onLoad: () => {
      r.resizeDrawingSurfaceToCanvas();
      text.innerHTML = "Hello !!";

    },
  });
});

document
  .querySelector("#frame")
  .addEventListener("mouseover", function () {
    if (r) {
      r.play([
        "bubble about",
        "bubble on",
        "hand right old",
        "mouth smile",
        "eyes uwu",
        "eyebrows chill",
      ]);
      
      text.innerHTML = "Learn More <br> About Me";

    }
  });
document
  .querySelector("#frame")
  .addEventListener("mouseleave", function () {
    if (r) {
      r.play([
        "no hands transition",
        "mouth off",
        "eyes default",
        "eyebrows none",

      ]);
      text.innerHTML = "I Am  <br> Feeling Good";
    
    }
  });
document
  .querySelector("#table")
  .addEventListener("mouseover", function () {
    if (r) {
      r.play([
        "hands up both",
        "mouth big smile",
        "eyebrows chill",
        "bubble shirt",
        "bubble on",
      ]);
      text.innerHTML = "Check Out <br> My ECS";

    }
  });
document
  .querySelector("#table")
  .addEventListener("mouseleave", function () {
    if (r) {
      r.play([
        "no hands transition",
        "mouth default",
        "eyebrows none",
      
      ]);
      text.innerHTML = "Tell me <br> About Yourself";

    }
  });
document
  .querySelector("#music")
  .addEventListener("mouseover", function () {
    if (r) {
      r.play([
        "hands up both",
        "mouth big smile",
        "eyebrows chill",
        "bubble shirt",
        "bubble on",
      ]);
      text.innerHTML = "Sound is  <br> Crazy Right";


    }
  });
document
  .querySelector("#music")
  .addEventListener("mouseleave", function () {
    if (r) {
      r.play([
        "no hands transition",
        "mouth default",
        "eyebrows none",
      
      ]);
      text.innerHTML = "How are you <br> feeling";

    }
  });
document
  .querySelector("#guitar")
  .addEventListener("mouseover", function () {
    if (r) {
      r.play([
        "hands up both",
        "mouth uwu default",
        "eyebrows chill",
        "eyes closed",
        "bubble shirt",
        "bubble on",
      ]);
      text.innerHTML = "I'm a Badminton <br> Champion";

    }
  });
document
  .querySelector("#guitar")
  .addEventListener("mouseleave", function () {
    if (r) {
      r.play([
        "no hands transition",
        "mouth default",
        "eyebrows none",
        "eyes default",

      ]);
      text.innerHTML = "I Am  <br> Feeling Good";

    }
  });
document
  .querySelector("#certificates")
  .addEventListener("mouseover", function () {
    if (r) {
      r.play([
        "hands up both",
        "mouth uwu default",
        "eyebrows chill",
        "eyes closed",
        "bubble shirt",
        "bubble on",
      ]);
      text.innerHTML = "Check my <br> Certificates";

    }
  });
document
  .querySelector("#certificates")
  .addEventListener("mouseleave", function () {
    if (r) {
      r.play([
        "no hands transition",
        "mouth default",
        "eyebrows none",
        "eyes default",

      ]);
      text.innerHTML = "I Am  <br> Feeling Good";

    }
  });
document
  .querySelector("#shelf")
  .addEventListener("mouseover", function () {
    if (r) {
      r.play([
        "hand right old",
        "mouth shocked",
        "eyes uwu",
        "eyebrows chill",
        "bubble shirt",
        "bubble on",
      ]);
      text.innerHTML = "Contact Me <br> For More Info"; 

    }
  });
document
  .querySelector("#shelf")
  .addEventListener("mouseleave", function () {
    if (r) {
      r.play([
        "no hands transition",
        "mouth default",
        "eyes default",
        "eyebrows none",
  
      ]);
      text.innerHTML = "Want to  <br> contact me";

    }
  });
window.addEventListener("keypress", function (e) {
  if (r) {
    if (e.key === " ") {
      r.play([
        "jump small",
        "spark bottom",
        "spark on",
        "hands down both",
      ]);
      setTimeout(() => {
        r.play(["no hands transition"]);
      }, 500);
    }
  }
});
document.querySelector("#certificates").addEventListener("click", function () {
  gsap.to("#workdiv", {
    top: "0%",
    duration: 0.5,
    borderRadius: "0%",
  });
  gsap.to("#colorchange",{
    display:"none"
  })
  
  r.play(["masked load","bubble off"]);
  text.style.display = "none"
  gsap.to("#canvas", {
    bottom: "-10%",
    scale: 1,
    duration: 0.5,
  });
});

document.querySelector("#close").addEventListener("click", function () {
  gsap.to("#workdiv", {
    top: "100%",
    duration: 0.5,
    borderRadius: "50%",
  });
  gsap.to("#colorchange",{
    display:"initial"
  })
  r.play(["masked off","bubble on"]);
  text.style.display = "initial"

  gsap.to("#canvas", {
    bottom: "10%",
    scale: 1,
    duration: 0.5,
  });
});



document.querySelector("#table").addEventListener("click", function () {
    gsap.to("#ecs", {
      top: "0%",
      duration: 0.5,
      borderRadius: "0%",
    });
    gsap.to("#colorchange",{
      display:"none"
    })
    
    r.play(["masked load","bubble off"]);
    text.style.display = "none"
    gsap.to("#canvas", {
      bottom: "-10%",
      scale: 1,
      duration: 0.5,
    });
  });
  
  document.querySelector("#close2").addEventListener("click", function () {
    gsap.to("#ecs", {
      top: "100%",
      duration: 0.5,
      borderRadius: "50%",
    });
    gsap.to("#colorchange",{
      display:"initial"
    })
    r.play(["masked off","bubble on"]);
    text.style.display = "initial"
  
    gsap.to("#canvas", {
      bottom: "10%",
      scale: 1,
      duration: 0.5,
    });
  });

  



const animations = [
  ["shirt rive", "spark center", "spark on", "idle bounce"],
  ["shirt nintendo", "spark center", "spark on", "idle bounce"],
  ["shirt default", "spark center", "spark on", "idle bounce"],
  ["shirt polo", "spark center", "spark on", "idle bounce"],
  ["shirt vercel", "spark center", "spark on", "idle bounce"],
];
let currentIndex = 0;

document
  .querySelector("#colorchange")
  .addEventListener("click", function () {
    r.play(animations[currentIndex]);
    currentIndex = (currentIndex + 1) % animations.length; // Cycle through animations
  });
document
  .querySelector("#colorchange")
  .addEventListener("mouseover", function () {
    if (r) {
      r.play([
        "bubble on",
        "bubble shirt",
        "eyebrows chill",
        "eyes happy",
        "mouth big smile",
        "spark center",
        "spark on",
      ]);
      text.innerHTML = "Click me to <br> change my shirt";

    }
  });
document
  .querySelector("#colorchange")
  .addEventListener("mouseleave", function () {
    if (r) {
      r.play([
        "no hands transition",
        "mouth default",
        "eyes default",
        "eyebrows none",

      ]);
      text.innerHTML = "I Am  <br> Feeling Good";

    }
  });

  document.querySelector('body').addEventListener('mousemove',function(dets){
    document.querySelector('.circle').style.left = `${dets.clientX}px`
    document.querySelector('.circle').style.top = `${dets.clientY}px`
})
  