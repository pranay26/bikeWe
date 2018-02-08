$(document).ready(function(){
	/*--ITEM ADD FUNCTION--*/
    $('.quantityplus').click(function(e){
       e.preventDefault();
       fieldName = $(this).attr('field');
       var qty = $(this).closest('.cart_item').find('.quantity');
       var currentVal = parseInt(qty.val());
       if (!isNaN(currentVal)) {
           qty.val(currentVal + 1);
       } else {
           qty.val(1);
       }
       qty.trigger('change');
   });

    $(".quantityminus").click(function(e) {
       e.preventDefault();
       fieldName = $(this).attr('field');
       var qty = $(this).closest('.cart_item').find('.quantity');
       var currentVal = parseInt(qty.val());
       if (!isNaN(currentVal) && currentVal > 1) {
           qty.val(currentVal - 1);
       } else {
           qty.val(1);
       }
       qty.trigger('change');
   });     

    //Bind the change event
    $(".quantity").change(function() {
    	var sum = 0;
    	var total = 0;
    	$('.actual_price_num').each(function () {
    		var price = $(this);
    		var count = price.closest('.cart_item').find('.quantity');
    		sum = (price.html() * count.val());
    		total = total + sum;
    		price.closest('.cart_item').find('.each_itemprice').html("Rs. " +sum);
    	});
    	$('.total_price').html("Rs. " + total);

    }).change();

    /*--END ITEM ADD FUNCTION--*/

    /*--SELECT ALL ITEMS--*/
    $("#selectallitems").change(function(){  
    	$(".cart_item .checkbox-custom").prop('checked', $(this).prop("checked")); 
    });

    $('.cart_item .checkbox-custom').change(function(){ 
    	if(false == $(this).prop("checked")){ 
    		$("#selectallitems").prop('checked', false); 
    	}

    	if ($('.cart_item .checkbox-custom:checked').length == $('.cart_item .checkbox-custom').length ){
    		$("#selectallitems").prop('checked', true);
    	}
    });

    $('.cart_item .form_checkbox .checkbox-custom').each(function(i){
    	$(this).attr('id' , 'cartitem' + (i+1));  
    });

    $('.cart_item .form_checkbox .checkbox-custom-label').each(function(i){
    	$(this).attr('for' , 'cartitem' + (i+1));  
    });

    /*--END SELECT ALL ITEMS--*/

    /*--CARD INPUT VALIDATION--*/
    $("#card_input").on("keypress keyup blur",function (event) {  
    	$(this).val($(this).val().replace(/[^\d].+/, ""));
    	if ((event.which < 48 || event.which > 57)) {
    		event.preventDefault();
    	}
    });
    /*--END CARD INPUT VALIDATION--*/

    /*--REMOVE cART ITEM--*/
    $(".removecart_item").on("click",function(){
    	$(this).parents(".cart_item").fadeOut();
    	totalPriceCalc();
    });
    /*--END REMOVE cART ITEM--*/

    totalPriceCalc();


    /*MOBILE CART*/
    if ($(window).width() < 500) {
        $(".item_details_card").each(function(){
            $(this).append('<div class="btn_wrapper"/>'); 
            $(this).find(".movetowishlist, .applycoupon").appendTo($(this).find(".btn_wrapper"));
            $(this).find(".quantity-number, .item_price").appendTo($(this).find(".item_name_details"));
        });
        $(".each_itemprice,.wishlist_item .item_price").prepend("<span class='icon-Color-01'></span>");
        $(".wishlist_item .item_details_card .btn_wrapper").remove();
        /*-Estimation Wrapper-*/
        $(".grand_total_wrapper").prepend("<span class='estimation_toggle_btn icon-Pause-01'></span>");
        $(".estimation_wrapper").prepend("<span class='estimation_close_btn icon-Cancel'></span>");
        $(".estimation_toggle_btn").on("click",function(){
            $(this).slideToggle();
            $(".estimation_wrapper").slideToggle();
        });
        $(".estimation_close_btn").on("click",function(){
            $(".estimation_toggle_btn").slideDown();
            $(".estimation_wrapper").slideUp();
        });
        /*-End Estimation Wrapper-*/

        $("#wishlist_select_items").appendTo(".wishlist_wrapper");
    }

});

/*--SUM ITEM PRICE--*/
function totalPriceCalc(){
	var sum = 0;
	$('.each_itemprice').each(function(){
		txt = $(this).text();
		myStr = txt.replace(/,/g, "");
		myStr1 = myStr.replace("Rs.", "");
		sum += myStr1? myStr1*1 : 0;
	});
	$(".total_price").text("Rs. "+sum);
	$.fn.digits = function(){ 
		return this.each(function(){ 
			$(this).text( $(this).text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") ); 
		});
	}
	$(".total_price").digits();
}
/*--END SUM ITEM PRICE--*/


/*--FIXED BOTTOM SECTION--*/
function checkOffset() {
	if($('.proceed_checkout_wrapper').offset().top + $('.proceed_checkout_wrapper').height() 
		>= $('.webike_footer').offset().top - 10)
		$('.proceed_checkout_wrapper').css('position', 'relative');
	if($(document).scrollTop() + window.innerHeight < $('.webike_footer').offset().top)
        $('.proceed_checkout_wrapper').css('position', 'fixed'); // restore when you scroll up
}
$(document).scroll(function() {
	checkOffset();
});
/*--END FIXED BOTTOM SECTION--*/