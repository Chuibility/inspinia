Template.emailView.rendered = function(){

    // Set white background color for top navbar
    $('body').addClass('light-navbar');
};

Template.emailView.destroyed = function(){
    // Remove special class for background color
    $('body').removeClass('light-navbar');
};