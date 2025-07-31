const imageLinks = [
  "https://lh3.googleusercontent.com/pw/AP1GczP6ZVV2vnp1ioZDDr1BQMk-KfwBHGpNSJNlg2YxsuZsTli2CSchOi_L2I7JcO8uxCr_jQ2yOisix3HU805ZikOXRZK0GkKqRq1HzcG2Hqs9Af1m41W9zJzUECXy3FdSvMHf5mef01Xf1imdaPYhtc-GCw=w861-h950-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczO800CVF87_ecewlPFfHygEDvMhI9RgrzGCYuj8RNnaV3FIR6IBNHEp-JoIdRKeF0O3naC18-R1qJj1jxsuN0hvGFW2a1qeuev0zcox-ZLqRzAwFzMVcyPmZIuXwVgYXvAD_f7018UQOHQOvOjrGfi6LQ=w709-h948-s-no-gm?authuser=1",
  "https://lh3.googleusercontent.com/pw/AP1GczNM30eWjSSsEUXMqMAb-zWn2o1koN1byJ9Va9ygIaF_jXPBY1Vi0lXLALmtTUuyPV4STJym73RuTgqAEWrLdKmP82gPuHei9lpPkeLZUHqKms6941AJJoDoO87Jwga60zOduhxmZO5m59XTVQkJtWNJqQ=w1264-h948-s-no-gm?authuser=1",
  "https://lh3.googleusercontent.com/pw/AP1GczOQbT-RgSTNIQZqcT0ZQFfx6ApRyUMu1xwkuNGmQounjefeWXr9LpkclgNXyEMpA5nrU0MLIMtmqGSj5mHzPc10mAa_YOlVolyq-StJIcn0O_FFd7AEbN4UUnJTk3_-eYjLhhunNiIaAcdI5LklHPXu7g=w711-h948-s-no-gm?authuser=1",
  "https://lh3.googleusercontent.com/pw/AP1GczMVX6DOkJZMUR9w5gHnyBf8raWGahaPrNDM8f-hSboU2VmvAxboo9_UnDxP6FgpTZucPtWqSrmRpS7gl2JOXPcD3BOCoW7L5AP4brZwTw3jH44na1624zZLwI6WdbmvGZrcsa_1SQIJA1QRvZQdQRrSTg=w711-h948-s-no-gm?authuser=1",
  "https://lh3.googleusercontent.com/pw/AP1GczMNQ6sj0yQ4nZ0qJuT0ApDFLP0ONrsQklCd_h0Q6TnjzrXsxUeKBKFGUO8_HZw5MgaxZ8I-LviJXOHZ8iPFenxkrJA4bgv-yAhfpjPCsgkdte7SOXH_G4YetxZ-Cmv-ebHVgMxjtSE0HGREa2yXeprjLw=w1264-h948-s-no-gm?authuser=1",
  "https://lh3.googleusercontent.com/pw/AP1GczPLgyE2QsYwkqRAsygaRcucUvFjZjy-ZJUAHrqphsEox2JLhQ0BB-vXVw1E6Ip1KMjYcuWVepgdX05mTV1dnVmn2PCwVv_nnD59Q6RcUtwHiAcS_v5tT3t6hK_P3zcsS-InRY3JBG3qG_dwXxvSLObGbQ=w1264-h948-s-no-gm?authuser=1",
  "https://lh3.googleusercontent.com/pw/AP1GczOXrivW-ZF23jGGm5fYCxzO2Xn9_-Pb9s21zbW1jH0JBE8xunliSZE1C5FULNq7E5zpp4HuM_8UyXWMg6w2ls3i96nEe4oSNAx3vhPz_Q0gpw_RgNJGjtw1ZpWXSBh9kwdCaCTS27oxLTJ_oyJWPYtGlA=w1264-h948-s-no-gm?authuser=1",
];

let currentIndex = 0;

function updateImage() {
  const image = document.getElementById("imageDisplay");


  image.classList.add("fade-out");

  setTimeout(() => {
    image.src = imageLinks[currentIndex];

    
    image.onload = () => {
      image.classList.remove("fade-out");
      image.classList.add("fade-in");

      
      setTimeout(() => {
        image.classList.remove("fade-in");
      }, 500);
    };
  }, 300);
}

function nextImage() {
  const flipBox = document.getElementById("flipBox");
  flipBox.classList.remove("flip"); // volta para frente
  currentIndex = (currentIndex + 1) % imageLinks.length;
  updateImage();
}

function prevImage() {
  const flipBox = document.getElementById("flipBox");
  flipBox.classList.remove("flip"); // volta para frente
  currentIndex = (currentIndex - 1 + imageLinks.length) % imageLinks.length;
  updateImage();
}

function flipImage() {
  document.getElementById("flipBox").classList.toggle("flip");
}

// Contador de tempo juntos
const startDate = new Date("2024-12-02T13:00:00").getTime();

function updateCounter() {
  const now = new Date().getTime();
  const elapsedTime = now - startDate;

  const days = Math.floor(elapsedTime / (1000 * 60 * 60 * 24));
  const hours = Math.floor((elapsedTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);

  const totaldays = days;
  const totalhours = Math.floor(elapsedTime / (1000*60*60));
  const totalminutes = Math.floor(elapsedTime / (1000*60));
  const totalseconds = Math.floor(elapsedTime / 1000);

  document.getElementById("counter").innerHTML =
    `${days}d ${hours}h ${minutes}m ${seconds}s`;

  document.getElementById("totalday").innerHTML =
    `${totaldays} Dias ❤`;

  document.getElementById("diaspassados").innerHTML =
    `${totaldays} dias`;
    
  document.getElementById("totalhour").innerHTML =
    `${totalhours} Horas ❤`;    
    
  document.getElementById("totalminute").innerHTML =
    `${totalminutes} Minutos ❤`;
    
  document.getElementById("totalsecond").innerHTML =
    `${totalseconds} Segundos ❤ `;  
    

}

setInterval(updateCounter, 1000);
updateCounter();
updateImage();

const audio = document.getElementById("audio");
const playPauseBtn = document.getElementById("playPauseBtn");
const progressBar = document.getElementById("progressBar");

playPauseBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    playPauseBtn.innerHTML = "&#10073;&#10073;"; // pausa 
  } else {
    audio.pause();
    playPauseBtn.innerHTML = "&#9658;"; // play 
  }
});


audio.addEventListener("timeupdate", () => {
  const progressPercent = (audio.currentTime / audio.duration) * 100;
  progressBar.value = progressPercent || 0;
});


progressBar.addEventListener("input", () => {
  audio.currentTime = (progressBar.value / 100) * audio.duration;
});