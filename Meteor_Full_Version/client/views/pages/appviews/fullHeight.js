Template.fullHeight.rendered = function(){

    // Add special class for full height
    $('body').addClass('fixed-sidebar');
    $('body').addClass('full-height-layout');

    // Set the height of the wrapper
    $('#page-wrapper').css("min-height", $(window).height()  + "px");

    // Add slimScroll to element
    $('.full-height-scroll').slimscroll({
        height: '100%'
    });

    // Add slimScroll to left navigation
    $('.sidebar-collapse').slimScroll({
        height: '100%',
        railOpacity: 0.9
    });
};

Template.fullHeight.destroyed = function(){

    // Remove special class for full height
    $('body').removeClass('fixed-sidebar');
    $('body').removeClass('full-height-layout');

    // Destroy slimScroll for left navigation
    $('.sidebar-collapse').slimScroll({
        destroy:true
    });

    // Remove inline style form slimScroll
    $('.sidebar-collapse').removeAttr("style");
};