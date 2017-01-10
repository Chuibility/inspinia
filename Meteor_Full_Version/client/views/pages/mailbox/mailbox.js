Template.mailbox.rendered = function(){

    // Set white background color for top navbar
    $('body').addClass('light-navbar');

    // Initialize i-check plugin
    $('.i-checks').iCheck({
        checkboxClass: 'icheckbox_square-green',
        radioClass: 'iradio_square-green',
    });
};

Template.mailbox.destroyed = function(){

    // Remove special class for background color
    $('body').removeClass('light-navbar');
};