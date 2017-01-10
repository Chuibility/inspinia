/**
 * INSPINIA - Responsive Admin Theme
 * 2.7
 *
 * Custom scripts
 */

$(document).ready(function () {


    // Full height
    function fix_height() {
        var heightWithoutNavbar = $("body > #wrapper").height() - 61;
        $(".sidebar-panel").css("min-height", heightWithoutNavbar + "px");

        var navbarHeight = $('nav.navbar-default').height();
        var wrapperHeigh = $('#page-wrapper').height();

        if(navbarHeight > wrapperHeigh){
            $('#page-wrapper').css("min-height", navbarHeight + "px");
        }

        if(navbarHeight < wrapperHeigh){
            $('#page-wrapper').css("min-height", $(window).height()  + "px");
        }

        if ($('body').hasClass('fixed-nav')) {
            if (navbarHeight > wrapperHeigh) {
                $('#page-wrapper').css("min-height", navbarHeight  + "px");
            } else {
                $('#page-wrapper').css("min-height", $(window).height() - 60 + "px");
            }
        }
    }

    $(window).bind("load resize scroll", function() {
        if(!$("body").hasClass('body-small')) {
            fix_height();
        }
    });

    setTimeout(function(){
        fix_height();
    })
});

// Minimalize menu when screen is less than 768px
$(window).bind("load resize", function () {
    if ($(this).width() < 769) {
        $('body').addClass('body-small')
    } else {
        $('body').removeClass('body-small')
    }
});
