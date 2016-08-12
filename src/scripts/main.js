(function($){

    $(document).on('ready', function(){

        $(document).foundation();

        var MediaQueryBreakpoint = Foundation.MediaQuery.current;

        if(MediaQueryBreakpoint === 'small') {
            var about_hidden_content = $('.about--texto p').not('.about--texto p:nth-child(1)');

            about_hidden_content.hide();

            $('.about--button-continue').each(function(index, item){
                $this = $(this);
                $this.css('display', 'block');

                $this.on('click', function(event){
                    event.preventDefault();
                    about_hidden_content.toggle();
                    $this.css('display', 'none');
                });

            });
        }


        $('.speakers').each(function(index, item){
            var speakers = $(this);
            var speakers_style = speakers.data('tab-content-style');

            speakers.addClass(speakers_style);
            speakers.find('[data-tab-content-hide]').hide();

            speakers.find('.speakers--tab--list--item').find('.speakers--tab--list--link').on('click', function(event){
                event.preventDefault();

                var target = $(this).data('tab-link');

                speakers.find('[data-tab-content-for]').hide();
                speakers.find('[data-tab-content-for="' + target + '"]').show();

                speakers_style = speakers.attr('data-tab-content-style');
                speakers.removeClass(speakers_style);

                var speakers_new_style = 'speakers__tab_' + target;

                speakers.addClass(speakers_new_style);
                speakers.attr('data-tab-content-style', speakers_new_style);
            });

        });

        $('.speakers .columns:last-child').addClass('end');

        $('.location .location--map').each(function(){

            var element = this;
            var latlng = new google.maps.LatLng(0,0);
            var canvas = new google.maps.Map(element, {
                zoom: 16,
                center: latlng,
                scrollwheel: false,
                streetViewControl: true,
                labels: true,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            });

            canvas.setCenter(latlng);

            (new google.maps.Geocoder())
                .geocode({ 'address': $(element).attr('data-address')}, function (results, status) {
                    if(status === google.maps.GeocoderStatus.OK) {

                        canvas.setCenter(results[0].geometry.location);

                        new google.maps.Marker({
                            map: canvas,
                            position: results[0].geometry.location,
                            icon: $(element).attr('data-marker')
                        });
                    }
                    else
                        console.log('O Google Maps não foi carregado: ', status);
                });
        });

    });
})(jQuery);
