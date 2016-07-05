(function($){
    $(document).on('ready', function(){

        $('.sobre-o-evento--button-continue').on('click', function(event){
            event.preventDefault();

            $('.sobre-o-evento--texto p').toggle();

        });

    });
})(jQuery);
