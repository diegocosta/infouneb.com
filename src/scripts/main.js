(function($){
    $(document).on('ready', function(){

        $('.sobre-o-evento--texto p:nth-child(3), .sobre-o-evento--texto p:nth-child(4)').hide();

        $('.sobre-o-evento--button-continue').each(function(index, item){
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

                $('.sobre-o-evento--texto p').toggle();
            });
        });

        $('.speakers .columns:last-child').addClass('end');

    });
})(jQuery);
