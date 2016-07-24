$(document).ready(function() {
	//Go to top on page refresh
	$(window).on('beforeunload', function(){
  		$(window).scrollTop(0);
	});

 //Accordion system for the services section
 	$('#servicios .service-block').hide();
 	$('.team2 .service-block').hide();

 	$('.service-divider').on('click',function() {
		$("ul#tabs li.active").removeClass("active");
		$("ul#tab li.active").removeClass("active");
		
 		var $this = $(this);
 		if($(this).hasClass('active')){
 			$(this).removeClass('active');
 			$(this).next().delay(1000).slideUp(1000);
			$(this).find(".ion-plus-circled").css("animation","volver 0.6s");
			$(".service-block").css("animation","desmostrar 1s forwards");
			
 		} else {	
			$(this).addClass('active');
			
			$(this).siblings('.service-divider').removeClass("active");
			
			
			$(this).siblings('.service-divider').find(".ion-plus-circled").css("animation","volver 0.6s");
			$(this).find(".ion-plus-circled").css("animation","rotar 0.6s");
			$(".service-block").css("animation","mostrar 1s forwards");
			
			
			
			
			
			$(this).siblings('.service-divider').next().slideUp(800);
      		$(this).next().slideDown(800, 
				function (){
					var position = $($this).delay(800).offset().top;
					$("html, body").animate({
						scrollTop: position - 4
					}, 800);
			});
			
			
			
 		}
 	})

 //Tabs system for the first service section
 $("ul#tabs li").click(function(e){
	if (!$(this).hasClass("active")) {
		var tabNum = $(this).index();
		var nthChild = tabNum+1;
		$("ul#tabs li.active").removeClass("active");
		$(this).addClass("active");
		$("ul#tab li.active").removeClass("active");
		$("ul#tab li:nth-child("+nthChild+")").addClass("active");
		
		var position2 = $(this).offset().top;
		$("html, body").animate({
			scrollTop: position2 - 10
		}, 800);
		
	}
 });
 $("ul#smalltabs li").click(function(e){
 	if (!$(this).hasClass("active")) {
 		var tabNum = $(this).index();
 		var nthChild = tabNum+1;
 		$("ul#smalltabs li.active").removeClass("active");
 		$(this).addClass("active");
 		$("ul#smalltab li.active").removeClass("active");
 		$("ul#smalltab li:nth-child("+nthChild+")").addClass("active");
		
 	}
 });
		  
});
 