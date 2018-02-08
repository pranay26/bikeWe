$(document).ready(function(){
	$("span.more_item_btn").on("click",function(){
		$(this).parent().find(".order_more_item").not(':first').slideToggle();
		$(this).toggleClass("active");
		$(this).parent(".more_items").toggleClass("active");
		$(this).toggleClass("icon-Minus").toggleClass("icon-Plus");
	});
	$(".myorder_item.more_items").find(".order_more_item").not(':first').addClass("moreorder_item");

	$(".myorder_viewdetails").on("click",function(){
		$(this).toggleClass("active");
		$(this).parents(".myorder_item_details_card").find(".track_order_wrapper").slideToggle();
	});

	$(".return_product_btn").on("click",function(){
		$("#return_order_popup").addClass("active");
	});

	$("#returnorder_btn").on("click",function(){
		$("#return_order_popup").removeClass("active");
	});

	$("#cancelorder_popup_btn").on("click",function(){
		$("#cancel_order_popup").removeClass("active");
		$(".cancel_order_notification").addClass("active").delay(2000).queue(function(){
			$(this).removeClass("active").dequeue();
		});
	});

	$(".cancel_order_btn").on("click",function(){
		$("#cancel_order_popup").addClass("active");
	});
	
	$(".rate_review_btn").on("click",function(){
		$("#rating_popup").addClass("active");
	});

	$("#rating_submit").on("click",function(){
		$("#rating_popup").removeClass("active");
	});

	$("div#rating_popup .c100").on("click",function(){
		$("div#rating_popup .c100").removeClass("active");
		$(this).addClass("active");
	});

	if ($(window).width() < 750) {
		$(".myorder_item_details_card").each(function(){
			$(this).append('<div class="btn_wrapper"/>'); 
			$(this).find(".outline_button.cancel_order_btn").appendTo($(this).find(".btn_wrapper"));
			$(this).find(".myorder_cancel_order").appendTo($(this).find(".myorder_item_name_details"));
			$(this).find(".rate_review_btn,.return_product_btn").appendTo($(this).find(".btn_wrapper"));
		});
	}

});