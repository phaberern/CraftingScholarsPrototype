$("document").ready(function(){
	//global variables for timer
	var testTime = 2100;//35 minutes = 2100 seconds
	var counter = 2100;//set equal to testTime
	var timerId = null;//to clear interval and stop timer

	var checkedInputs = [];//keep track of every input that is checked

	var multipleChoiceAnswers = ["a","b","c","a","d","b","d","d","b","d"];


	//***************************** MAIN method to kick things off ****************

		$("#timer").text(convertSeconds(counter));
		countdown();
		monitorQuestions();

	$("#done-button").on("click",function(){
		clearInterval(timerId);
		runReport();
		});

	//***************************** function delcarations *************************

	//functions for the timer______________________________________________________
	function countdown(){
		timerId = setInterval(function(){
			counter--;
			if(counter < 0){
				runReport();
				clearInterval(timerId);
				alert("Time is up!");
				}
			$("#timer").text(convertSeconds(counter));
			}, 1000);
		};
	function convertSeconds(inputSeconds){
		var minutes = Math.floor(inputSeconds/60);
		var seconds = inputSeconds - (minutes * 60);
		//return calculation
		return(prettifyRemainingTime(minutes, "0", 2) + ":" + prettifyRemainingTime(seconds, "0", 2));
		};
	function prettifyRemainingTime(string, pad, length){
		return(new Array(length+1).join(pad)+string).slice(-length);
		};

	//main function to run the report______________________________________________
	function runReport(){
		checkAnswers();
		calculateTestTime();
		calculateCheckedInputs();

		};
	//functions for checking answers_______________________________________________
	function checkAnswers(){
		//variables to hold information to identify what answers were correct and incorrect
		var correctMultipleChoice = [];
		var incorrectMultipleChoice = [];

		//select multiple choice answers
		var $studentMultipleChoiceAnswers = $("input:checked");
		//cycle through the multiple choice answers and check for correct or incorrect and update variables
		for(i = 0; i < $studentMultipleChoiceAnswers.length; i++){
			if(multipleChoiceAnswers[i] === $studentMultipleChoiceAnswers[i].value){
				correctMultipleChoice.push($studentMultipleChoiceAnswers[i].name);
				}else{
					incorrectMultipleChoice.push($studentMultipleChoiceAnswers[i].name +":"+ $studentMultipleChoiceAnswers[i].value);
					};
			};
		//print correct answers
		console.log("correct multiple choice answers:");
		for(i = 0; i < correctMultipleChoice.length; i++){
			console.log(correctMultipleChoice[i]);
			};
		//print incorrect answers
		console.log("incorrect multiple choice answers answers:");
		for(i = 0; i < incorrectMultipleChoice.length; i++){
			console.log(incorrectMultipleChoice[i]);
			};
		};

		function monitorQuestions(){
			$("input").on("click", function(){
				checkedInputs.push(this.name);
				});
			};
		function calculateTestTime(){
			var timeUsed = convertSeconds(testTime - counter);
			console.log("Student took " + timeUsed + " to complete this section");
			};
		function calculateCheckedInputs(){
			var counts = {};
			checkedInputs.forEach(function(x){
				counts[x] = (counts[x] || 0)+1;
				});
			console.log(counts);
			};

////////////////////////////////////////////////////////

			(function() {
			    var theQuestions = (function() {
			        var theFile = ['jsonfile.json'];

			        		loopQuestions = function() {
			                //determines if the owner is a new owner or not, passes them to the newMember function or updateMember function
			                for (var k = 0; k < 1; k++) {
			                    $.getJSON(theFile[k], function(data) {
			                        for (var i = 0; i < data.questions.length; i++) {
			                            //define data to be logged
			                            // console.log(data.questions[i].question);
			                            // console.log(data.questions[i].answers-choices);
			                            $('.order-questions-list').append('<li><p>' + data.questions[i].question + '</p></li>');
			                            for(var j = 0; j < data.questions[i].answerschoices.length; j++) {
			                            	// console.log(data.questions[i].answerschoices[j]);
			                            	var value = j;
																			switch(value) {
																			    case 0:
																			        value = 'a';
																			        break;
																			    case 1:
																			        value = 'b';
																			        break;
																			    case 2:
																			        value = 'c';
																			        break;
																			    case 3:
																			        value = 'd';
																			        break;
																			    default:
																			        //do nothing
																			}
			                            	$('.order-questions-list').append('<input type="radio" name="q' + (i+1) + '" value="' + value + '"> ' + data.questions[i].answerschoices[j] + '<br>');
			                            }
			                            // console.log(data);
			                        }
			                    });
			                }
			            }


			        return {
			            first: loopQuestions
			        };
			    })();
			    theQuestions.first();

			})();





	});