Template.truncate.rendered = function(){

    $(".truncate").dotdotdot({
        watch: 'window'
    });

    $(".truncate1").dotdotdot({
        watch: 'window',
        ellipsis: ' ///...'
    });

    $(".truncate2").dotdotdot({
        watch: 'window',
        wrap: 'letter'
    });

};