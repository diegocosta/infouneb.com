(function($){

    $(document).on('ready', function(){

        $(document).foundation();

        var MediaQueryBreakpoint = Foundation.MediaQuery.current;

        if(MediaQueryBreakpoint === 'small') {
            $('.about--texto p:nth-child(3), .about--texto p:nth-child(4)').hide();

            $('.about--button-continue').each(function(index, item){
                $this = $(this);
                $this.css('display', 'block');
                $this.on('click', function(event){
                    event.preventDefault();

                    var btn = $(this);

                    if(btn.attr('data-page') == 1){
                        btn.text("Voltar");
                        btn.attr("data-page", 2);
                    }
                    else {
                        btn.text("Continuar Lendo");
                        btn.attr("data-page", 1);
                    }

                    $('.about--texto p').toggle();
                });
            });
        }

        $('.speakers .columns:last-child').addClass('end');

    });
})(jQuery);
