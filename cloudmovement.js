$(document).ready(function() {

    function loop() {
        $('#cloud').css({left:0});
        $('#cloud').animate ({
            left: '2000',
        }, 10000, 'linear', function() {
            loop();
        });
    }
        
    loop();
 });