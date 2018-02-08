$(document).ready(function(){

	var table;
	var userName;
	var phoneNumber;
	var partySize;

//hides hidden reservation form on page load
	$("#hiddenForm").hide();

//sets the individual table currently being clicked on to a variable "table"
	$(".tables").click(function() {
		table = $(this);
	});

//sets the individual table currently being hovered over to "tableHover"
	$(".tables").hover(function() {
		tableHover = $(this);
	});

//reveals the reservation form for a table that has class of "available"
	$(".tables").click(function() {
		if (table.hasClass("available")) {
			$("#hiddenForm").removeClass("hidden");
			$("#hiddenForm").slideDown(600);
		}
	});

//retrieves the table number from the individual table's container div, and attaches 
//that number to the reservation form for that particular table
	$(".tables").click(function() {
		var digit = $(this).text();
		$("#tableDigit").text(digit);
	});

//when the user clicks the save button, the reservation form slides up and out of view
	$("#saveButton").click(function() {
		$(table).addClass("reserved");
		$(table).removeClass("available");
		$(table).addClass("notAllowed");
		$("#hiddenForm").slideUp(600);
		retrieveTableData();
		var userName = $("#name").val("");
		var phoneNumber = $("#phoneNumber").val("");
		var partySize = $("#partySize").val("");
	});

//when the user x's out of the reservation form, it slides up and out of view
	$("#quitButton").click(function() {
		$("#hiddenForm").slideUp(600);
	});

//if a table currently being hovered over has a class of "available", the background
//color of the table will change to match the red heading, and will change back to grey 
//when not being hovered over
	$(".tables").hover(function() {
		if (tableHover.hasClass("available")) {
			$(tableHover).css("background-color", "#E34E45");
		}
	}, function() {
		$(tableHover).css("background-color", "");
	});

//if the table currently being hovered over has a class of "available", the cursor will 
//change to a crosshair cursor, and changes back to default when not being hovered over
	$(".tables").hover(function() {
		if (tableHover.hasClass("available")) {
			$(tableHover).css("cursor", "crosshair");
		}
	}, function() {
		$(tableHover).css("cursor", "");
	});

//displays reservation info of reserved tables when hovered over
	$(".tables").hover(function() {
		if (tableHover.hasClass("reserved")) {
			$("#hoverTableInfo").show();
		}
	}, function() {
		$("#hoverTableInfo").hide();
	});

//retreives the name and party size inputs from reservation form; 
//appends them to the table in a child div
	function retrieveTableData() {
		var name = $("#name").val();
		var partySize = $("#partySize").val();
		table.append("<div id='hoverTableInfo' 'class=hidden'><div>Name: " + name + 
			"</div><div>Size of Party: " + partySize + "</div></div>");
	}
	
});