const typewriter = document.getElementById("typewriter");
const countdown = document.getElementById("countdown");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const afterYes = document.getElementById("afterYes");
const buttonSection = document.getElementById("buttonSection");

function showProposal(){
 
  let nameText = document.getElementById("nameInput").value;

  if(nameText.trim().toLowerCase() === "pixel" ){

    document.getElementById("nameSection").style.display = "none";

    const container = document.querySelector(".container");
    container.style.display = "block";

    document.getElementById("buttonSection").style.display = "block";
    
    const music = document.getElementById("bgMusic");
    music.play().catch(() => {
      console.log("Autoplay blocked");
    });

    typingEffect();

  } else {

    document.getElementById("nameHint").innerHTML =
      "Hmm…that’s not the right name 💙";

  }

}

let text = "Will you be mine? 💙";

function typingEffect() {

  let i = 0;
  typewriter.innerHTML = ""; 

  function type() {
    if (i < text.length) {
      typewriter.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, 70);
    }
  }

  type();
}


let timeLeft = 30;

let countdownInterval = setInterval(() => {

  countdown.innerHTML = "Time left: " + timeLeft + " 💙";

  timeLeft--;

  if (timeLeft < 0) {
    timeLeft = 30;
  }

}, 1000);

function moveNoButton() {
  const maxX = window.innerWidth - noBtn.offsetWidth;
  const maxY = window.innerHeight - noBtn.offsetHeight;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.position = "fixed";
  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
}

noBtn.addEventListener("mouseover", moveNoButton); 
noBtn.addEventListener("touchstart", moveNoButton); 


function handleYes() {

  clearInterval(countdownInterval);

  typewriter.style.display = "none";
  countdown.style.display = "none";
  buttonSection.style.display = "none";

  afterYes.classList.remove("hidden");

  startFireworks();
}

yesBtn.addEventListener("click", handleYes);
yesBtn.addEventListener("touchstart", handleYes);


function unlockSecret() {

  const value = document
    .getElementById("secretInput")
    .value
    .trim()
    .toLowerCase();

  if (value === "kiddo") {

  
    document.querySelector(".container").innerHTML = `
  <h1 style="font-size: 22px;">
    You’re kind of my favorite notification 💙
    <br><br>
    Every time you text, I smile a little.
    <br><br>
    And you might not even realize this…
    <br><br>
    But you’re dangerously cute.
    <br><br>
    I’m still deciding whether I should thank you for that…
    <br><br>
    Or blame you 😭💙
  </h1>
`;
  } else {
    document.getElementById("hintText").innerHTML =
      "Wrong secret word 💔 <br> Hint: It’s what you always call me 💕";
  }
}


const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

function createFirework() {
  let x = Math.random() * canvas.width;
  let y = Math.random() * canvas.height / 2;

  for (let i = 0; i < 50; i++) {
    particles.push({
      x, y,
      dx: (Math.random() - 0.5) * 6,
      dy: (Math.random() - 0.5) * 6,
      life: 100
    });
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach((p, index) => {
    p.x += p.dx;
    p.y += p.dy;
    p.life--;

    ctx.beginPath();
    ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
    ctx.fillStyle = "#38bdf8";
    ctx.fill();

    if (p.life <= 0) {
      particles.splice(index, 1);
    }
  });

  requestAnimationFrame(animate);
}

function startFireworks() {
  setInterval(createFirework, 800);
  animate();
}


setInterval(() => {

  const heart = document.createElement("div");

  heart.innerHTML = "💙";
  heart.style.position = "fixed";
  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.top = window.innerHeight + "px";
  heart.style.fontSize = "22px";
  heart.style.pointerEvents = "none";
  heart.style.zIndex = "1";
  heart.style.animation = "floatUp 6s linear forwards";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);

}, 500);