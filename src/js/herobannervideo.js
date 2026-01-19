(function () {
  'use strict';


    const heroVideo = document.getElementById('heroBanner-video');

    if(heroVideo !== null) {

        // Gets video tags from hero-banner-video element in index.html
        const dataVideo = heroVideo.getAttribute('data-video');
        const dataVideoTablet = heroVideo.getAttribute('data-video-tablet');
        const dataVideoMobile = heroVideo.getAttribute('data-video-mobile');

        // Get the first element from the returned array of elements with the hero-banner-video source tag
        const heroVideoSource = heroVideo.getElementsByTagName('source')[0];
        
        // Get the window width
        const width = function() {
        return window.innerWidth;
        };

        // Set the screen size from the current window width
        const screenSize = function() {
        return width() >= 1280 ? 'desktop'
        : width() >= 768 ? 'tablet'
        : 'mobile';
        };

        // Update the video source tag
        const setSource = function() {
        // Pause the video
        heroVideo.pause();
        // Check the window size and get the video url
        const videoUrl = width() >= 1280 ? dataVideo
        : width() >= 768 ? dataVideoTablet
        : dataVideoMobile;
        // Update the source tag with the video url
        heroVideoSource.setAttribute('src', videoUrl);
        // Load the video after source has been set
        heroVideo.load();
        };

        // check if the screen size has changed and update the video source
        const onResize = function() {
        const currentWindow = screenSize();
        // Check if the screen size has changed from desktop, tablet or mobile
        if (currentWindow != previousWindow){
            // Update the video source
            setSource();
            // Update previous window
            previousWindow = screenSize();
        }
        };

        // get the screen size
        var previousWindow = screenSize();
        // Set the inital video source on page load
        setSource();
        // Listen for window resize and set the source for the video if screen with changes from desktop, tablet or mobile
        window.addEventListener('resize', onResize);

    }
    const heroBannerVideoButton = document.getElementById('heroBanner-videoButton');
    const playIcon = heroBannerVideoButton.querySelector('.hero-banner__icon--play');
    const pauseIcon = heroBannerVideoButton.querySelector('.hero-banner__icon--pause');

    heroBannerVideoButton.addEventListener('click', function() {
        if (heroVideo.paused) {
            heroVideo.play();
            heroBannerVideoButton.classList.add('is-playing');
            heroBannerVideoButton.setAttribute('aria-label', 'Pause video');
            playIcon.style.display = 'none';
            pauseIcon.style.display = 'block';
        } else {
            heroVideo.pause();
            heroBannerVideoButton.classList.remove('is-playing');
            heroBannerVideoButton.setAttribute('aria-label', 'Play video');
            playIcon.style.display = 'block';
            pauseIcon.style.display = 'none';
        }
    });

})();