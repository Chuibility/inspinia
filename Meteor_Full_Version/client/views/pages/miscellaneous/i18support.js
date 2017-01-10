Template.i18support.rendered = function(){

    $.i18n.init({
        resGetPath: 'locales/__lng__.json',
        load: 'unspecific',
        fallbackLng: false,
        lng: 'en'
    }, function (t){
        $('.i18container').i18n();
        $('#side-menu').i18n();
        $('.navbar-top-links').i18n();
    });

    $('.set_en').on('click', function (){
        i18n.setLng('en', function(){
            $('.i18container').i18n();
            $('#side-menu').i18n();
            $('.navbar-top-links').i18n();

            $('.set_en').addClass('active');
            $('.set_es').removeClass('active');
        });
    });

    $('.set_es').on('click', function (){
        i18n.setLng('es', function(){
            $('.i18container').i18n();
            $('#side-menu').i18n();
            $('.navbar-top-links').i18n();

            $('.set_es').addClass('active');
            $('.set_en').removeClass('active');
        });
    })


};


