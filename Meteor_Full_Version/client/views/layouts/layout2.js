Template.layout2.rendered = function(){

    // Add special class for handel top navigation layout
    $('body').addClass('top-navigation');

}

Template.layout2.destroyed = function(){

    // Remove special top navigation class
    $('body').removeClass('top-navigation');
};