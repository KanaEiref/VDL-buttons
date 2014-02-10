;(function() {

	"use strict";

	function checkbox_clicked_Event(){
		var isChecked = $('#checkbox1').prop('checked');
		if (isChecked) {
			$('#testButton').removeClass("inactiveButton").addClass("activeButton");
			//console.log("checked");
		}
		else {
			$('#testButton').removeClass("activeButton").addClass("inactiveButton");
			//console.log("not checked");
		}
	}

	
	document.addEventListener("DOMContentLoaded", function(){
		var checkbox_clicked = document.getElementById('checkbox1');
		checkbox_clicked.addEventListener("click", checkbox_clicked_Event, false);
	}, false);


})();
