Template.dashboard1.helpers({

    // For demo purpose
    // Example of notification list
    notifications : [
        {number: 1, labelClass: 'success', content: 'Please contact me', time: '09:00 pm'},
        {number: 2, labelClass: 'info', content: 'Sign a contract', time: '10:16 am'},
        {number: 3, labelClass: 'primary', content: 'Open new shop', time: '08.22 pm'},
        {number: 4, labelClass: 'default', content: 'Call back to Sylvia', time: '11:06 pm'},
        {number: 5, labelClass: 'primary', content: 'Write a letter to Sandra', time: '12:00 pm'}
    ]

});

Template.dashboard1.rendered = function(){

    var doughnutData = {
        labels: ["App","Software","Laptop" ],
        datasets: [{
            data: [300,50,100],
            backgroundColor: ["#a3e1d4","#dedede","#9CC3DA"]
        }]
    } ;


    var doughnutOptions = {
        responsive: false,
        legend: {
            display: false
        }
    };


    var ctx4 = document.getElementById("doughnutChart").getContext("2d");
    new Chart(ctx4, {type: 'doughnut', data: doughnutData, options:doughnutOptions});

    var doughnutData = {
        labels: ["App","Software","Laptop" ],
        datasets: [{
            data: [70,27,85],
            backgroundColor: ["#a3e1d4","#dedede","#9CC3DA"]
        }]
    } ;


    var doughnutOptions = {
        responsive: false,
        legend: {
            display: false
        }
    };


    var ctx4 = document.getElementById("doughnutChart2").getContext("2d");
    new Chart(ctx4, {type: 'doughnut', data: doughnutData, options:doughnutOptions});


    // Options/data for flot chart
    var data1 = [
        [0,4],[1,8],[2,5],[3,10],[4,4],[5,16],[6,5],[7,11],[8,6],[9,11],[10,30],[11,10],[12,13],[13,4],[14,3],[15,3],[16,6]
    ];
    var data2 = [
        [0,1],[1,0],[2,2],[3,0],[4,1],[5,3],[6,1],[7,5],[8,2],[9,3],[10,2],[11,1],[12,0],[13,2],[14,8],[15,0],[16,0]
    ];

    $("#flot-dashboard-chart").length && $.plot($("#flot-dashboard-chart"), [
            data1, data2
        ],
        {
            series: {
                lines: {
                    show: false,
                    fill: true
                },
                splines: {
                    show: true,
                    tension: 0.4,
                    lineWidth: 1,
                    fill: 0.4
                },
                points: {
                    radius: 0,
                    show: true
                },
                shadowSize: 2
            },
            grid: {
                hoverable: true,
                clickable: true,
                tickColor: "#d5d5d5",
                borderWidth: 1,
                color: '#d5d5d5'
            },
            colors: ["#1ab394", "#1C84C6"],
            xaxis:{
            },
            yaxis: {
                ticks: 4
            },
            tooltip: false
        }
    );

    // Options and data for sparkline charts
    $("#sparkline8").sparkline([5, 6, 7, 2, 0, 4, 2, 4, 5, 7, 2, 4, 12, 14, 4, 2, 14, 12, 7], {
        type: 'bar',
        barWidth: 8,
        height: '150px',
        barColor: '#1ab394',
        negBarColor: '#c6c6c6'}
    );

    $(".bar_dashboard").peity("bar", {
        fill: ["#1ab394", "#d7d7d7"],
        width:100
    });

    var updatingChart = $(".updating-chart").peity("line", { fill: '#1ab394',stroke:'#169c81', width: 64 })

    setInterval(function() {
        var random = Math.round(Math.random() * 10)
        var values = updatingChart.text().split(",")
        values.shift()
        values.push(random)

        updatingChart
            .text(values.join(","))
            .change()
    }, 1000);

};