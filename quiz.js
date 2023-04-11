const quizData = [
	{
	  question: "What is the capital of France?",
	  options: ["Paris", "Rome", "Madrid", "Berlin"],
	  answer: "Paris"
	},
	{
	  question: "What is the largest country in the world?",
	  options: ["China", "USA", "Russia", "India"],
	  answer: "Russia"
	},
	{
	  question: "What is the smallest country in the world?",
	  options: ["Monaco", "Maldives", "Vatican City", "Liechtenstein"],
	  answer: "Vatican City"
	}
  ];
  
  const quizContainer = document.getElementById("quiz");
  const submitButton = document.getElementById("submit");
  
  function displayQuiz() {
	const output = [];
  
	quizData.forEach((question, index) => {
	  const options = [];
  
	  for (let i = 0; i < question.options.length; i++) {
		options.push(
		  `<label>
			<input type="radio" name="question${index}" value="${question.options[i]}">
			${question.options[i]}
		  </label>`
		);
	  }
  
	  output.push(
		`<div class="question">
		  <h2>${question.question}</h2>
		  ${options.join("")}
		</div>`
	  );
	});
  
	quizContainer.innerHTML = output.join("");
  }
  
  function calculateScore() {
	const answerContainers = quizContainer.querySelectorAll(".question");
	let score = 0;
  
	quizData.forEach((question, index) => {
	  const answerContainer = answerContainers[index];
	  const selected = answerContainer.querySelector(`input[name="question${index}"]:checked`);
	  const userAnswer = selected ? selected.value : undefined;
  
	  if (userAnswer === question.answer) {
		score++;
		answerContainers[index].style.color = "green";
	  } else {
		answerContainers[index].style.color = "red";
	  }
	});
  
	alert(`Your score is ${score}/${quizData.length}`);
  }
  
  displayQuiz();
  
  submitButton.addEventListener("click", calculateScore);
  