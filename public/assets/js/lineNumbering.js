$("document").ready(function(){
	
	// default line height 
	var refHeight = 18;
	
	// function declaration
	var computeLines = function(){
			
			//remove previous numbers
			$(".number").remove();
			var count = 1; 
			
			//loop through paragraphs
			$("p").each(function(index){
				
					//get number of lines in paragraph
					var position = $(this).position();
					var paragraphHeight = $(this).height();
					var lines = (paragraphHeight / refHeight);
					var lineHeight = (paragraphHeight / lines);
					
					//loop through lines
					for(var i = position.top; i < (position.top + paragraphHeight); i+= lineHeight){
						
							//add the numbering paragraph at absolute position
							$("<p>", {class: "number"}).text(count++).css("top", i+5).insertBefore($(this));;
							console.log(i);
							
						}
						//add margin to allow space for numbering
						$(this).css("margin-left", "10px");
				});
		};
		
		$(window).resize(computeLines);
		computeLines();
	
	});