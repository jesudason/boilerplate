(function () {
  'use strict';

    const heroVideo = document.getElementById('heroBanner-video');
    const heroBannerVideoButton = document.getElementById('heroBanner-videoButton');
    const leftPath = document.getElementById("leftPath");
    const rightPath = document.getElementById("rightPath");
    heroBannerVideoButton.setAttribute("aria-label", "Pause video");

    const pauseLeft = "M0 0 L6 0 L6 20 L0 20 Z";
    const leftPlay  = "M0 0 L10 5 L10 15 L0 20 Z";

    const pauseRight = "M14 0 L20 0 L20 20 L14 20 Z";
    const rightPlay  = "M10 5 L20 10 L20 10 L10 15 Z";
    
    heroBannerVideoButton.addEventListener('click', () => {
        if (heroVideo.paused) {
            heroVideo.play();
            leftPath.setAttribute("d", pauseLeft);
            rightPath.setAttribute("d", pauseRight);
            heroBannerVideoButton.setAttribute("aria-label", "Pause video");
            heroBannerVideoButton.setAttribute("title", "Pause video");
        } else {
            heroVideo.pause();
            leftPath.setAttribute("d", leftPlay);
            rightPath.setAttribute("d", rightPlay);
            heroBannerVideoButton.setAttribute("aria-label", "Play video");
            heroBannerVideoButton.setAttribute("title", "Play video");
        }
    });




    if(heroVideo !== null) {

        const dataVideo = heroVideo.getAttribute('data-video');
        const dataVideoTablet = heroVideo.getAttribute('data-video-tablet');
        const dataVideoMobile = heroVideo.getAttribute('data-video-mobile');

        const heroVideoSource = heroVideo.getElementsByTagName('source')[0];
        
        const width = function() {
        return window.innerWidth;
        };

        const screenSize = function() {
        return width() >= 1280 ? 'desktop'
        : width() >= 768 ? 'tablet'
        : 'mobile';
        };

        const setSource = function() {
        heroVideo.pause();
        const videoUrl = width() >= 1280 ? dataVideo
        : width() >= 768 ? dataVideoTablet
        : dataVideoMobile;
        heroVideoSource.setAttribute('src', videoUrl);
        heroVideo.load();


        };

        const onResize = function() {
        const currentWindow = screenSize();
        if (currentWindow != previousWindow){
            // Update Video
            setSource();
            
            // Update Button State
            leftPath.setAttribute("d", pauseLeft);
            rightPath.setAttribute("d", pauseRight);
            heroBannerVideoButton.setAttribute("aria-label", "Pause video");
            heroBannerVideoButton.setAttribute("title", "Pause video");
            
            previousWindow = screenSize();
        }
        };

        var previousWindow = screenSize();
        setSource();
        window.addEventListener('resize', onResize);

    }
    
})();