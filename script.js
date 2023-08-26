const choices = ['rock', 'paper', 'scissors'];
const resultText = document.getElementById('result');

document.querySelectorAll('.choice').forEach((choice) => {
  choice.addEventListener('click', () => {
    const userChoice = choice.id;
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    const result = `You chose ${userChoice}. Computer chose ${computerChoice}. You lose!`;

    resultText.textContent = result;
  });
});
