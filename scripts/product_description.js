$(document).ready(function() {
	var progressBarOptions1 = {
		startAngle: -1.55,
		size: 45,		 
		fill: {
			color: '#fff'
		}
	}

	$('.product_description .circle-d').circleProgress(progressBarOptions1).on('circle-animation-progress', function(event, progress, stepValue) {});
	$( ".product_description .circle-d" ).each(function() {
		var val = $(this).find("input").val()/5; 	

		$(this).circleProgress({
			value : val,
			fill: {
				gradient: ["#ED1C24", "#E95B0B"]
			}
		});
	});

	$(".product_size .sizes").on("click",function() {
		$(".product_size .sizes").removeClass("size_active");
		$(this).addClass("size_active");
	});

	var progressBarOptions2 = {
		startAngle: -1.55,
		size: 45,		 
		fill: {
			color: '#fff'
		}
	}

	$('.circle-e').circleProgress(progressBarOptions2).on('circle-animation-progress', function(event, progress, stepValue) {});
	$( ".circle-e" ).each(function() {
		var val = $(this).find("input").val()/5; 	

		$(this).circleProgress({
			value : val,
			fill: {
				gradient: ["#ED1C24", "#E95B0B"]
			}
		});
	});

	$(".model_slider1").slick({
		dots: false,
		infinite: true,
		slidesToShow: 4,
		arrows: true,
		autoplay: false,
		autoplaySpeed: 5000,
		slidesToScroll: 4,
		responsive: [ 
		{
			breakpoint: 720,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			}
		}
		]
	}); 


	$('.recent_slider').slick({
		centerMode: true,
		dots: true,
		infinite: true,
		slidesToShow: 3,
		arrows: true,
		autoplay: true,
		autoplaySpeed: 5000,
		slidesToScroll: 5,
		centerPadding: '200px',
		responsive: [
		{
			breakpoint: 1000,
			settings: {
				centerPadding: '150px',
				slidesToShow: 2
			}
		},
		{
			breakpoint: 780,
			settings: {
				centerPadding: '230px',
				slidesToShow: 1
			}
		},
		{
			breakpoint: 720,
			settings: {
				centerPadding: '190px',
				slidesToShow: 1
			}
		},
		{
			breakpoint: 600,
			settings: { 
				centerPadding: '150px',
				slidesToShow: 1
			}
		},
		{
			breakpoint: 500,
			settings: { 
				centerPadding: '100px',
				slidesToShow: 1
			}
		},
		{
			breakpoint: 420,
			settings: { 
				centerMode: false,
				centerPadding: '30px',
				slidesToShow: 1
			}
		}
		] 
	});

	$('.model_slider1 .slick-prev').html('<span class="icon-Previous"></span>');
	$('.model_slider1 .slick-next').html('<span class="icon-Next"></span>');
	
	$("#img_01").elevateZoom({gallery:'gal1', cursor: 'pointer', galleryActiveClass: 'active', imageCrossfade: true}); 
	$("#img_01").bind("click", function(e) {  
		var ez =   $('#img_01').data('elevateZoom');	
		$.fancybox(ez.getGalleryList());
		return false;
	});

});