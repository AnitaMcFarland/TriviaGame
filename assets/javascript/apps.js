var correctAnswers = 0;
var incorrectAnswers = 0;
var unansweredQuestions = 0;
var setInterval = 0;

var answers = ["70%", "30%", "11km", "5%", "2600km", "56000km"]

$("#correctAnswers").text(correctAnswers);
$("#incorrectAnswers").text(incorrectAnswers);
$("#unansweredQuestions").text(unansweredQuestions);

var time = 120;

$(".start").on("click", function () {
    $("#intro").addClass("hidden");
    $("#game").removeClass("hidden");
    setInterval(function () {
        time--;
        $("#timer").text(time);
    }, 1000);


    $(document).ready(function () {
        $("button").click(function () {
            $("answers").click();

            if (timer === 0)
                resetGame();

            if (answers) {
                correct = ++
                $("#correctAnswers").text(correctAnswers);
                resetGame();

            } else if (answers == answers);
            incorrect = ++
            $("#incorrectAnswers").text(incorrectAnswers);
            resetGame();

            if (answers === 0);
            unansweredQuestions = ++
            $("#unansweredQuestions").text(unansweredQuestions);
            resetGame();

            function resetGame() {
                setInterval = 0;



            }
        });

    });
});