jQuery.fn.center = function () {
		this.css("position","absolute");
		this.css("top", ( $(window).height() - this.height() ) / 2+$(window).scrollTop() + "px");
		this.css("left", ( $(window).width() - this.width() ) / 2+$(window).scrollLeft() + "px");
		return this;
	}
 
	$(document).ready(function() {		
		$("#thumbnail img").click(function(e){
		
			$("#background").css({"opacity" : "0.7"})
							.fadeIn("slow");			
						
			$("#large").html("<img src='"+$(this).parent().attr("href")+"' alt='"+$(this).attr("alt")+"' /><br/>"+$(this).attr("rel")+"")
					   .center()
					   .fadeIn("slow");			
			
			return false;
		});
			
		$(document).keypress(function(e){
			if(e.keyCode==27){
				$("#background").fadeOut("slow");
				$("#large").fadeOut("slow");
			}
		});
		
		$("#background").click(function(){
			$("#background").fadeOut("slow");
			$("#large").fadeOut("slow");
		});
		
		$("#large").click(function(){
			$("#background").fadeOut("slow");
			$("#large").fadeOut("slow");
		});
		
	});
