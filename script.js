const w = document.querySelector(".w");
const a = document.querySelector(".a");
const s = document.querySelector(".s");
const d = document.querySelector(".d");
const j = document.querySelector(".j");
const k = document.querySelector(".k");
const l = document.querySelector(".l");

const wAudio = new Audio("sounds/tom-1.mp3");
const aAudio = new Audio("sounds/tom-2.mp3");
const sAudio = new Audio("sounds/tom-3.mp3");
const dAudio = new Audio("sounds/tom-4.mp3");
const jAudio = new Audio("sounds/snare.mp3");
const kAudio = new Audio("sounds/crash.mp3");
const lAudio = new Audio("sounds/kick-bass.mp3");

const playSound = function (e) {
  if (this.textContent === "w" || e.key === "w") {
    wAudio.play();
    w.classList.add("pressed");
    setTimeout(() => w.classList.remove("pressed"), 100);
  }
  if (this.textContent === "a" || e.key === "a") {
    aAudio.play();
    a.classList.add("pressed");
    setTimeout(() => a.classList.remove("pressed"), 100);
  }
  if (this.textContent === "s" || e.key === "s") {
    sAudio.play();
    s.classList.add("pressed");
    setTimeout(() => s.classList.remove("pressed"), 100);
  }
  if (this.textContent === "d" || e.key === "d") {
    dAudio.play();
    d.classList.add("pressed");
    setTimeout(() => d.classList.remove("pressed"), 100);
  }
  if (this.textContent === "j" || e.key === "j") {
    jAudio.play();
    j.classList.add("pressed");
    setTimeout(() => j.classList.remove("pressed"), 100);
  }
  if (this.textContent === "k" || e.key === "k") {
    kAudio.play();
    k.classList.add("pressed");
    setTimeout(() => k.classList.remove("pressed"), 100);
  }
  if (this.textContent === "l" || e.key === "l") {
    lAudio.play();
    l.classList.add("pressed");
    setTimeout(() => l.classList.remove("pressed"), 100);
  }
};

for (i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", playSound);
}

document.addEventListener("keydown", playSound);
