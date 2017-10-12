$(document).ready(function(){
	$("#question-nav").hide();
	$("#current-question-number").hide();
	//variables for tracking point of interest events
	var currQuestion = 0;

	//variables for questions and answers
	var questionArray = [{
		question : "Which choice best summarizes the passage?",
		choices : ["A character describes his dislike for his new job and considers the reasons why.","Two characters employed in the same office become increasingly competitive.","A young man regrets privately a choice that he defends publicly.","A new employee experiences optimism, then frustration, and finally despair."],
		answer : 1
	},{
		question : "The main purpose of the opening sentence of the passage is to",
		choices : ["establish the narrator’s perspective on a controversy.", "provide context useful in understanding the narrator’s emotional state.", "offer a symbolic representation of Edward Crimsworth’s plight.", "contrast the narrator’s good intentions with his malicious conduct."],
		answer : 2
	},{
		question : "During the course of the first paragraph, the narrator’s focus shifts from",
		choices : ["recollection of past confidence to acknowledgment of present self-doubt.", "reflection on his expectations of life as a tradesman to his desire for another job.", "generalization about job dissatisfaction to the specifics of his own situation.", "evaluation of factors making him unhappy to identification of alternatives."],
		answer : 3
	},{
		question : "The references to “shade” and “darkness” at the end of the first paragraph mainly have which effect?",
		choices : ["They evoke the narrator’s sense of dismay.", "They reflect the narrator’s sinister thoughts.", "They capture the narrator’s fear of confinement.", "They reveal the narrator’s longing for rest."],
		answer : 4
	},{
		question : "The passage indicates that Edward Crimsworth’s behavior was mainly caused by his",
		choices : ["impatience with the narrator’s high spirits.", "scorn of the narrator’s humble background.", "indignation at the narrator’s rash actions.", "jealousy of the narrator’s apparent superiority."],
		answer : 5
	},{
		question : "The passage indicates that when the narrator began working for Edward Crimsworth, he viewed Crimsworth as a",
		choices : ["harmless rival.", "sympathetic ally.", "perceptive judge.", "demanding mentor."],
		answer : 6
	},{
		question : "Which choice provides the best evidence for the answer to the previous question?",
		choices : ["Lines 28-31 (“the antipathy... life”)", "Lines 38-40 (“My southern... irritated him”)", "Lines 54-56 (“Day... slumber”)", "Lines 61-62 (“I had... brother”)"],
		answer : 7
	},{
		question : "At the end of the second paragraph, the comparisons of abstract qualities to a lynx and a snake mainly have the effect of",
		choices : ["contrasting two hypothetical courses of action.", "conveying the ferocity of a resolution.", "suggesting the likelihood of an altercation.", "illustrating the nature of an adversarial relationship."],
		answer : 8
	},{
		question : "The passage indicates that, after a long day of work, the narrator sometimes found his living quarters to be",
		choices : ["treacherous.", "dreary.", "predictable.", "intolerable."],
		answer : 9
	},{
		question : "Which choice provides the best evidence for the answer to the previous question?",
		choices : ["Lines 17-21 (“I should... scenes”)", "Lines 21-23 (“I should... lodgings”)", "Lines 64-67 (“Thoughts... phrases”)", "Lines 68-74 (“I walked... gleam”)"],
		answer : 10
	}];

	//show questions
	$("#show-questions").on("click", function(){
		this.remove();
		$("#question-nav").show();
		loadQuestion(currQuestion);
		$("#current-question-number").show();
	});

	//load previous question
	$("#prev-question").on("click", function(){
		currQuestion--;
		loadQuestion(currQuestion);
	});

	//load next question
	$("#next-question").on("click", function(){
		currQuestion++;
		loadQuestion(currQuestion);
	});

	function loadQuestion(currQuestion){

		var question = questionArray[currQuestion];

		$("#current-question-number").text((currQuestion + 1));

		var $questionForm = $("<form>");

		$questionForm.addClass("reading-question");
		$questionForm.attr("data-number", currQuestion);
		$questionForm.text(question.question);

		$("#question-container").html($questionForm);


		};

		/*//***********************************LINE NUMBERING***************************************
		// default line height
		var refHeight = 18;

		// function declaration
		var computeLines = function(){

			//remove previous numbers
			$(".number").remove();
			var count = 1;

			//loop through paragraphs
			$("#passage p").each(function(index){

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

		//***********************************END OF LINE NUMBERING***************************************
*/
});//END OF DOC READY FUNCTION