let video_container = document.querySelector(".video-container"),
    main_video = video_container.querySelector("video"),
    videocontrol = video_container.querySelector(".video-controls"),
    PlayPauseBtn = video_container.querySelector(".play-pause i");
    volumbtn = video_container.querySelector(".volume i");
    fullscreen = video_container.querySelector(".fullscreen i");
const videoPlayer = document.getElementById("videoPlayer");
    PlayPauseBtn.addEventListener("click", () => {
    // if video is pause , play the video else pause the video.
        main_video.paused ? main_video.play() : main_video.pause();
    });
    main_video.addEventListener("click", () => {
        main_video.paused ? main_video.play(): "" ;
    });
main_video.addEventListener("play", () => {
    //  if video is play, change  icon to pause
    PlayPauseBtn.classList.replace("fa-play", "fa-pause");
});

main_video.addEventListener("pause", () => {
    //  if video is pause, change  icon to play
    PlayPauseBtn.classList.replace("fa-pause", "fa-play");
});
fullscreen.addEventListener("click", () => {
    if(document.fullscreenElement){
        return document.exitFullscreen();
    }else{
         videoPlayer.requestFullscreen();
            main_video.style.minWidth="100%";
                main_video.style.width="100%";
                main_video.style.height="90vh";
                main_video.style.objectFit="contain";
    }
}); 
volumbtn.addEventListener("click", () => {
    if (!volumbtn.classList.contains("fa-volume-high")) {
        main_video.volume = 0.5;
        volumbtn.classList.replace("fa-volume-xmark", "fa-volume-high");
    } else {
        main_video.volume = 0.0;
        volumbtn.classList.replace("fa-volume-high", "fa-volume-xmark");
    }
});


