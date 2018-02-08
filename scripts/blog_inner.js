$(document).ready(function(){
	Boxgrid.init();

	/*PAGINATION*/
	$("div.holder").jPages({
		containerID: "blog_lists",
		perPage: 5,
		keyBrowse: false,
		scrollBrowse: false
	});
	/*END PAGINATION*/
});

/*SCROLLBAR*/
$(window).on("load", function() {
	$(".custom_scrollbar").mCustomScrollbar({
		mouseWheel: !0,
		scrollInertia: 50,
		scrollbarPosition:"outside"
	});
});
	/*END SCROLLBAR*/