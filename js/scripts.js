// Business Logic ------->
// incoming from UI: a variable that holds a number -->
// func that takes single num as param, does some branching, returns a suggested language as a string

// from UI: an object with keys:values for all input string values -->
// func that takes obj as param, returns an array of length two. A string stored at each index.

// func that takes in array of strings, returns one long string having inserted the two input string values meaningfully into a paragraph giving some pseudo-logic/explanation for suggested language

// UI Logic ------------->
$(document).ready(function() {
  $("form.survey").submit(function(event) {
    event.preventDefault();
    let resultsObj = {};
    // collect all number values by question onto a single key-value pairing stored on survey-results object.
    resultsObj.quickBuck = $("input:radio[name=appStore]:checked").val();
    let ambitionNumber = 0;
    $("input:checkbox[name=lifestyle]:checked").each(function() {
      ambitionNumber += $(this).val();
    })
    resultsObj.ambitionNumber = ambitionNumber;
    resultsObj.ambitionNumber += 4;
    // gather all string values and store on a single object as meaningful key-value pairs
    $(".results").show();
    $("input:checkbox[name=work-transportation]:checked").each(function() {
      const workTransportationMode = $(this).val();
      $('#work-responses').append(workTransportationMode + "<br>");
    });
    $('#transportation_survey').hide();
  });
  // nav button which triggers a forwards through the survey questions (hide current question div, show next). edge case: on last survey question, a click on this next button triggers click that submits form, shows results. Also, call this function to advance by one question input:button with "#logic-sensed" is clicked.

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