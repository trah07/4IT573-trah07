const randomNum = Math.floor(Math.random() * 10) + 1;
const maxAttempts = 3;
let attempts = 0;

function askUser() {
  const userInput = prompt('Uhádni číslo od 1 do 10: ');
  const userGuess = parseInt(userInput);

  if (userGuess === randomNum) {
    console.log('Gratuluji! Uhádl jsi číslo.');
  } else {
    console.log('Špatně. Zkus to znovu.');
    attempts++;

    if (attempts < maxAttempts) {
      askUser();
    } else {
      console.log(`Bohužel jsi nepřesáhl maximální počet pokusů. Hledané číslo bylo: ${randomNum}`);
    }
  }
}

askUser();