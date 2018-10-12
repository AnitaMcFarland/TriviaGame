        var time = 60;
        var timeInterval;
        var correctAnswers = 0;
        var incorrectAnswers = 0;
        var unansweredQuestions = 0;
        var questions = [{
                question: "What percentage of our oxygen is produced by the ocean?",
                answers: ["50%", "60%", "70%", "80%"],
                answerIndex: 2
            },
            {
                question: "How much of the earth's surface does the Pacific Ocean cover?",
                answers: ["10%", "20%", "30%", "40%"],
                answerIndex: 2
            },
            {
                question: "What does the deepest area of the ocean, 'Mariana Trench' measure?",
                answers: ["5km", "7km", "9km", "11km"],
                answerIndex: 3
            },
            {
                question: "How much of the ocean's surface have we explored?",
                answers: ["5%", "10%", "15%", "20%"],
                answerIndex: 0
            },
            {
                question: "How big is the 'Great Barrier Reef'?",
                answers: ["10km", "260km", "1600km", "2600km"],
                answerIndex: 3
            },
            {
                question: "How long is the largest underwater mountain range, 'Mid Oceanic Ridge'",
                answers: ["1200km", "6000km", "9500km", "56000km"],
                answerIndex: 2
            },
        ];

        $("#timer").text(time);
        renderQuestions();

        $("#start").on("click", function () {
            $("#intro").addClass("hidden");
            // $("#end").addClass("hidden");
            $("#trivia").removeClass("hidden");

            // $("#end").removeClass("hidden");


            timeInterval = setInterval(function () {
                time--;
                if (time === 0) {
                    clearInterval(timeInterval);
                    checkTrivia();
                }
                $("#timer").text(time);
            }, 1000);
        });

        function renderQuestions() {

            questions.forEach(function (question, index) {
                var $form = $("<form>");
                var $question = $("<h3>").text(question.question);

                $form.append($question);

                question.answers.forEach(function (answer, i) {
                    var $input = $('<input type="radio">');
                    $input.attr("value", answer);
                    $input.attr("name", index);
                    $form.append($input);
                    $form.append(answer);
                });

                $("#questions").append($form)

            });
        }

        function checkTrivia() {
            var $forms = $("form");
            $forms.each(function (i, elem) {
                // $(elem).find("input:checked").each(function (i, elem) {
                //         if (elem === yes) {
                //             correctAnswers++;
                //             $("#correctAnswers").text(correctAnswers);
                //         } else if (elem === no) {
                //             $("#").text(incorrectAnswers);

                        // } else if (elem === [i===0] ); {
                        //     $("#unansweredQuestions").text(unansweredQuestions);
                        // }

                    }
                )};
            // )};