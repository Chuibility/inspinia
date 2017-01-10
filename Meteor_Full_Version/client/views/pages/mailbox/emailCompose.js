Template.emailCompose.rendered = function(){

    // Set white background color for top navbar
    $('body').addClass('light-navbar');

    // Initialize summernote plugin
    $('.summernote').summernote();

};


Template.emailCompose.destroyed = function(){

    // Remove special class for backgrount color
    $('body').removeClass('light-navbar');
};