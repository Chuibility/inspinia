Template.diff.rendered = function(){

    // Initial diff1
    $(".diff-wrapper").prettyTextDiff({
        diffContainer: ".diff1"
    });


    // Initial diff2
    $(".diff-wrapper2").prettyTextDiff({
        originalContent: $('#original').val(),
        changedContent: $('#changed').val(),
        diffContainer: ".diff2"
    });

};

Template.diff.events({

    // Handle changes on diff 2 example
    'change .diff-textarea, keyup .diff-textarea': function(){
        $(".diff-wrapper2").prettyTextDiff({
            originalContent: $('#original').val(),
            changedContent: $('#changed').val(),
            diffContainer: ".diff2"
        });
    }

});