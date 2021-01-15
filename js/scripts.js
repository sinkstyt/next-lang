// Business Logic ------->
// incoming from UI: a variable that holds a number -->
// func that takes single num as param, does some branching, returns a suggested language as a string

// from UI: an object with keys:values for all input string values -->
// func that takes obj as param, returns an array of length two. A string stored at each index.

// func that takes in array of strings, returns one long string having inserted the two input string values meaningfully into a paragraph giving some pseudo-logic/explanation for suggested language

// UI Logic ------------->
$(document).ready(function() {
  $("form#transportation_survey").submit(function(event) {
    event.preventDefault();
    // collect all number values by question onto a single key-value pairing stored on survey-results object.

    // gather all string values and store on a single object as meaningful key-value pairs
    $("#work-responses").show();
    $("input:checkbox[name=work-transportation]:checked").each(function() {
      const workTransportationMode = $(this).val();
      $('#work-responses').append(workTransportationMode + "<br>");
    });
    $('#transportation_survey').hide();
  });
  // nav button which triggers a forwards through the survey questions (hide current question div, show next). edge case: on last survey question, a click on this next button triggers click that submits form, shows results

  // nav button which goes back one survey question, edge case: on first question--> alert("there's no where 'previous' to go")


});