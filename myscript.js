$(document).ready(function(){
	$("#blue_box, #green_box, #pink_box, #yellow_box , #dark_blue_box").hide()
	$("#circle, #triangle").hide();
	$("#blue_box, #green_box,#pink_box,#yellow_box").slideDown(3000);
	$("#purple_stripe, #red_stripe, #orange_stripe, #grey_box").hide();
	$("#blue_box").hover(function(){
		$("#blue_box").css("box-shadow", "10px 10px");
		$("#blue_box").css("box-shadow", "0px 0px")
		$("#blue_box").css("opacity", "0.3");
		$("#pink_box").css("opacity", "0.3");
		$("#yellow_box").css("box-shadow","8px 2px");
		$("#green_box").css("opacity", "0.3");
		$("#black_stripe").fadeOut(3000);
	})
	$("#yellow_box").hover(function(){
		$("#yellow_box").css("box-shadow", "0px 0px")
		$("#blue_box").slideUp(1000);
		$("#grey_box").show();
		$("#purple_stripe").slideDown(2000);
		$("#pink_box").css("box-shadow", "5px 5px")
		$("#pink_box").css("opacity", "1");
		$("#red_stripe").show();
	})
	$("#pink_box").hover(function(){
		$("#pink_box").css("box-shadow", "0px 0px");
		$("#orange_stripe").fadeIn(4000);
		$("#purple_stripe").hide();
		$("#green_box").css("opacity", "1");
		$("#green_box").slideUp(9000);
		$("#yellow_box").slideUp(7000);
		$("#circle").fadeIn(3000);
		$("#circle").animate({
			right:'400px',
			width: '300px',
			height: '300px'
		})
	})
	$("#purple_box").hover(function(){
		$("#purple_box").animate({
			height:'200px'
		})
	})
	$("#grey_box").hover(function(){
		$("#grey_box").animate({
			height:'700px'
		})
	})

})
// $("button").click(function(){
//     $("p").css("background_color", "blue");
// }); 
