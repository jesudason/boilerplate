(function () {
  'use strict';

    const hero_video = document.getElementById('heroBanner-video');
    const hero_banner_video_button = document.getElementById('heroBanner-videoButton');
    const left_path = document.getElementById("left-path");
    const right_path = document.getElementById("right-path");
    hero_banner_video_button.setAttribute("aria-label", "Pause video");

    const pause_left = "M0 0 L6 0 L6 20 L0 20 Z";
    const left_play  = "M0 0 L10 5 L10 15 L0 20 Z";

    const pause_right = "M14 0 L20 0 L20 20 L14 20 Z";
    const right_play  = "M10 5 L20 10 L20 10 L10 15 Z";
    
    hero_banner_video_button.addEventListener('click', () => {
        if (hero_video.paused) {
            hero_video.play();
            left_path.setAttribute("d", pause_left);
            right_path.setAttribute("d", pause_right);
            hero_banner_video_button.setAttribute("aria-label", "Pause video");
            hero_banner_video_button.setAttribute("title", "Pause video");
        } else {
            hero_video.pause();
            left_path.setAttribute("d", left_play);
            right_path.setAttribute("d", right_play);
            hero_banner_video_button.setAttribute("aria-label", "Play video");
            hero_banner_video_button.setAttribute("title", "Play video");
        }
    });




    if(hero_video !== null) {

        const data_video = hero_video.getAttribute('data-video');
        const data_video_tablet = hero_video.getAttribute('data-video-tablet');
        const data_video_mobile = hero_video.getAttribute('data-video-mobile');

        const hero_video_source = hero_video.getElementsByTagName('source')[0];
        
        const width = function() {
        return window.innerWidth;
        };

        const screen_size = function() {
        return width() >= 1280 ? 'desktop'
        : width() >= 768 ? 'tablet'
        : 'mobile';
        };

        const set_source = function() {
        hero_video.pause();
        const video_url = width() >= 1280 ? data_video
        : width() >= 768 ? data_video_tablet
        : data_video_mobile;
        hero_video_source.setAttribute('src', video_url);
        hero_video.load();


        };

        const on_resize = function() {
        const current_window = screen_size();
        if (current_window != previous_window){
            // Update Video
            set_source();
            
            // Update Button State
            left_path.setAttribute("d", pause_left);
            right_path.setAttribute("d", pause_right);
            hero_banner_video_button.setAttribute("aria-label", "Pause video");
            hero_banner_video_button.setAttribute("title", "Pause video");
            
            previous_window = screen_size();
        }
        };

        var previous_window = screen_size();
        set_source();
        window.addEventListener('resize', on_resize);

    }
    
})();