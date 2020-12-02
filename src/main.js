import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import Beer from "../src/js/beerConstructor.js";

$(document).ready(function () {
  $("#startQuiz").click(function () {
    $("#titlePage").fadeOut();
    nextQuestion();
  });

  const question = $(".form-group");
  const nextButton = $("#next");
  const backButton = $("#back");
  const submitButton = $("#submit");
  let step = 0;

  function hideAll() {
    submitButton.hide();
    question.delay(400).fadeOut();
    nextButton.delay(400).fadeOut();
    backButton.delay(400).fadeOut();
  }

  function showButtons() {
    nextButton.fadeIn();
    backButton.fadeIn();
  }

  function showSubmitButton() {
    submitButton.show();
    //or can change to show questions if the user wants to review their answers
    question.hide();
    nextButton.hide();
    backButton.hide();
  }

  function nextQuestion() {
    if (step === 0) {
      submitButton.hide();
      question.hide();
      backButton.hide();
      nextButton.show();
      $("div[value=1]").show();
    } else if (step === 1) {
      hideAll();
      $("div[value=2]").delay(400).fadeIn(300);
      showButtons();
    } else if (step === 2) {
      hideAll();
      $("div[value=3]").delay(400).fadeIn(300);
      showButtons();
    } else if (step === 3) {
      hideAll();
      $("div[value=4]").delay(400).fadeIn(300);
      showButtons();
    } else {
      showSubmitButton();
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

  $("#quiz").submit(function (event) {
    event.preventDefault();
    const color = parseInt($("input:radio[name=color]:checked").val());
    const ibu = parseInt($("input:radio[name=ibu]:checked").val());
    const clarity = parseInt($("input:radio[name=clarity]:checked").val());
    const flavor = parseInt($("input:radio[name=flavor]:checked").val());
    const userBeer = new Beer(color, ibu, clarity, flavor);
    const result = userBeer.showBeerResult();

    $("#result").text(`You should try ${result}.`);
  });
});
