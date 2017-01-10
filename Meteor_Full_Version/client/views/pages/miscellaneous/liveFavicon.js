Template.liveFavicon.events({


    // Handle favicon change function

    'click #iconExample1': function(){
        Tinycon.setBubble(1);
        Tinycon.setOptions({
            background: '#f03d25'
        });
    },

    'click #iconExample2': function(){
        Tinycon.setBubble(1000);
        Tinycon.setOptions({
            background: '#f03d25'
        });
    },

    'click #iconExample3': function(){
        Tinycon.setBubble('In');
        Tinycon.setOptions({
            background: '#f03d25'
        });
    },

    'click #iconExample4': function(){
        Tinycon.setOptions({
            background: '#e0913b'
        });
        Tinycon.setBubble(8);
    }

});

