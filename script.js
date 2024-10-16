window.addEventListener('load', function() {
    document.getElementById('loader').style.display = 'none';
  });

  window.addEventListener("resize", function () {
    location.reload();
  });   

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


/////////////loader//////////////
gsap.timeline()
    .to(".circle", {
      strokeDashoffset: 0,
      duration: 2,
      ease: "power1.out"
    })
    .to(".image-rotate", {
      opacity: 1,
      scale: 1,
      duration: 1,
      ease: "power1.out"
    }, "-=0.5") // Overlap with the previous animation
    .to(".image-normal", {
      opacity: 1,
      scale: 1,
      rotate: 90,
      duration: 1,
      ease: "power1.out"
    }, "-=0.5") // Overlap with the previous animation
    .to(".text-appear", {
      opacity: 1,
      duration: 1,
      ease: "power1.out"
    }, "-=0.5") // Overlap with the previous animation
  
    .to("#loaderparent",{
      y:"-100%",
      // opacity:0,
      duration:1,
      backgroundColor:"#FEE0EA",
    },"-=0.5")
    .fromTo("#canvas",{
      opacity:0,
    },{
      opacity:1,
      delay:.2
    }, "-=1")
    .fromTo("#text",{
      opacity:0,
    },{
      opacity:1,
      delay:.2
    }, "-=1")








var r; // Define `r` in a higher scope to make it accessible in both event listeners
var text = document.getElementById("text");
var table = document.getElementById("table");
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
  .querySelector("#linkedin")
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
      text.innerHTML = "Contact Me "; 

    }
  });
document
  .querySelector("#linkedin")
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


  document
  .querySelector("#youtube")
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
      text.innerHTML = "Comming Soon "; 

    }
  });
document
  .querySelector("#youtube")
  .addEventListener("mouseleave", function () {
    if (r) {
      r.play([
        "no hands transition",
        "mouth default",
        "eyes default",
        "eyebrows none",
  
      ]);
      text.innerHTML = "I'm Feeling  <br> Happy Today";

    }
  });


  document
  .querySelector("#insta")
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
      text.innerHTML = "Follow me <br> on Instagram"; 

    }
  });
document
  .querySelector("#insta")
  .addEventListener("mouseleave", function () {
    if (r) {
      r.play([
        "no hands transition",
        "mouth default",
        "eyes default",
        "eyebrows none",
  
      ]);
      text.innerHTML = "I'm Feeling  <br> Happy Today";

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
  gsap.to("#table",{
    display:"none",
    opacity:0
  })
  gsap.to("#line",{
    // display:"none",
    opacity:0
  })
  
  
  r.play(["masked on","bubble off"]);

  text.style.display = "none"

  gsap.to("#canvas", {
     opacity:0,
    display:"none",
});
});

document.querySelector("#close").addEventListener("click", function () {
  gsap.to("#workdiv", {
    top: "100%",
    duration: 0.5,
    borderRadius: "50%",
  });
  gsap.to("#colorchange",{
    display:"initial",
})
gsap.to("#table",{
    display:"initial",
    opacity:1
  })
gsap.to("#line",{
    // display:"initial",
    opacity:1
  })
  r.play(["masked off","bubble on"]);
  text.style.display = "initial"

  gsap.to("#canvas", {
      
      display:"initial",
      opacity:1
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
    gsap.to("#table",{
        display:"none",
        opacity:0
      })
    gsap.to("#line",{
        // display:"none",
        opacity:0
      })
    
    r.play(["masked on","bubble off"]);

    text.style.display = "none"

    gsap.to("#canvas", {
     
        display:"none",
  
        opacity:0
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
    gsap.to("#table",{
        display:"initial",
        opacity:1
      })
    gsap.to("#line",{
        // display:"initial",
        opacity:1
      })

    r.play(["masked off","bubble on"]);
    text.style.display = "initial"
  
    gsap.to("#canvas", {
     
        display:"initial",
        opacity:1
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

