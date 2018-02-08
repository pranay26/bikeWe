$(document).ready(function(){

    $(document).on("click", function(event){
        var $trigger = $(".webike_header");
        if($trigger !== event.target && !$trigger.has(event.target).length){
            $('#user_dropdown').removeClass('active');
        }            
    });
    if ($(window).width() < 750) {
        /*--MOBILE HEADER SEARCH--*/
        $(".middle_header_menu").prepend("<span class='icon-Cancel mobile_menu_close'></span>")
        $(".search-icon").on("click", function(){
            $(".top_right_header_menu,a.header_logo").css("opacity","0");
        });
        $(".search-wrapper .close").on("click", function(){
            $(".top_right_header_menu,a.header_logo").css("opacity","1");
        });
        /*--END MOBILE HEADER SEARCH--*/
        $(".header_hamburger").on("click", function(){
            $(".middle_header_menu").addClass("active");
        });
        $("span.mobile_menu_close").on("click", function(){
            $(".middle_header_menu").removeClass("active");
        });

        /*MOBILE MENU*/
        $("ul.top_nav_lists > li > a").on("click", function(){
            var $hasSubmenu = $(this).parent().find(".header_sub_menu");

            if ($hasSubmenu.length){
                $(".header_sub_menu").removeClass("active");
                $(this).parent().find(".header_sub_menu").addClass("active");
                $(this).parents(".middle_header_menu").addClass("submenu_active");
            }
        });
        $(".header_sub_menu").prepend("<span class='go_back_menu'><span class='icon-Previous'></span>Back</span>");

        $(".go_back_menu").on("click", function(){
            $(this).parent(".header_sub_menu").removeClass("active");
            $(".middle_header_menu").removeClass("submenu_active");
        });

        $(".sub_menu_lists").each(function(){
            var $hasSubLevelmenu = $(this).find(".submenu_header").next("ul");
            if ( $hasSubLevelmenu.length){
                $(this).addClass("hassub_level");
                $(this).find(".submenu_header").append("<span class='icon-Plus sublevelmenu_icon'></span>")
            }
            else {
                $(this).addClass("nosub_level");
            }
        });
        $('.sublevelmenu_icon').on("click", function(e){
            e.preventDefault();
            var $this = $(this).parent(".submenu_header");
            $('.submenu_header .sublevelmenu_icon').removeClass("icon-Minus").addClass("icon-Plus");
            if ($this.next().hasClass('show')) {
                $('ul.show').parent('.submenu_header').find('.sublevelmenu_icon').removeClass("icon-Plus").addClass("icon-Minus");
                $this.next().removeClass('show');
                $this.next().slideUp(350);
            } else {
                $(this).removeClass("icon-Plus").addClass("icon-Minus");
                $this.parent().parent().parent().find('ul').removeClass('show');
                $this.parent().parent().parent().find('ul').slideUp(350);
                $this.next().toggleClass('show');
                $this.next().slideToggle(350);
            }
        });
        /*END MOBILE MENU*/
    }

    if ($(window).width() > 750) {
        /*--WINDOW HEIGHT--*/
        $(window).resize(function(){
           windowHeight();
       });
        windowHeight();
        /*--END WINDOW HEIGHT--*/

        $("ul.top_nav_lists > li > a").hover(function(){  
            $(this).parent().find(".header_sub_menu").addClass("active");
            var submenuCount = $(this).parent().find(".submenucolumn").length; 
            if(submenuCount == 1){
                $(this).parent().addClass("onecolumn_menu");
                var offset = $(this).position();
                $(this).parent().find(".header_sub_menu").css("left",offset.left+"px");
            } 
            else if(submenuCount == 2){
                $(this).parent().addClass("twocolumn_menu");
            } 
            else if(submenuCount == 3){
                $(this).parent().addClass("threecolumn_menu");
            } 
            else if(submenuCount == 4){
                $(this).parent().addClass("fourcolumn_menu");
            } 
            else {

            }
        }, function(){  
            $(this).parent().find(".header_sub_menu").removeClass("active");
            $(this).parent().removeClass("threecolumn_menu");
            $(this).parent().removeClass("twocolumn_menu");
            $(this).parent().removeClass("onecolumn_menu");
            $(this).parent().removeClass("fourcolumn_menu");

        });

$("ul.top_nav_lists .header_sub_menu").hover(function(){ 
    $(this).addClass("active"); 
    $(this).parent("li").find(" > a").addClass("active"); 
    var submenuCount = $(this).find(".submenucolumn").length; 
    if(submenuCount == 1){
        $(this).parent().addClass("onecolumn_menu")
    } 
    else if(submenuCount == 2){
        $(this).parent().addClass("twocolumn_menu")
    } 
    else if(submenuCount == 3){
        $(this).parent().addClass("threecolumn_menu")
    } 
    else if(submenuCount == 4){
        $(this).parent().addClass("fourcolumn_menu");
    } 
    else {

    }
}, function(){  
    $(this).removeClass("active"); 
    $(this).parent("li").find(" > a").removeClass("active"); 
    $(this).parent().removeClass("threecolumn_menu");
    $(this).parent().removeClass("twocolumn_menu");
    $(this).parent().removeClass("onecolumn_menu");
    $(this).parent().removeClass("fourcolumn_menu");

});    
}

});

/*--HEADER SEARCH--*/
function searchToggle(obj, evt){
    var container = $(obj).closest('.search-wrapper');
    if(!container.hasClass('active')){
        container.addClass('active');
        evt.preventDefault();
    }
    else if(container.hasClass('active') && $(obj).closest('.input-holder').length == 0){
        container.removeClass('active');
            // clear input
            container.find('.search-input').val('');
        }
    }
    /*--END HEADER SEARCH--*/

    /*--WINDOW HEIGHT--*/
    function windowHeight(){
        var headerHeight = $(".webike_header").innerHeight();
        var footerHeight = $(".webike_footer").innerHeight();
        var totHeight = headerHeight + footerHeight;
        $(".webike_content_wrapper").css("min-height","calc(100vh - "+totHeight+"px)");
    }
        /*--END WINDOW HEIGHT--*/