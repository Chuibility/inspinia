Template.passwordMeter.rendered = function(){

    // Example 1
    var options1 = {};
    options1.ui = {
        container: "#pwd-container1",
        showVerdictsInsideProgressBar: true,
        viewports: {
            progress: ".pwstrength_viewport_progress"
        }
    };
    options1.common = {
        debug: false,
    };
    $('.example1').pwstrength(options1);

    // Example 2
    var options2 = {};
    options2.ui = {
        container: "#pwd-container2",
        showStatus: true,
        showProgressBar: false,
        viewports: {
            verdict: ".pwstrength_viewport_verdict"
        }
    };
    $('.example2').pwstrength(options2);

    // Example 3
    var options3 = {};
    options3.ui = {
        container: "#pwd-container3",
        showVerdictsInsideProgressBar: true,
        viewports: {
            progress: ".pwstrength_viewport_progress2"
        }
    };
    options3.common = {
        debug: true,
        usernameField: "#username"
    };
    $('.example3').pwstrength(options3);

    // Example 4
    var options4 = {};
    options4.ui = {
        container: "#pwd-container4",
        viewports: {
            progress: ".pwstrength_viewport_progress4",
            verdict: ".pwstrength_viewport_verdict4"
        }
    };
    options4.common = {
        zxcvbn: true,
        zxcvbnTerms: ['samurai', 'shogun', 'bushido', 'daisho', 'seppuku'],
        userInputs: ['#year', '#familyname']
    };
    $('.example4').pwstrength(options4);


};