Template.metrics.rendered = function(){

    // Set white background color for top navbar
    $('body').addClass('light-navbar');

    $("#sparkline1").sparkline([34, 43, 43, 35, 44, 32, 44, 52], {
        type: 'line',
        width: '100%',
        height: '60',
        lineColor: '#1ab394',
        fillColor: "#ffffff"
    });

    $("#sparkline2").sparkline([24, 43, 43, 55, 44, 62, 44, 72], {
        type: 'line',
        width: '100%',
        height: '60',
        lineColor: '#1ab394',
        fillColor: "#ffffff"
    });

    $("#sparkline3").sparkline([74, 43, 23, 55, 54, 32, 24, 12], {
        type: 'line',
        width: '100%',
        height: '60',
        lineColor: '#ed5565',
        fillColor: "#ffffff"
    });

    $("#sparkline4").sparkline([24, 43, 33, 55, 64, 72, 44, 22], {
        type: 'line',
        width: '100%',
        height: '60',
        lineColor: '#ed5565',
        fillColor: "#ffffff"
    });

    $("#sparkline5").sparkline([1, 4], {
        type: 'pie',
        height: '140',
        sliceColors: ['#1ab394', '#F5F5F5']
    });

    $("#sparkline6").sparkline([5, 3], {
        type: 'pie',
        height: '140',
        sliceColors: ['#1ab394', '#F5F5F5']
    });

    $("#sparkline7").sparkline([2, 2], {
        type: 'pie',
        height: '140',
        sliceColors: ['#ed5565', '#F5F5F5']
    });

    $("#sparkline8").sparkline([2, 3], {
        type: 'pie',
        height: '140',
        sliceColors: ['#ed5565', '#F5F5F5']
    });
};

Template.metrics.destroyed = function(){
    // Remove special class
    $('body').removeClass('light-navbar');
};