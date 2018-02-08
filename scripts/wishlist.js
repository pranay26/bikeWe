$(document).ready(function(){
	/*--SELECT ALL ITEMS--*/
	$("#wishlist_selectallitems").change(function(){  
		$(".wishlist_item .checkbox-custom").prop('checked', $(this).prop("checked")); 
	});

	$('.wishlist_item .checkbox-custom').change(function(){ 
		if(false == $(this).prop("checked")){ 
			$("#wishlist_selectallitems").prop('checked', false); 
		}

		if ($('.wishlist_item .checkbox-custom:checked').length == $('.wishlist_item .checkbox-custom').length ){
			$("#wishlist_selectallitems").prop('checked', true);
		}
	});

	$('.wishlist_item .form_checkbox .checkbox-custom').each(function(i){
		$(this).attr('id' , 'wishlistitem' + (i+1));  
	});

	$('.wishlist_item .form_checkbox .checkbox-custom-label').each(function(i){
		$(this).attr('for' , 'wishlistitem' + (i+1));  
	});

	/*--END SELECT ALL ITEMS--*/

	$(".removecart_item").on("click",function(){
		$(this).parents(".wishlist_item").fadeOut();
	});

	$("#deleteallproducts_button").on("click",function(){
		$(".wishlist_item").fadeOut();
	});


	/*AddCart*/
	var count = 0;

	$('.movetocart_button').on('click', function () {
		var cart = $('.header_cart_menu span');
		var imgtodrag = $(this).parents('.wishlist_item').find(".product_image_wrapper img").eq(0);
		if (imgtodrag) {
			var imgclone = imgtodrag.clone()
			.offset({
				top: imgtodrag.offset().top,
				left: imgtodrag.offset().left
			})
			.css({
				'opacity': '0.5',
				'position': 'absolute',
				'height': '150px',
				'width': '150px',
				'z-index': '100'
			})
			.appendTo($('body'))
			.animate({
				'top': cart.offset().top + 10,
				'left': cart.offset().left + 10,
				'width': 75,
				'height': 75
			}, 1000, 'easeInOutExpo');

			setTimeout(function () {
				cart.effect("shake", {
					times: 2
				}, 200);
				count++;
    $(".header_cart_menu span").html("<b>"+count+"</b>");
			}, 1500);

			imgclone.animate({
				'width': 0,
				'height': 0
			}, function () {
				$(this).detach()
			});
		}
	});
});