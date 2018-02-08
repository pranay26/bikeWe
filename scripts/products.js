$(document).ready(function() {
	/*if ($(window).width() < 750) {
		$(".morph-button-modal .morph-content").append($(".filter_section"));

	}*/

	$(".filter_accordion .accordian_content").on("click",function(event){
		event.stopPropagation();
	});
	var accordion = {
		init: function() {
			$(".filter_accordion li:not(.active) .accordian_content").hide();
			this.bindUIActions();
		},
		bindUIActions: function() {
			$("body").on("click", ".filter_accordion li", accordion.handlers.accordionToggle);
		},
		handlers: {
			accordionToggle: function () {
				"use strict";
				var $li = $(this),
				isThisActive = $li.hasClass("active"),
				$active;
				if ( isThisActive ) {
					$li.find(".btnAccordionToggle").removeClass("icon-Minus").addClass("icon-Plus");
					$li.removeClass("active").children(".accordian_content").slideUp();
				} else {
					$active = $li.siblings(".active");
					$active.find(".btnAccordionToggle").removeClass("icon-Minus").addClass("icon-Plus");
					$active.removeClass("active").children(".accordian_content").slideUp();
					$li.addClass("active").children(".accordian_content").slideDown();
					$li.find(".btnAccordionToggle").removeClass("icon-Plus").addClass("icon-Minus");
				}
			}
		}
	}
	accordion.init();

	function responsivefilter() {
		if($('.responsive_filter').offset().top + $('.responsive_filter').height() 
			>= $('.webike_footer').offset().top - 10)
			$('.responsive_filter').css('position', 'relative');
		if($(document).scrollTop() + window.innerHeight < $('.webike_footer').offset().top)
			$('.responsive_filter').css('position', 'fixed'); 
		// restore when you scroll up
	}
	$(document).scroll(function() {
		responsivefilter();
	});

	/*$(".filter_button").on("click",function() {
		$(".filter_section").addClass("filter_active");
		$(".filter_button").css("display","none");
	});*/
	/*$(".close_filter").on("click",function() {
		$(".filter_section").removeClass("filter_active");
		$(".filter_button").css("display","block");
	});*/
	$(".brands .brad_type").on("click",function() {
		$(".brands .brad_type").removeClass("active");
		$(this).addClass("active");
	});

	
});

(function() {
			var docElem = window.document.documentElement, didScroll, scrollPosition;


			function noScrollFn() {
				window.scrollTo( scrollPosition ? scrollPosition.x : 0, scrollPosition ? scrollPosition.y : 0 );
			}

			function noScroll() {
				window.removeEventListener( 'scroll', scrollHandler );
				window.addEventListener( 'scroll', noScrollFn );
			}

			function scrollFn() {
				window.addEventListener( 'scroll', scrollHandler );
			}

			function canScroll() {
				window.removeEventListener( 'scroll', noScrollFn );
				scrollFn();
			}

			function scrollHandler() {
				if( !didScroll ) {
					didScroll = true;
					setTimeout( function() { scrollPage(); }, 60 );
				}
			};

			function scrollPage() {
				scrollPosition = { x : window.pageXOffset || docElem.scrollLeft, y : window.pageYOffset || docElem.scrollTop };
				didScroll = false;
			};

			scrollFn();

			[].slice.call( document.querySelectorAll( '.morph-button' ) ).forEach( function( bttn ) {
				new UIMorphingButton( bttn, {
					closeEl : '.close_filter',
					onBeforeOpen : function() {
							// don't allow to scroll
							noScroll();
						},
						onAfterOpen : function() {
							// can scroll again
							canScroll();
						},
						onBeforeClose : function() {
							// don't allow to scroll
							noScroll();
						},
						onAfterClose : function() {
							// can scroll again
							canScroll();
						}
					} );
			} );

			
			[].slice.call( document.querySelectorAll( 'form button' ) ).forEach( function( bttn ) { 
				bttn.addEventListener( 'click', function( ev ) { ev.preventDefault(); } );
			} );
		})();