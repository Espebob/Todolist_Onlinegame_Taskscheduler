const questions = [
    {
      question: "Which is the fastest bird in the world?",
      answers: ["Peregrine Falcon", "Bald Eagle", "Hummingbird", "Raven"],
      correctAnswer: 0,
    },
    {
      question: "What is the tallest waterfall in the world?",
      answers: ["Niagara Falls, New York", "Wailua Falls, Hawaii", "	Sutherland Falls, New Zealand", "Angel Falls, Venezuela"],
      correctAnswer: 3,
    },
  ];


  function displayQuestion(question){
    // displaying the question
    console.log(question.question);
    // dislaying the answers multiple choices
    question.answers.forEach((answer,index)=>{
        console.log(index+1+". "+answer);
    });
  }

  function checkAnswer(answer,question) {
    return question.correctAnswer === answer-1;
  }

  function main(){
    console.log("ONLINE QUIZ GAME");
    const checked_question = [];
    let score = 0;

    while(checked_question.length !== questions.length ){
        const currentQuestionIndex = parseInt(Math.random()*questions.length);

        if(!checked_question.includes(currentQuestionIndex)){
            const question = questions[currentQuestionIndex];

            // The question
            displayQuestion(question);
            // The user select one answer
            const answer = parseInt(prompt("Select Only one answer:"));
            // Checking the correct answer
            if(checkAnswer(answer, question)){
                console.log("correct")
                score++;
            }else {
                console.log("Wrong answer, the answer is: " + question.answers[question.correctAnswer]); 
            }

            checked_question.push(currentQuestionIndex);
        }
 
    }
    
    console.log("Thank you for playing with use.");
    console.log("You Scored "+score+ " Out of "+ questions.length);
  }

  main();