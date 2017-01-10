Template.timelineTwo.events({

    // Timeline options buttons

    'click #lightVersion' : function(event){
        event.preventDefault()
        $('#ibox-content').removeClass('ibox-content');
        $('#vertical-timeline').removeClass('dark-timeline');
        $('#vertical-timeline').addClass('light-timeline');
    },

    'click #darkVersion' : function(event){
        event.preventDefault()
        $('#ibox-content').addClass('ibox-content');
        $('#vertical-timeline').removeClass('light-timeline');
        $('#vertical-timeline').addClass('dark-timeline');
    },

    'click #leftVersion' : function(event){
        event.preventDefault()
        $('#vertical-timeline').toggleClass('center-orientation');
    }

});