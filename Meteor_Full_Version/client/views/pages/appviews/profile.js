Template.profile.rendered = function(){

    // Set options for peity charts
    $(".line").peity("line",{
        fill: '#1ab394',
        stroke:'#169c81'
    })

    $(".bar").peity("bar", {
        fill: ["#1ab394", "#d7d7d7"]
    })

};