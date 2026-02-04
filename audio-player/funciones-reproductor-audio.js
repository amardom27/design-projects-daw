var audio = document.getElementById('audio');
var btnPlay = document.getElementById('btnPlay');
var reproducir = document.getElementById('reproducir');
var parar = document.getElementById('parar');
var restart = document.getElementById('restart');
var volumeDown = document.getElementById('volume-down');
var volumeUp = document.getElementById('volume-up');
var isPaused = false;

// Nueva variable
var barraProgreso = document.getElementById("progreso");
var barraTotal = document.getElementById("barra");
var tiempoActual = document.getElementById("tiempo-actual");
var tiempoTotal = document.getElementById("tiempo-total");
var vinilo = document.getElementById("vinilo");

reproducir.onclick = function (ev) {
    if (!isPaused) {
        audio.play();
        btnPlay.classList.remove("fa-play");
        btnPlay.classList.add("fa-pause");
    } else {
        audio.pause();
        btnPlay.classList.remove("fa-pause");
        btnPlay.classList.add("fa-play");
    }

    isPaused = !isPaused;
};

parar.onclick = function (ev) {
    audio.pause();
    //audio.currentTime = 0;
    btnPlay.classList.remove("fa-pause");
    btnPlay.classList.add("fa-play");
    isPaused = false;
};

restart.onclick = function (ev) {
    audio.currentTime = 0;
    //audio.play();
    audio.pause();
    //btnPlay.classList.remove("fa-play");
    //btnPlay.classList.add("fa-pause");
    btnPlay.classList.remove("fa-pause");
    btnPlay.classList.add("fa-play");
    //isPaused = true;
    isPaused = false;
};

volumeDown.onclick = function (ev) {
    if (audio.volume > 0.1)
        audio.volume -= 0.1;
};

volumeUp.onclick = function (ev) {
    if (audio.volume < 1)
        audio.volume += 0.1;
};

// Nueva funcionalidad
// Formateo bonito del tiempo
function formatoTiempo(segundos) {
    var min = Math.floor(segundos / 60);
    var sec = Math.floor(segundos % 60);
    return min + ":" + (sec < 10 ? "0" : "") + sec;
}

// Mover la barra de progreso
audio.addEventListener("timeupdate", function () {
    if (audio.duration) {
        var porcentaje = (audio.currentTime / audio.duration) * 100;
        barraProgreso.style.width = porcentaje + "%";
        tiempoActual.textContent = formatoTiempo(audio.currentTime);
    }
});

// Poner el tiempo al principio de la canción
audio.addEventListener("loadedmetadata", function () {
    tiempoTotal.textContent = formatoTiempo(audio.duration);
    tiempoActual.textContent = "0:00";
});


// Click en la barra para saltar
barraTotal.addEventListener("click", function (e) {
    var rect = barraTotal.getBoundingClientRect();
    var clickX = e.clientX - rect.left;
    var porcentaje = clickX / rect.width;
    audio.currentTime = porcentaje * audio.duration;
});

// Glow de la barra
audio.addEventListener("play", () => {
    vinilo.classList.add("playing");
});

audio.addEventListener("pause", () => {
    vinilo.classList.remove("playing");
});

audio.addEventListener("ended", () => {
    vinilo.classList.remove("playing");
    barraProgreso.style.width = "0%";
    tiempoActual.textContent = "0:00";
});