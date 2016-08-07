$(document).ready(function() {

    function loop() {
        $('#cloud').css({right:0});
        $('#cloud').animate ({
            right: '+1400',
        }, 6000, 'linear', function() {
            loop();
        });
    }
        
    loop();
 });