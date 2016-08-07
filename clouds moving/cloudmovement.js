$(document).ready(function() {

    function loop() {
        $('#cloudOne').css({left:0});
        $('#cloudOne').animate ({
            left: '2000',
        }, 10000, 'linear', function() {
            loop();
        });

        $('#cloudThree').css({left:-500});
        $('#cloudThree').animate ({
            left: '2000',
        }, 10000, 'linear', function() {
            loop();
        });


        $('#cloudTwo').css({left:-1000});
        $('#cloudTwo').animate ({
            left: '2000',
        }, 10000, 'linear', function() {
            loop();
        });


    }

    loop();
 });
