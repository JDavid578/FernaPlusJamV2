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
  const totalhours = Math.floor(elapsedTime / (1000 * 60 * 60));
  const totalminutes = Math.floor(elapsedTime / (1000 * 60));
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

//script do calendario

const daysEl = document.getElementById("days");
const monthYearEl = document.getElementById("month-year");
const popup = document.getElementById("popup");

let currentDate = new Date();


const photos = {
  '2024-09-20': 'https://lh3.googleusercontent.com/pw/AP1GczMKDVUgrvzSVQvBrYwCAJxhEx0NhxHROyF9ee9JzO5L1INHXV7AAmdX6J12Q3S2vCC64FwN7Ifk63GGECyzwyC_Q_X0y8UzYxlDFpCzJ86z8qWyI-t7AeSHriQbtCfqI6zz_nZuJ23vfqwLk8UsqItwng=w1266-h948-s-no-gm?authuser=1',
  '2024-09-19': 'https://lh3.googleusercontent.com/pw/AP1GczO800CVF87_ecewlPFfHygEDvMhI9RgrzGCYuj8RNnaV3FIR6IBNHEp-JoIdRKeF0O3naC18-R1qJj1jxsuN0hvGFW2a1qeuev0zcox-ZLqRzAwFzMVcyPmZIuXwVgYXvAD_f7018UQOHQOvOjrGfi6LQ=w709-h948-s-no-gm?authuser=1',
  '2024-07-10': 'https://lh3.googleusercontent.com/pw/AP1GczOVkR67WOmTdg7c9FXBF_sPtIHbtsFkXn7RQ9DgEW4LhxdtiKrOXJgNrzlOeRLYZNpgRky5QYVQIs34jluPFBBibFSVIqWn78mpvCCtd7SSklaLsSIfCpF0Mea1M7KkP4LyRnq5r5qWv155gvtWRoijEw=w1869-h841-s-no-gm?authuser=1',
  '2024-09-21': 'https://lh3.googleusercontent.com/pw/AP1GczPaKmEuLqN7WxhdmyPeVDlgLmsBgMy8Vffgn67uNsRFW2Db5N1ksiGY-sVq0Psio8noYhZl1ALC3Fl74kNRYOb32oLZQH9tnnWKHM2SDtomON4wWt_LGXle3Fb81Xrje5dT6ScR5xsb-nFx0GN138TvVg=w709-h948-s-no-gm?authuser=1',
  '2024-07-08': 'https://lh3.googleusercontent.com/pw/AP1GczNhcjIvdrdzgGvJMWgc7d7f2dFDd9xUikRfOy1uKgQeTu5rtpFyyPqdFJeQBxlmQbRsA8zNcOYTL7H5OuAqVB4MhRHIR1rTitMSfmRUArxto6_feO9ndFzkcRxJr841a8F-woiKkN9dkSKfxMr0zTRNSw=w441-h438-s-no-gm?authuser=1',
  '2024-11-08': 'https://lh3.googleusercontent.com/pw/AP1GczOyfB2aZ7zvvzoSmGi_NoZPhMZZslo8H2xQyl7qR7WrlBGjFX5-0Impive92HSN8lgwSH1QCVpWva7ELElpVKBe3RuqOIc9LlrZR47u6j80HY89YMa2lkGgBMjUvYRUH_8emGbDC1KPlTrh7zSNuN12Hg=w711-h948-s-no-gm?authuser=1',
  '2024-11-09': 'https://lh3.googleusercontent.com/pw/AP1GczMVX6DOkJZMUR9w5gHnyBf8raWGahaPrNDM8f-hSboU2VmvAxboo9_UnDxP6FgpTZucPtWqSrmRpS7gl2JOXPcD3BOCoW7L5AP4brZwTw3jH44na1624zZLwI6WdbmvGZrcsa_1SQIJA1QRvZQdQRrSTg=w711-h948-s-no-gm?authuser=1',
  '2024-11-10': 'https://lh3.googleusercontent.com/pw/AP1GczNM30eWjSSsEUXMqMAb-zWn2o1koN1byJ9Va9ygIaF_jXPBY1Vi0lXLALmtTUuyPV4STJym73RuTgqAEWrLdKmP82gPuHei9lpPkeLZUHqKms6941AJJoDoO87Jwga60zOduhxmZO5m59XTVQkJtWNJqQ=w1264-h948-s-no-gm?authuser=1',
  '2024-11-11': 'https://lh3.googleusercontent.com/pw/AP1GczNM30eWjSSsEUXMqMAb-zWn2o1koN1byJ9Va9ygIaF_jXPBY1Vi0lXLALmtTUuyPV4STJym73RuTgqAEWrLdKmP82gPuHei9lpPkeLZUHqKms6941AJJoDoO87Jwga60zOduhxmZO5m59XTVQkJtWNJqQ=w1264-h948-s-no-gm?authuser=1',
  '2024-11-07': 'https://lh3.googleusercontent.com/pw/AP1GczOKQvua8ySolbvoNCjNFJM8mr--eLviyOHvj8SDVH1edyhzc2Tk9ZfDm_iePJ5O_wiwYrwrttptESpV6sCzPMDp6eNkMyUU67Ni3CHFx9O_wAWCSz-dw1YMSXpK_bqolb90cmmtaSzkWUbxVcaxi2EAXA=w711-h948-s-no-gm?authuser=1',
  '2024-12-25': 'https://lh3.googleusercontent.com/pw/AP1GczMG0EEIKaw230pupdGrJudi3WSXaE2Ajiplz90VVkI_BioEgFxi0iQscUe5j1Fiu9vuzqnuCh4NVNG7ztmhmOGIJOuPKbrRoBl4qHmvfIlz9xp4PhKEbsCeD8M4IT6Ay_iPX_qGdJtC3i3wLA2muaUSbQ=w1086-h948-s-no-gm?authuser=1',
  '2025-01-21': 'https://lh3.googleusercontent.com/pw/AP1GczO7ZM6TnlexvQFWGKIUNJorkthyr1NfQKUXEAYeIqHoFQ0FhCi4Sgko0OVjvGdJGEh8uVFfXjAsNo6b7B79GK4_XlQ746Yojlzlej9eQF4m2KNHh6sAkFY5iGqZl72dbkFzIKEhGGsLyTnNkflUX56VOg=w711-h948-s-no-gm?authuser=1',
  '2025-01-22': 'https://lh3.googleusercontent.com/pw/AP1GczOz_ExiKLqoPUqXcas4283mlbP_MlrPAjaZ05LEmPfkwBMKVeEmJXID3jWnWkd4IVAsW8FJ27u8iWxXWmqfTu_Ir4gWpP9LFHl46Jxo2t2uiE_HKs5ft-3xgkH8wODst33SZogUyN5sTJ2i1_VaDEtd5A=w711-h948-s-no-gm?authuser=1',
  '2025-02-10': 'https://lh3.googleusercontent.com/pw/AP1GczP6ZVV2vnp1ioZDDr1BQMk-KfwBHGpNSJNlg2YxsuZsTli2CSchOi_L2I7JcO8uxCr_jQ2yOisix3HU805ZikOXRZK0GkKqRq1HzcG2Hqs9Af1m41W9zJzUECXy3FdSvMHf5mef01Xf1imdaPYhtc-GCw=w859-h948-s-no-gm?authuser=1',
  '2025-05-19': 'https://lh3.googleusercontent.com/pw/AP1GczOXrivW-ZF23jGGm5fYCxzO2Xn9_-Pb9s21zbW1jH0JBE8xunliSZE1C5FULNq7E5zpp4HuM_8UyXWMg6w2ls3i96nEe4oSNAx3vhPz_Q0gpw_RgNJGjtw1ZpWXSBh9kwdCaCTS27oxLTJ_oyJWPYtGlA=w1264-h948-s-no-gm?authuser=1',
  '2025-06-15': 'https://lh3.googleusercontent.com/pw/AP1GczMNQ6sj0yQ4nZ0qJuT0ApDFLP0ONrsQklCd_h0Q6TnjzrXsxUeKBKFGUO8_HZw5MgaxZ8I-LviJXOHZ8iPFenxkrJA4bgv-yAhfpjPCsgkdte7SOXH_G4YetxZ-Cmv-ebHVgMxjtSE0HGREa2yXeprjLw=w1264-h948-s-no-gm?authuser=1',
  '2025-07-02': 'https://lh3.googleusercontent.com/pw/AP1GczMRVgVG4xvpWvigq1_Z3a01w7jHWpRB4fA6QVO6ctkCsXt6yDna3drNKk-gmrTq8GZGEoehounFKpRGOcxOq-dbKfF75wYMUwcF0JsAprZISiGHXIgyh6m5l4xwaI-Cv31KP4YBqEvgq4K_7qc_-3fRmw=w711-h948-s-no-gm?authuser=1',
  '2025-01-15': 'https://lh3.googleusercontent.com/pw/AP1GczNGMJ6phRoetTnKl2tusRz8KLluVCANq2kdMDytMvHufKcVwlV6sxXHMaIg9GhUuQhWu-9vKOVsl9TNQ3A0giLEoLftRqy-Y4S3DAfyuAG0ICP7xzklV3o070aRbqrl4K1A-hJ4f9EeiZMCQlF5sowhPg=w426-h948-s-no-gm?authuser=1',
  '2024-12-07': 'https://lh3.googleusercontent.com/pw/AP1GczOqDJ3OYH5PtsMYQinCldSzrtHx6Zn4aVd71nNao6yvTeCpLkDOPcY8tkjcKE0-xx5sp4M87ki-OTesDjTfIdRJhLaUfXBlHPEd3xAYtxhdToZ4KCE76sY_u3bI4g1v12C_-jrhBEYLBg3N8YdRgl2WIw=w711-h948-s-no-gm?authuser=1',
  '2024-11-03': 'https://lh3.googleusercontent.com/pw/AP1GczOiDWx2v6nn0paFdaqcSMnukXQHyPb8vW3vtIXd3lEus-diNvQ4dqXtVxo1AjoF_QxXl4nrW6UeA9VlXgjYAbKLYmHzIqoYI4oGgtbKmcebarJw6up32qdcJEs43tcIc1L7BEhfNQauLvvlldpSjoGbMg=w426-h948-s-no-gm?authuser=1',
  '2023-08-11': 'https://lh3.googleusercontent.com/pw/AP1GczPJQru3fMA9W13g4lnbSSkShhUF_Xz-ksBVON_r5VflgJS60z7b9HLPbrNe6QoM-7vXw4U7famAmZTiya0OL3_E93MbtJIkHdUw6_4vQNotferaHQiFXtLkwGzFVg2gDZSu7evLdFeFpN45w3Ydyk6rrA=w711-h948-s-no-gm?authuser=1',
  '2025-06-12': 'https://lh3.googleusercontent.com/pw/AP1GczN-6qmEkBP2586xUEIwWmiDnSC5NYBntWDx1-6zZuJDvyBvDnj_iPEpgEttahLLu9xz1iEZmoyA4pMDB6nzyVJYcPx-DuosgTXhxqZfZuu674UIoKIInTRoV-vHMSMOq5QgkWT2EVlI3nSlaJnvGttLug=w533-h948-s-no-gm?authuser=1',
  '2024-02-05': 'https://lh3.googleusercontent.com/pw/AP1GczMUWtZV1ahIPx7-T_byv6eL4_81f0QQLq9shj8y4hZH3GfQdhPYqmChycAbHee_FyvxXkHv4LjLBDzx1C3JcWdQ5EavXT_yCnFqN_cOecfvZr48ERwf-uxlA7GUeE2L2AAjQ09ewq72t_6FJlnYgHtAWA=w1266-h948-s-no-gm?authuser=1',
  '2024-02-06': 'https://lh3.googleusercontent.com/pw/AP1GczO4aASq3C_hTT2mQy_h6nPZ7g5mL9C5h2m7y930xQ1tXzxmmiN7-_h5kiIPDcU79JNvzfuesrLVm99JKCEU3PL2WAxxgr-D72ijMopgesNHObvTS0_eNVC4LLHg_QVXixqPF8JDhdI9WxpDaQEFZGfdbg=w1266-h948-s-no-gm?authuser=1',
  '2023-03-23': 'https://lh3.googleusercontent.com/pw/AP1GczMRC65AzVXyz0WLMYrVRAQEKOYQHm1SJpxZ0X2s5ghCJ_vdz6EHPHtzXJrEH4mcfvbWyCWPrd0cvgRFuTFx1mCfqyVbgmFwSlGYQJ79fJUqB8h8DO3g4d8kPanB9tEwenNzO_C5FWgEkC9yNdLUvzYIRg=w1264-h948-s-no-gm?authuser=1',
  '2024-03-07': 'https://lh3.googleusercontent.com/pw/AP1GczPriV8m5q4BdwIjt-NOaaTbN2L312LDZuTcOgjaRV2cn_erGiUcN2BaOp_xogMZy06k1glKqb4g7D9LYcyQEokMq3bnVRnZw_IEqPTqhKxZhMeWIHIYZWB8DueB_ZVnNkm2RoTQJyHwXC6UPsWaB0KXOg=w426-h948-s-no-gm?authuser=1',
  '2024-05-31': 'https://lh3.googleusercontent.com/pw/AP1GczPx31_wfzlg4HXJ5KlC1aC11iyQB_9my6MSYK4L8vuHBD8QoF6Er75QrFYjohylPY2bcs9sax6nQRKeJYWxkyZWVCcpiX5ZJQOKizga5Z4KoeIGnCe88aby1fSQ83I0-rfedDNgvwK8U9he_aIxytO8Xw=w426-h948-s-no-gm?authuser=1',
  '2024-06-02': 'https://lh3.googleusercontent.com/pw/AP1GczNfWxwF5umm9LR2tuQ-ebqen-rytSRc7vv6WxpbiWaQJCvXOgMZg8BzIgBtJsrIUnAPcQEIqbxb0HVHAJvTSy709z894rUra95wkFKSHC80LNPsRR3reGYwOnL27Z3xx8-rq4WEVTLbz9kafS9mEK2i-w=w426-h948-s-no-gm?authuser=1',
  '2023-12-25': 'https://lh3.googleusercontent.com/pw/AP1GczMYGlPcIlDMDy1VpH7flp-NmvyEvEd47z6KoNXh-0d2pfhJbMPHF83E8EiuvL02AsejlT2TIerbn1WZqMvwE26dBVctZvm9KH2kcdxlFeUQlEF6rORa-BqtONB_mPytAw07XjuMC_ds1f6vE6CBk6-7dQ=w426-h948-s-no-gm?authuser=1',
  '2023-12-26': 'https://lh3.googleusercontent.com/pw/AP1GczNpyBoPZou3Rz6g7SHqLs8m1CIEtcq5bYiI_dXcylQ3nPJiIotevVWd3R2CtXNWt2_JLhTJ88dy3nYnvNu_Y15CcjCL4m2UaavOFlCxEJWBpQJPyLTg_LlMpuAmAEhZ61Bdn_5JFoAKfpuVTJP3UYwBTQ=w426-h948-s-no-gm?authuser=1',
  '2024-10-02': 'https://lh3.googleusercontent.com/pw/AP1GczNEcBGhACuR8a5ypXhRb_GV0j0HHV3xHHL2mOucB9FwiVKliYeF6k1Ta36uuBOTNtbhVmDnpw9m86Cw-v68Yv8o0ZBJifuIiOIt-vy0k5AcSX8eDflq8U8kMo8ATDAUATrajzYX_Jn5oFR8BIc_U7IyNg=w954-h948-s-no-gm?authuser=1',
  '2024-08-13': 'https://lh3.googleusercontent.com/pw/AP1GczPoat4y3IwE_gbaePPYRCeT_qEUsa42EMsD4Tg0J9kvKKccR0XObig__zTxWfOVdO2AtuFjJW8SagBT4xHIYgsU41yXao_tbT_1np2AEXX_YvyuzI0nzXWx2XuPXrBXs7RW-q7a0_CpuWg11cD3HkIlew=w432-h439-s-no-gm?authuser=1',
  '2025-04-13': 'https://lh3.googleusercontent.com/pw/AP1GczOarkohpioFk-w6spKXDyj-oL7UP6jsW5wAsCmSqqXCjpQnD5NhG7o1joUPYIQ7VlRl_IGL4vzgt-mDQ3cPuZk-TDrznTdIsi1l79FI7okdVUMu3Fv6ex7wv4qaLswhQawvdCCsGMwWb7mQwCyeHJO9Ow=w948-h948-s-no-gm?authuser=1',
  '2025-04-16': 'https://lh3.googleusercontent.com/pw/AP1GczOJuFfVddQw_SZKxtTp3YyDJ1p1TT3rQnbIVOeQl089OaeoK2cAW4BotAJuVtBdRmVKvaCBMFUHB1khcMeJld-nVMdCWUSN5XU7cs9z0_2M1HIBPVpgcohabMpqu9TZnNUQA1yCUGwOsNsyQX3uPnlUcQ=w675-h605-s-no-gm?authuser=1',
  '2025-05-07': 'https://lh3.googleusercontent.com/pw/AP1GczOr6MEJ6wXbJ0radkajlDsL9NQCchRer7MpLnfTy4B-4OZIpfVU220ig07HKU3RclniZiKjz5xzsmMi31BVhB2rXTLI5OWbr3th9a_MNRucZ1qGMEzpODQZJTTLqzIBvxXZDutvKy4Ckd3atzLcMRh7MA=w711-h948-s-no-gm?authuser=1',
  '2025-06-14': 'https://lh3.googleusercontent.com/pw/AP1GczPvURE4wHWi-Tfp5s9oDIHbPVvzK1bQnXVMbk01Ek1QZyDAqOQdGiEz1pgCssDhljCzPsubj48sKj4lcxFvK8sS0sfseBISrs8VXjMSZWsvsYQe648sqzj788PLxbHgJqiR0zyIPrxleYjNoiyux46YbQ=w720-h948-s-no-gm?authuser=1',
  '2025-07-17': 'https://lh3.googleusercontent.com/pw/AP1GczM2KJ1Tz_8AttVKqql4Ku2ZgtFhvYeMFme2_RdHAlxOnZbJr9GylDYkRrRv-V0gBHklSOEmOFmCjvaGQ0OwO2MNL11hrB8fIEyG72E4bXJvhWxGV9g1-yaKhGSvsrvrADdZw-BtvFI1mvOeJA0Lntaxvw=w711-h948-s-no-gm?authuser=1',
  '2025-07-18': 'https://lh3.googleusercontent.com/pw/AP1GczN6tphOgz1DKW2JFujHylxbhxlLeIwmMmZKuqY8mIm0ye8UZOY56k0GeCK6PEURj29S76XATVQXJ3o430udhQZ-iUQ2zSvPpoHdIbx5Hl0DAepZ91sYbuUcxx9AqHEzqfXBH8j0LhRfTM7e94J-rHwEJw=w1264-h948-s-no-gm?authuser=1',
  '2025-01-31': 'https://lh3.googleusercontent.com/pw/AP1GczPJB-WLJRYEnZPqD3fWbsvPigPU3-s1boIcfAWkqdoPPSVhsXxmGxjGhFUFi0mVGTQdEPm1zBSqCgqdrbbYr5j273KMj_4hFNNNDwT9xKRDoYD4lOVEpuGJF_cuFVRs4aX-BpZVmjW8xKPDSszozO9pOw=w533-h948-s-no-gm?authuser=1',
  '2025-01-01': 'https://lh3.googleusercontent.com/pw/AP1GczNnEG-vsHdZa0w7QtX6S5Me_yvsHeqTFnmLmCtggUvDShD1Pc0qW3CeIm9KXV8veeXZIF6c6doDgdDDggDqWZFVsWKBYsT23n8wh2gB1Ne34bPOO6cB8tGb7KrcsmSQcql5idPPDI6zIlLu8awsLfQ9Uw=w533-h948-s-no-gm?authuser=1',
  '2024-10-21': 'https://lh3.googleusercontent.com/pw/AP1GczNnEG-vsHdZa0w7QtX6S5Me_yvsHeqTFnmLmCtggUvDShD1Pc0qW3CeIm9KXV8veeXZIF6c6doDgdDDggDqWZFVsWKBYsT23n8wh2gB1Ne34bPOO6cB8tGb7KrcsmSQcql5idPPDI6zIlLu8awsLfQ9Uw=w533-h948-s-no-gm?authuser=1',
  '2025-04-15': 'https://lh3.googleusercontent.com/pw/AP1GczPD41EGKtss9NGven7zoyhRiutXA2Ds5l7NfNbYsmIr79ZyUj9jKe7C_fmhE8K00rnLcMFqSbzDohehFIyO2bSaE4WScElwMLbrSCB5BaUipmUiLsuQb_u-hBH6f2cbu3z9-_0x_pyokwg8aA5_h4FuQQ=w760-h948-s-no-gm?authuser=1',
  '2024-09-23': 'https://lh3.googleusercontent.com/pw/AP1GczOq2Htbfc5__wktXqCH0sLR7DiKVpUEaATDbgtTMXvrVH09lrM8bYwPPcGHsF7QWoMqTy04xjWJ4LgGrlDx9aRoN99_263H_lsBWXFvAxaBw2V0Q7TGiCf5XZeobmfEKOdjKchTftTRsiv971zLMogn-g=w426-h948-s-no-gm?authuser=1',
  '2025-03-29': 'https://lh3.googleusercontent.com/pw/AP1GczPtnEqZN-zxIZ5F1VzpIGphNTP-SpRS7YfAi49eB3T6VRmvCdWEIjgDpznk_OOKNzPc4AXIG-UvCDIvpV63EttQEKy9QTXV0RiBci7d2BdAQromqVYQYkcjeTMi62IjWk4dSyRp3LG5BZpQDYhQ0SQE-w=w711-h948-s-no-gm?authuser=1',
  '2025-03-04': 'https://lh3.googleusercontent.com/pw/AP1GczMr5EXGYi70sUGaadfTn-KC4ZQ2Mkv1W06fIIo-8hvhCKzkXjwolVuOlRtiGDI78PCES0zGlojk7gwRk8-6IjEJqulINPuStTXFnCTmLRIAsUwg8K1NPRxDuhjT-4RcAlOUwxl84VZDlwhsxYPoZMes9A=w438-h948-s-no-gm?authuser=1',
  '2025-02-27': 'https://lh3.googleusercontent.com/pw/AP1GczPPWughk-wtrSFdoLWoLSAdWE4AEWV7R3Xhu8C8oz48VnLtnd2z6t4JJHCKgmzTxbBQI85ucdBv7wAJB4CMdWqPEXy_-BWZkqyAlAy3TVU5dnsTzVm_RTDVr1ZF43-3-zBPUpxligH3TLiV0gAhixP1kw=w426-h948-s-no-gm?authuser=1',
  '2024-04-25': 'https://lh3.googleusercontent.com/pw/AP1GczPeFAIzBt2qdE3rW_TCnUE1OYa1-kTqVYXgYXaofGe6eleNzQfJsgNqyf1UEu6zrKD1431vKbQFpEi_wKMMqO7scPtHBuduaHPSj-mhwr6eMWPO6l_yqksm5Y0BZhW3TEI3F6JePpj5o8umUarWAd3WBg=w426-h948-s-no-gm?authuser=1',
  '2024-05-12': 'https://lh3.googleusercontent.com/pw/AP1GczMWfbXQqM8MO3fCitcIhAEIBSUyQ1CX88HKYAXnl4kc_jzJmaB5qYHtQet61JmGdBGRB2yycgPTUy2FnGh_40iLqgLG0Ls-Md8J6i0NU-yjvzEEtmiVQtlDsUSfOzGj_sjN25als1Q36Kq9kIZARr0_oA=w426-h948-s-no-gm?authuser=1',
  '2024-05-28': 'https://lh3.googleusercontent.com/pw/AP1GczNyARM49eBlVPo36NUYY8X9EDsD9PgiVuZicgjMG3tDLLPu_xCXzdcvLXTaLeYZaOupaNBSL4mSCsX5mHAtVQN7KCJ_VqU4Yq8JeSOeW_f7q7-5EwZal9D175wnN7uspMYgo-sQ-zn3CjEWC9kzl0B8aw=w711-h948-s-no-gm?authuser=1',
  '2024-06-03': 'https://lh3.googleusercontent.com/pw/AP1GczMCoVYS5Iul6Gf5Ss7Nmfl-GqKg7PIY0Kb_W8yTN7lDxZhDN_IzRAc-a69Y95pKXf_VWs8riWDOeddhioQSziarJeDkAqqfj5QvmOFWDTbUuExwo5Jz3_iJxgNNvCsRSly70FNw-kBy1LT4C8UJANGy7w=w426-h948-s-no-gm?authuser=1',
  '2024-06-26': 'https://lh3.googleusercontent.com/pw/AP1GczOLFWkZE8J3KkA8sxsQE21dL2ajaj3DirATdUMOivqL-a6vAiO-rderjoH8HKb8EGIivaoUlxk-e9h8F_FYWRcTN_-i7D8Hwr2LJnRi71lSvXw6bbK5_ukaudlpN4_lYODcCZ4ByLMiiTQGT7_a-hS2IA=w426-h948-s-no-gm?authuser=1',
  '2024-07-18': 'https://lh3.googleusercontent.com/pw/AP1GczM9_KwKEoRVLXT0WEhqjwPAGw2ls5iQpl5ghZaZrRGCw9MBmvHuju4roNsGah7G_--2N5Xw9ptp52gNSSqxhzoXJYK_sVvV4ngd3_-9p2I6lqzr3McCfwqp9QK6RdPoVYy_93nY8YPllAWZndwf4fsDdA=w711-h948-s-no-gm?authuser=1',
  '2024-08-13': 'https://lh3.googleusercontent.com/pw/AP1GczO2rW3hHdcBFyiMArBYHHnY9OwV1EuLCfJKcUf1eoKNrqWWNqwxVQ6poBgxX77t3lVLUJKXpZ-2JapzNvIomv5-f0BqeCaMNu2HxQ-nlS6FYGdYNARi-JElvuxJRuH2WUhzdHz61Tezfqhbf2pX9lWPng=w426-h948-s-no-gm?authuser=1',
  '2025-02-28': 'https://lh3.googleusercontent.com/pw/AP1GczOL_HmsV4h9PQLO1THxwoSgPWa5_x1RPo187_ClYBU1hEGLkfy6soArhLlFPnbxflv7wPWkb6oKBgD8g72lZlDQOB2FGhcrqk5IRpDRR6CoeAsL-rG6b5S3-sIVe1SVzQfx9QK7O-AAGbSB2DYciDmPww=w426-h948-s-no-gm?authuser=1',
  '2025-03-18': 'https://lh3.googleusercontent.com/pw/AP1GczMRH5nCxrnSW68sV5sm2bEgPjYHFtZVVi1c7P_t6nm9rGVoKo_C07buq1hTj2uPsK8pe-kaBl3JI1NOrUJBgxllXixNKvPqYdBaXid66YBivwgHROEv5LMBJbu4NS1puvgrUNm8DTugtlz0S3lPMrVPwQ=w426-h948-s-no-gm?authuser=1',
  '2025-07-21': 'https://lh3.googleusercontent.com/pw/AP1GczMJpeIVjTHtwUUqTAd2wh6Y62Ybxpx-wtSv6Z-Nbn7dZfYLHWBTvi1i09wDxu_aV_ftNDoO_jwQlbA8XAJNvMZFl58pHMm_cFuyKtj1Tlt3B6towTmDXp2806HFxnWib8Sun_XdUZtk-q0LHVv_GKeATA=w1264-h948-s-no-gm?authuser=1',
  '2024-08-23': 'https://lh3.googleusercontent.com/pw/AP1GczNf5tVL-5ZjNfcEs7VxB4mV4Cd1ZqOJJz-BL4DrILA4oN9DcBQ2ZeTahAY61yTytKHd9iaNKVO7v8ipEfE_qR5o_bXVbFlYZb6wzpsWPyPmfORyaWFvkLwW86U0sDP0GHpTlfl0Lxf3yvakp6kjWWJx5A=w426-h948-s-no-gm?authuser=1',
  '2024-08-19': 'https://lh3.googleusercontent.com/pw/AP1GczOwiySPAO1GJVjomzuvje-jdbBgSmC3ldOor5LamlVl1wkP2vjDHDRuXar8S0Gtm6kDoa-kgbp09d-P73yLywMxcvsi2Qufb-O6J3g0UTxBRbKuXHUrHTgZ3LSEdzqWoGvluNL6-ehxvqTPNCxOJMM3iw=w711-h948-s-no-gm?authuser=1',
  '2024-06-13': 'https://lh3.googleusercontent.com/pw/AP1GczNtF9aMRxNiSP-gxFkRPZt8iW0CmHBVjtAKsXyQRlsFDyXrVGae3S4Z5TedKnsGt4xeWsoWaj8nFqEP5WOrKO2tyUYgwUtEpTGltaF9BLamD11N0DouVP4HyeqfX5_Rvb399m5g9r__D3lfcZovNKlEZQ=w1264-h948-s-no-gm?authuser=1',
  '2023-10-14': 'https://lh3.googleusercontent.com/pw/AP1GczN38pljEOL-qIZLR9FKz-GYQTXFIh5l4Dvk-Tr10lJsPrkC7oyO6IbKh0g9yPhtBaZQPo6-BwYkiwtnM0KJmUjbNd_MuFrWM5Y_aWN9EjwCt4xTmTvmx5aqiCKNB9wm-WkB32eni1TLj83Jcm-Vgr8nGw=w711-h948-s-no-gm?authuser=1',
  '2024-01-01': 'https://lh3.googleusercontent.com/pw/AP1GczOhptDkdF2dpbJm63F18S2kmZd1y_UJKDxyh6oQ-wmuhIxXPexU9hh8QQj6GQk6wUR7amTnL96_qha8Pcof16zuvHGDJ28rAPTgsYp1PYJsWwRAAPkMT44gNF_H6dlqwbeOyDydPjoAf4Ef8EAc-bPcLw=w711-h948-s-no-gm?authuser=5',
  '2024-01-30': 'https://lh3.googleusercontent.com/pw/AP1GczNTqxiswEvTHzRx8jKh37SIpldHD4TV3DZ9mkG1kbaJ_U_ko3y-iGD6470NwJsz0iQxmbqtz0vj9ug5LNPtfBKEorDMKgRzXgT3bnAta_RtveYI19T4qIaI8rDQSHBaRJuHmOfd8jAFlH-3B5gtl2Db6w=w426-h948-s-no-gm?authuser=5',

  

};

const renderCalendar = () => {
  daysEl.innerHTML = "";
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);

  monthYearEl.innerText = `${firstDay.toLocaleString('pt-BR', { month: 'long' })} ${year}`;

  const startWeekDay = firstDay.getDay();
  const totalDays = lastDay.getDate();

  for (let i = 0; i < startWeekDay; i++) {
    const blank = document.createElement("div");
    daysEl.appendChild(blank);
  }

  for (let day = 1; day <= totalDays; day++) {
    const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    const div = document.createElement("div");
    div.className = "day";
    div.textContent = day;

    if (photos[dateStr]) {
      const marker = document.createElement("div");
      marker.className = "marker";
      marker.innerHTML = "❤️";
      div.appendChild(marker);


      div.onclick = () => {
        popup.innerHTML = `<img src="${photos[dateStr]}" alt="Imagem do dia">`;
        popup.style.display = "flex";
      }
    }
    daysEl.appendChild(div);
  }
};

document.getElementById("prev").onclick = () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  renderCalendar();
};
document.getElementById("next").onclick = () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  renderCalendar();
};

renderCalendar();