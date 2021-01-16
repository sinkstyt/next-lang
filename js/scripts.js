function advanceMaker() {
  let currentQuestion = 0;
  function advanceToNextQuestion() {
    currentQuestion++;
    if (currentQuestion >= 6) {
      currentQuestion = 0;
      $("form").reset();
    } else if (1 >= currentQuestion < 6) {
      $(`div.question${currentQuestion}`).show();
      $(`div.question${currentQuestion}`).prev().addClass("invisible");
    } else {
      console.log(`How did you manage to get to this value of currentQuestion: ${currentQuestion}?`)
    }
  }
  return advanceToNextQuestion;
}
const advancer = advanceMaker();

function previous() {
  let curQuestion = $("div[class!=invisible]").data();
  console.log(curQuestion);
}

function selectLang(obj) {
  let newObj = obj; // this only makes a shallow copy of resultsObj
  for (const key in newObj) {
    if (typeof key != "number") {
      this.resultsText += key + ", " + "<br>";
    } else if (key == "ambitionNumber") {
      if (key <= 0) {
        this.suggestedLang = "C";
      } else if (0 < key < 3) {
        this.suggestedLang = "Java";
      } else if (3 <= key < 6) {
        this.suggestedLang = "Python";
      } else if (6 <= key < 8) {
        this.suggestedLang = "C + + ";
      } else if (8 <= key < 11) {
        this.suggestedLang = "Ruby";
      } else if (11 <= key < 13) {
        this.suggestedLang = "Go";
      } else if (13 <= key < 17) {
        this.suggestedLang = "Swift";
      } else if (17 <= key < 20) {
        this.suggestedLang = "TypeScript";
      } else {
        this.suggestedLang = "Kotlin";
      }
    } else {
      this.suggestedLang = "JavaScript";
    }
  }
  if (this.quickBuck != 0) {
    this.suggestedLang = "Swift";
  }
  console.log(newObj);
  return newObj;
}

$(document).ready(function() {
  $("form.survey").submit(function(event) {
    event.preventDefault();
    let resultsObj = {};
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
    $('form').slideUp();
    let finalResultsObject = selectLang(resultsObj);
    let resultsFullText = '';
    resultsFullText += `Based on an a sort-of ambition score alone,(which in your case calculated to an impressive ${finalResultsObject.ambitionNumber} ambition points), this page unhesitatingly suggests you learn ${finalResultsObject.suggestedLang}.`
    $(".results").fadeIn(550);
  });
  $("button#logic-sensed").click(function() {
    advancer();
  });
  $("button.btn-primary").click(function() {
    advancer();
  });
  // Back button:
  $(".btn-danger").click(function() {
    previous();
  });
});