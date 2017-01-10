Template.tour.rendered = function(){

    // Instance the tour
    var tour = new Tour({
        steps: [{

            element: "#step1",
            title: "Title of my step",
            content: "Introduce new users to your product by walking them through it step by step.",
            placement: "top"
        },
            {
                element: "#step2",
                title: "Title of my step",
                content: "Content of my step",
                placement: "top",
                backdrop: true,
                backdropContainer: '#wrapper',
                onShown: function (tour){
                    $('body').addClass('tour-open')
                },
                onHidden: function (tour){
                    $('body').removeClass('tour-close')
                }
            },
            {
                element: "#step3",
                title: "Title of my step",
                content: "Introduce new users to your product by walking them through it step by step.",
                placement: "bottom"
            },
            {
                element: "#step4",
                title: "Title of my step",
                content: "Introduce new users to your product by walking them through it step by step.",
                placement: "top"
            }
        ]});

    // Initialize the tour
    tour.init();

    $('.startTour').click(function(){
        tour.restart();

        // Start the tour
        // tour.start();
    })

};