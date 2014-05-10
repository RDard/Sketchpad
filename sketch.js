if (typeof gridSize === 'undefined'){
	var gridSize = 16;
}
var maxPixels = 960;

$(document).ready(function(){

	for (var i = 0; i < gridSize; i++) {
		$("#container").append("<div class='row'></div>");
	};	
		$(".row").each(function(){
			for (var j = 0; j < gridSize; j++) {
				$(this).append("<div class='square'></div>");
				};
		});

	$('.square').mouseenter(function(){
		$(this).addClass("draw");
	});

	$('button').on('click', function (){
		$('.square').removeClass("draw");
		var gridSize = prompt("Enter the number of squares per side for the drawing grid");
		if (gridSize > 960 || gridSize < 1)
			gridSize = 16;

		$('.row').css({'height':''+ maxPixels/gridSize +'px'});
		$('.square').css({'height':''+ maxPixels/gridSize +'px', 
										'width':''+ maxPixels/gridSize +'px'});
	
	});
});



alert("test2");