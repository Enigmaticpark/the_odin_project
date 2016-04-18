$(document).ready(function(){

	$('body').css("opacity", 0);
	createBoard();

	$("#open").click(function(){
		$('body').css("opacity", 0);
		createBoard();
		$('td').css("background-color", intColor);
	});

});

function createBoard(){ 

	$('#table').empty();

	var grid = null;

	if (grid == null) {
		grid = prompt("Select grid size", "16");
		var size = grid;
	}

	$('body').css("opacity", 1);

	if (grid != null) {

		for (var i = size; i > 0; i--) {
		$('table').append("<tr>");
		}

		for(var i = 0; i < size; i++){
			$('tr').append("<td></td>");
		}

		$('td').height($('td').width());
		$('tr').height($('td').height());
		$('body').fadeTo("slow", 1);
	}	

	var intColor = $('td').css("background-color");
	var newColor = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);

	$('td').mouseover(function(){
		$(this).addClass("hover");
		$(this).css("background-color", newColor);
	}).mouseout(function(){
		$(this).removeClass("hover");
	});
}