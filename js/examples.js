(function() {

    var images = [];

    console.log('images', images);

    //fullScreen();
    //forceEarlyImageLoad();
    reactDemo();
    boringDemo();

    function toggleFullScreen() {
        if (!document.fullscreenElement &&    // alternative standard method
            !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement ) {  // current working methods
            if (document.documentElement.requestFullscreen) {
                document.documentElement.requestFullscreen();
            } else if (document.documentElement.msRequestFullscreen) {
                document.documentElement.msRequestFullscreen();
            } else if (document.documentElement.mozRequestFullScreen) {
                document.documentElement.mozRequestFullScreen();
            } else if (document.documentElement.webkitRequestFullscreen) {
                document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
            }
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            }
        }
    }

    function fullScreen() {

        document.getElementById('demo-title').onclick = function() {
            toggleFullScreen();
        }

    }

    function preloadImages(imageSources) {

        for( var i=0; i < imageSources.length; i++ ) {

            var image = new Image();

            image.src = imageSources[i];

            console.log('preload', image.src);

            images.push( image );

        }

    }

    /**
     * This is to get around a problem whereby the iPhone frame image is not showing up for ages, after all the videos
     * etc are downloaded.
     */
    function forceEarlyImageLoad() {

        preloadImages(['img/iphone-frame-portrait.png']);

    }

    function reactDemo() {

        document.getElementById('react-touch-demo').addEventListener('loadedmetadata', function() {
            this.currentTime = 43;
        }, false);

    }

    function boringDemo() {

        var menuButton = document.getElementsByClassName('menu-toggle')[0],
            menu = document.getElementsByClassName('menu')[0];

        menuButton.onclick = function(event) {

            if( menu.classList.contains('reveal') ) {
                menu.classList.remove('reveal');
            } else {
                menu.classList.add('reveal');
            }

            event.preventDefault();

        }

    }

})();