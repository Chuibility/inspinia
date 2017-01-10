Template.autocomplete.rendered = function(){


    $('.typeahead_1').typeahead({
        source: ["item 1","item 2","item 3"]
    });

    $.get('/api/typehead_collection.json', function(data){
        $(".typeahead_2").typeahead({ source:data.countries });
    },'json');

    $('.typeahead_3').typeahead({
        source: [
            {"name": "Afghanistan", "code": "AF", "ccn0": "040"},
            {"name": "Land Islands", "code": "AX", "ccn0": "050"},
            {"name": "Albania", "code": "AL","ccn0": "060"},
            {"name": "Algeria", "code": "DZ","ccn0": "070"}
        ]
    });

};