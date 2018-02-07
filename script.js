$(document).ready(function(){

	var table;
	var nameInput = document.getElementById("name");
	var userName = nameInput.value;

	$(".tables").click(function() {
		table = $(this);
	});

	$(".tables").hover(function() {
		tableHover = $(this);
	});

	$(".available").click(function() {
		$("#hiddenForm").removeClass("hidden");
		$("#hiddenForm").slideDown();
	});

	$(".reserved").hover(function() {
		$(".hoverTableInfo").css("display", "block");
	});

	$(".tables").click(function() {
		var digit = $(this).text();
		$("#tableDigit").text(digit);
	});

	$("#saveButton").click(function() {
		$(table).addClass("reserved");
		$(table).removeClass("available");
		$(table).addClass("notAllowed");
		$("#hiddenForm").addClass("hidden");
		retrieveTableData();
	});

	$("#quitButton").click(function() {
		$("#hiddenForm").addClass("hidden");
	});

	$(".tables").hover(function() {
		if (tableHover.hasClass("available")) {
			$(tableHover).css("background-color", "#E34E45");
		}
	}, function() {
		$(tableHover).css("background-color", "");
	});

	$(".tables").hover(function() {
		if (tableHover.hasClass("available")) {
			$(tableHover).css("cursor", "crosshair");
		}
	}, function() {
		$(tableHover).css("cursor", "");
	});

	function retrieveTableData() {
		var name = $("#name").val();
		var partySize = $("#partySize").val();
		table.append("<div class='hoverTableInfo'><div>Name: " + name + "</div><div>Size of Party: " + partySize + "</div></div>");
	}
	
});