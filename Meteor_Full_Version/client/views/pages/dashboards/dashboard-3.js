Template.dashboard3.rendered = function(){

    // Set white background color for top navbar
    $('body').addClass('light-navbar');

    // Set special clsss to wraper to add  margin for right sidebar
    $('#page-wrapper').addClass('sidebar-content');


    // Set the full height of right sidebar
    $(window).bind("load resize scroll", function () {
        calcSidebarHeight();
    });


    var lineData = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
            {
                label: "Example dataset",
                backgroundColor: "rgba(26,179,148,0.5)",
                borderColor: "rgba(26,179,148,0.7)",
                pointBackgroundColor: "rgba(26,179,148,1)",
                pointBorderColor: "#fff",
                data: [28, 48, 40, 19, 86, 27, 90]
            },
            {
                label: "Example dataset",
                backgroundColor: "rgba(220,220,220,0.5)",
                borderColor: "rgba(220,220,220,1)",
                pointBackgroundColor: "rgba(220,220,220,1)",
                pointBorderColor: "#fff",
                data: [65, 59, 80, 81, 56, 55, 40]
            }
        ]
    };

    var lineOptions = {
        responsive: true
    };


    var ctx = document.getElementById("lineChart").getContext("2d");
    new Chart(ctx, {type: 'line', data: lineData, options:lineOptions});

    // Set data and options for peity (small) charts

    $(".line").peity("line",{
        fill: '#1ab394',
        stroke:'#169c81'
    });

    $(".bar").peity("bar", {
        fill: ["#1ab394", "#d7d7d7"]
    });

    $(".bar_dashboard").peity("bar", {
        fill: ["#1ab394", "#d7d7d7"],
        width:100
    })


};

Template.dashboard3.destroyed = function(){

    // Remove extra view class
    $('body').removeClass('light-navbar');
    $('#page-wrapper').removeClass('sidebar-content');
};

function calcSidebarHeight() {
    var heightWithoutNavbar = $("#wrapper").height() - 61;
    $(".sidebar-panel").css("min-height", heightWithoutNavbar + "px");
}