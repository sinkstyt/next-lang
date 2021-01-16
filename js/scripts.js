// Business Logic ------->
// func that conducts branching based on values stored at keys within resultsObj. When branching is finished, new output values are stored as strings to be accessed at time of displaying results

function advanceMaker() {
  let currentQuestion = 0;
  function advanceToNextQuestion() {
    currentQuestion++;
    if (currentQuestion >= 6) {
      currentQuestion = 0;
      $("form").reset();
    } else if (1 >= currentQuestion < 6) {
      $(`div.question${currentQuestion}`).show();
      $(`div.question${currentQuestion}`).prev().slideUp();
    } else {
      console.log(`How did you manage to get to this value of currentQuestion: ${currentQuestion}?`)
    }
  }
  return advanceToNextQuestion;
}
const advancer = advanceMaker();

// UI Logic ------------->
$(document).ready(function() {
  $("form.survey").submit(function(event) {
    event.preventDefault();
    let resultsObj = {};
    // collect all number values by question onto a single key-value pairing stored on survey-results object.
    resultsObj.quickBuck = $("input:radio[name=appStore]:checked").val();
    let ambitionNumber = 0;
    $("input:checkbox[name=lifestyle]:checked").each(function() {
      ambitionNumber += parseInt($(this).val());
    })
    resultsObj.ambitionNumber = ambitionNumber;
    resultsObj.ambitionNumber += 4;
    resultsObj.petLove = $("input:radio[name=pets]:checked").val();
    ideasArray = [];
    $("input:checkbox[name=ideas]:checked").each(function() {
      ideasArray.push($(this).val());
    });
    resultsObj.ideas = ideasArray;
    $(".results").show();
    $('#transportation_survey').hide();
  });
  $("button#logic-sensed").click(function() {
    advancer();
  })
  // Back button:
  $(".btn-danger").click(function() {
    previousQuestion();
  });
  // nav button which goes to next (hide current question div, show next). edge case: on last survey question, a click on this next button triggers click that submits form, shows results. Also, call this function to advance by one question input:button with "#logic-sensed" is clicked.

  // nav button which goes back one survey question, edge case: on first question--> alert("there's no where 'previous' to go")


});
/*
1. C
2. Java
3. Python
4. C++
5. Ruby
6. Go
7. Swift
8. TypeScript
9. Kotlin
*/