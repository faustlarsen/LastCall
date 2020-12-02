$(document).ready(function () {
  //Remove title page
  $("#startQuiz").click(function () {
    $("#titlePage").fadeOut();
    nextQuestion();
  });

  //One question at a time
  const question = $(".form-group");
  const nextButton = $("#next");
  const backButton = $("#back");
  const submitButton = $("#submit");
  let nextQuestion = 0;

  function hideAll() {
    submitButton.hide();
    question.delay(200).fadeOut();
    nextButton.delay(200).fadeOut();
    backButton.delay(200).fadeOut();
  }

  function showButtons() {
    nextButton.fadeIn();
    backButton.fadeIn();
  }

  function showAll() {
    submitButton.show();
    question.show();
    nextButton.hide();
    backButton.hide();
  }

  function nextQuestion() {
    if (step === 0) {
      submitButton.hide();
      question.hide();
      backButton.hide();
      nextButton.show();
      $("div[value=1").show();
    } else if (step === 1) {
      hideAll();
      $("div[value=2").delay(200).fadeIn(200);
      showButtons();
    } else if (step === 2) {
      hideAll();
      $("div[value=3").delay(200).fadeIn(200);
      showButtons();
    } else if (step === 3) {
      hideAll();
      $("div[value=4").delay(200).fadeIn(200);
      showButtons();
    } else {
      showAll();
    }
  }

  nextButton.click(function () {
    step++;
    nextQuestion();
  });
  backButton.click(function () {
    step--;
    nextQuestion();
  });
});
