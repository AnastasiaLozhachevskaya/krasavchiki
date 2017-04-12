$(document).ready(function () {
	$('.hamburger').click(function() {
		$(this).toggleClass('is-active');
		$('.js-navigation').toggleClass('active')
	})


	appear({
		elements: function elements(){
		    return document.getElementsByClassName('track');
		},
		appear: function appear(decimal){
		    $('.js-decimal').countTo({
		    	speed: 2000
		    });
		},
		bounds: 200,
	});

	$('.js-link').on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        var target = $(this).attr('href');
        $(target).velocity('scroll', {
            duration: 800,
            offset: -60,
            easing: 'ease-in-out'
        });
        $('.js-link').removeClass('active');
        $(this).addClass('active');
    });

	$('.popup-youtube').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});


	
})