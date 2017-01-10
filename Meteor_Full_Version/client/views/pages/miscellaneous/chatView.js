Template.chatView.rendered = function(){

    // Initialize slimscroll for small chat
    $('.small-chat-box .content').slimScroll({
        height: '234px',
        railOpacity: 0.4
    });

};

Template.chatView.events({

    // Handle small chat show/close
   'click .open-small-chat': function(){
       $('.small-chat-icon').toggleClass('fa-comments').toggleClass('fa-remove');
       $('.small-chat-box').toggleClass('active');
   }

});