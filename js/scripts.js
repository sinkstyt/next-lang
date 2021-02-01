function advanceMaker() {
  let currentQuestion = 0;
  function advanceToNextQuestion(direction) {
    direction = parseInt(direction);
    if (direction === 1 && currentQuestion < 5) {
      currentQuestion++;
      $(`div.question${currentQuestion}`).show();
      $(`div.question${currentQuestion}`).prev().slideUp();
    } else if (direction === -1) {
      currentQuestion--;
      $(`div.question${currentQuestion}`).show();
      $(`div.question${currentQuestion}`).next().slideUp();
    } else {
      $("div.question*").slideUp();
      $("form").submit(function(event) {
        event.preventDefault();
      });
    }
  }
  return advanceToNextQuestion;
}
const advancer = advanceMaker();

function selectLang(obj) {
  let newObj = obj; // this only makes a shallow copy of resultsObj
  let resultsText = '';
  for (const key in newObj) {
    if (key == "ambitionNumber") {
      if (newObj[key] <= 0) {
        newObj.suggestedLang = "C";
      } else if (newObj[key] < 3) {
        newObj.suggestedLang = "Java";
      } else if (newObj[key] < 6) {
        newObj.suggestedLang = "Python";
      } else if (newObj[key] < 8) {
        newObj.suggestedLang = "C + + ";
      } else if (newObj[key] < 11) {
        newObj.suggestedLang = "Ruby";
      } else if (newObj[key] < 13) {
        newObj.suggestedLang = "Go";
      } else if (newObj[key] < 17) {
        newObj.suggestedLang = "Swift";
      } else if (newObj[key] < 20) {
        newObj.suggestedLang = "TypeScript";
      } else {
        newObj.suggestedLang = "Kotlin";
      }
    } else if (typeof key != "number") {
      resultsText += key + `: ${newObj[key]} <br>`;
    } else {
      newObj.suggestedLang = "JavaScript";
    }
  }
  if (newObj.quickBuck == "11") {
    newObj.suggestedLang = "Swift";
  }
  return newObj;
}

$(document).ready(function() {
  let resultsObj = {};
  $("form.survey").submit(function(event) {
    event.preventDefault();
    resultsObj.quickBuck = $("input:radio[name=appStore]:checked").val();
    resultsObj.ambitionNumber = 0;
    $("input:checkbox[name=lifestyle]:checked").each(function() {
      resultsObj.ambitionNumber += parseInt($(this).val());
    });
    resultsObj["ambitionNumber"] += 4;
    resultsObj.petLove = $("input:radio[name=pets]:checked").val();
    ideasArray = [];
    $("input:checkbox[name=ideas]:checked").each(function() {
      ideasArray.push($(this).val());
    });
    resultsObj.ideas = ideasArray;
    $('form').slideUp();
    $('results').slideDown();
    let finalResultsObject = selectLang(resultsObj);
    let resultsFullText = '';
    resultsFullText += `...based on an a sort-of ambition score alone, (which in your case calculated to an impressive ${finalResultsObject.ambitionNumber} ambition points), this page unhesitatingly suggests you learn ${finalResultsObject.suggestedLang}.`
    $("h3.results-heading").html(`Drum roll.. This survey hereby suggests your next language ought to be ${finalResultsObject.suggestedLang}`);
    $("p.suggest-lang").html(resultsFullText);
    $(".results").fadeIn(550);
  });
  $("button#logic-sensed").click(function() {
    advancer(1);
  });
  $("button.btn-primary").click(function() {
    advancer(1);
  });
  $(".btn-danger").click(function() {
    advancer(-1);
  });
});