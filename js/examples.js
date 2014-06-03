(function() {

    reactDemo();
    boringDemo();

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