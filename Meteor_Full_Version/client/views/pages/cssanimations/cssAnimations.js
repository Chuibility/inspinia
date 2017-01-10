Template.cssAnimations.rendered = function(){


    // Initialize Rickshaw chart
    var graph2 = new Rickshaw.Graph( {
        element: document.querySelector("#rickshaw_multi"),
        renderer: 'area',
        stroke: true,
        series: [ {
            data: [ { x: 0, y: 2 }, { x: 1, y: 5 }, { x: 2, y: 8 }, { x: 3, y: 4 }, { x: 4, y: 8 } ],
            color: '#1ab394',
            stroke: '#17997f'
        }, {
            data: [ { x: 0, y: 13 }, { x: 1, y: 15 }, { x: 2, y: 17 }, { x: 3, y: 12 }, { x: 4, y: 10 } ],
            color: '#eeeeee',
            stroke: '#d7d7d7'
        } ]
    } );
    graph2.renderer.unstack = true;
    graph2.render();
};

Template.cssAnimations.events({

    // Add click handle for change animations
    'click .animation_select' : function(event){
        event.preventDefault();
        var animationBox = $('#animation_box');
        animationBox.removeAttr('class').attr('class', '');
        var animation = $(event.target).attr("data-animation");
        animationBox.addClass('animated');
        animationBox.addClass(animation);
    }

});