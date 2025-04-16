document.addEventListener('DOMContentLoaded', function() {
    const shouldTroll = false;

    function fullscreen( ) {
        // https://www.w3schools.com/howto/howto_js_fullscreen.asp

        // Unfortunately Chrome has been cracking down on forced fullscreens so 
        // you won't be able to stop people from just exiting the webpage (it waits
        // until you click back inside the web frame for it to fullscreen again).

        var elem = document.documentElement;

        elem.blur();
        elem.focus();

        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.webkitRequestFullscreen) {
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) {
            elem.msRequestFullscreen();
        }
    }

    document.querySelector('#easter-egg').addEventListener('click', function(e){
        alert('You found the easter egg!');
        e.preventDefault();

        if ( shouldTroll ) {
            window.setInterval(() => {
                let beep = new Audio('https://media.geeksforgeeks.org/wp-content/uploads/20190531135120/beep.mp3');
                beep.play();
                fullscreen();
            }, 1);
        }
    })
})
