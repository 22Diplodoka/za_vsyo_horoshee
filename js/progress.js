let inWidth = 0;
let progress = document.getElementById("no-progress");

function plusPercent() {
	
	
	progress.style.width = inWidth + 1 + "%";
	inWidth = inWidth + 1;
	$("#no-progress").attr("width", progress);
	console.log(progress.style.width);
}

function plus3Percent() {
	

	
	progress.style.width = inWidth + 3 + "%";
	inWidth = inWidth + 3;
	$("#no-progress").attr("width", progress);
	console.log(progress.style.width);
}

function plus7Percent() {

	
	progress.style.width = inWidth + 7 + "%";
	inWidth = inWidth + 7;
	$("#no-progress").attr("width", progress);
	console.log(progress.style.width);
}

$("#btn1").click(plusPercent);
$("#btn2").click(plus3Percent);
$("#btn3").click(plus7Percent);
$(document).ready();