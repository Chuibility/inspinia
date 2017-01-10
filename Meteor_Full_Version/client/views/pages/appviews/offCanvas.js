Template.offCanvas.rendered = function(){

    // Add special class for off canvas menu layout
    $('body').addClass('canvas-menu');

    // Initialize slimScroll for left navigation
    $('.sidebar-collapse').slimScroll({
        height: '100%',
        railOpacity: 0.9
    });

};

Template.offCanvas.destroyed = function(){

    // Remove special off canvas class
    $('body').removeClass('canvas-menu');


    // Destroy slim scroll from left navigation
    $('.sidebar-collapse').slimScroll({
        destroy:true
    });

    // Remove inline style form slimScroll
    $('.sidebar-collapse').removeAttr("style");

    // Get back to normal stat of left navigation
    $('body').removeClass('mini-navbar');
};
