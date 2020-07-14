//slidck slider
$(document).ready(function () {
    $('.single-item').slick({
        speed: 800,
        autoplay: true,
        autoplaySpeed: 12000,
    });
});

//page scrool animation

$(document).ready(function () {
    $(".scroll").click(function (event) {
        event.preventDefault();
        $('html,body').animate({ scrollTop: $(this.hash).offset().top }, 1000);
    });
});
//page scrool animation over
//slider gardiant bg
$(document).ready(function () {
    $(".main-hero").gradientify({
        gradients: [
             { start: [255, 103, 69], stop: [28, 23, 115] },
            { start: [124, 234, 134], stop: [1, 103, 179] },
            { start: [255, 56, 111], stop: [254, 85, 20] }
        ]
    });
});
//height= window height
$(document).ready(function () {
    function setHeight() {
        windowHeight = $(window).innerHeight();
        $('.main-hero').css('min-height', windowHeight);
    };
    setHeight();
    $(window).resize(function () {
        setHeight();
    });
});
        if ($(window).width() < 768) {
            function setHeight() {
                auto = $(window).innerHeight();
                $('.main-hero').css('min-height', auto);
            };
            setHeight();

            $(window).resize(function () {
                setHeight();
            });
        }
//slider animation
document.addEventListener('DOMContentLoaded', function () {
    particleground(document.getElementById('particles'), {
    
    });
    var intro = document.getElementById('intro');
    intro.style.marginTop = -intro.offsetHeight / 2 + 'px';
}, false);
//slider animation over


