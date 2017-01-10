Template.validation.rendered = function(){

    // Set validation rules

    $("#form").validate({
        rules: {
            password: {
                required: true,
                minlength: 3
            },
            url: {
                required: true,
                url: true
            },
            number: {
                required: true,
                number: true
            },
            min: {
                required: true,
                minlength: 6
            },
            max: {
                required: true,
                maxlength: 4
            }
        },
        messages: {
            email: {
                required: "Custom message for required",
                email: "Custom message for proper email address"
            }
        }
    });
};