$(document).ready(function() {
	$(function() {
		$("p.intro").click(function() {
			$("p.intro").addClass("newFrame");
		})

		$("button#green").click(function() {
			$("body").removeClass();			
			$("body").addClass("green-background");
		});  

		$("button#red").click(function() {
			$("body").removeClass();			
			$("body").addClass("red-background");
		});

		$("button#lightblue").click(function() {
			$("body").removeClass();			
			$("body").addClass("lightblue-background");
		});

		$("button#light-text").click(function() {
			$("body").removeClass("dark-text");
			$("body").addClass("light-text");
		});

		$("button#dark-text").click(function() {
			$("body").removeClass("light-text");
			$("body").addClass("dark-text");
		});
	});


	$('#blanks form').submit(function(event) {
		var adjectiveInput = $("input#adjective").val();
		var person1Input = $("input#person1").val();
		var noun2Input = $("input#noun2").val();
		var person2Input = $("input#person2").val();
		var verbInput = $("input#verb").val();
		var emotionInput = $("input#emotion").val();	
		var exclamationInput = $("input#exclamation").val();
		var noun3Input = $("input#noun3").val();		

		$('.adjective').text(adjectiveInput);
		$('.person1').text(person1Input);
		$('.noun2').text(noun2Input);
		$('.person2').text(person2Input);
		$('.verb').text(verbInput);
		$('.emotion').text(emotionInput);
		$('.exclamation').text(exclamationInput);
		$('.noun3').text(noun3Input);

		$('#story').show();
		event.preventDefault();
		})
});