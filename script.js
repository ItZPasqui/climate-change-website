document.addEventListener("DOMContentLoaded", function () {
    let introVideo = document.getElementById("intro-video");
    let introContainer = document.getElementById("intro-container");

    introVideo.onended = function () {
        introContainer.style.display = "none";
    };
});
