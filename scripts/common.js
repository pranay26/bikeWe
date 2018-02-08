var productValues;
var productAction;
$(document).ready(function(){
	windowHeightFunction();
	/*rating*/
	
	var progressBarOptions = {
		startAngle: -1.55,
		size: 25,		 
		fill: {
			color: '#ccc'
		}
	}

	$('.circle-c').circleProgress(progressBarOptions).on('circle-animation-progress', function(event, progress, stepValue) {});
	$( ".circle-c" ).each(function() {
		var val = $(this).find("input").val()/5; 	

		$(this).circleProgress({
			value : val,
			fill: {
				gradient: ["#ED1C24", "#E95B0B"]
			}
		});
	});
	
	/*End rating*/

	$(".slide_cart" ).mouseover(function() {
		$(this).find( ".buy_now" ).slideDown();

		$(this).find(".cart_section").css("box-shadow","rgba(0, 0, 0, 0.1) 0px 2px 15px 2px");
		var heig = $(".cart_section").height();

/*	$(".recent_slider .buy_now").css("top","100%");
*/	});


	

	/*LOGIN CHECK*/
	$("span.cart_icon").on("click",function(){
		var loginCheck = $("#login_popup").attr("data-login");
		if(loginCheck == "false"){
			$("#login_popup").addClass("active");
		}
		else {	
			//check if product is already added
			if($(this).hasClass('active')==true) {
				productAction = "remove";
			}
			else {
				productAction = "add";
			}
			$(this).toggleClass("active");
			//add to wishlist
			if($(this).attr('id')=="add-to-wishlist-btn") {
				if($(this).attr('data-wishlist-action')=="remove") {
					productValues = $(this).closest('.product-wrapper').find('.remove-form').serializeArray();
				}
				else {
					productValues = $(this).closest('.product-wrapper').find('.product-form').serializeArray();
				}
				addToWishlist(productAction);
			}
			//add to cart
			if($(this).attr('id')=="add-to-cart-btn") {
				addToCart();
			}
		}
	});
	/*END LOGIN CHECK*/



	$(".slide_cart" ).mouseleave(function() {
		$(this).find( ".buy_now" ).slideUp();
		$(this).find(".cart_section").css("box-shadow","none");
	});

	/*Close Popup*/

	$(".popup_close_button").on("click",function(){
		$(this).parent(".webike_popup").removeClass("active");
	});

	/*End Close Popup*/

});

function windowHeightFunction(){
	/*if($(window).width() > 1200)
    {
        var headerHeight = $('.webike_header').innerHeight();
        var footerHeight = $('.webike_footer').innerHeight();
        var contentHeight = $(window).height();
        var totalHeight = contentHeight - (headerHeight + footerHeight);
        $('.webike_content_wrapper').css('min-height', totalHeight + 'px');
    }*/
}

function addToWishlist(productAction) {
	var actionUrl = '';
	if(productAction=='add') {
		actionUrl = '/add-to-wishlist';
	}
	else if(productAction=='remove') {
		actionUrl = '/remove-from-wishlist';
	}
	else {
		actionUrl = "NA";
	}
	// alert(actionUrl);
	$.ajaxSetup({
      headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
      }
    });
    $.ajax({
       type:'POST',
       url:actionUrl,
       data : productValues,
       success:function(data){
            // console.log(data);
       },
       error: function(xhr, status, error) {
       	  alert("error");
          var responseText = xhr.responseText;
          console.log(responseText);
       }
    });
    //
}


function addToCart() {
	alert('add to cart');
}