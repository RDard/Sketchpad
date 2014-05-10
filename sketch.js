$(document).ready(function(){
	$('body').css({'background-color':'red'});
	for (var i = 0; i < 16; i++) {
		$("#container").append("<div class='row'></div>");
	};	
		$(".row").each(function(){
			for (var j = 0; j < 16; j++) {
				$(this).append("<div class='square'></div>");
				};
		});
});

alert("test2");