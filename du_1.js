const readline = require('readline');

const randomNum = Math.floor(Math.random() * 10) + 1;

const maxAttempts = 3;
let attempts = 0;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askUser() {
  rl.question('Uhádni číslo od 1 do 10: ', (userInput) => {
    const userGuess = parseInt(userInput);

    if (userGuess === randomNum) {
      console.log('Gratuluji! Uhádl jsi číslo.');
      rl.close();
    } else {
      console.log('Špatně. Zkus to znovu.');
      attempts++;

      if (attempts < maxAttempts) {
        askUser();
      } else {
        console.log(`Bohužel jsi nepřesáhl maximální počet pokusů. Hledané číslo bylo: ${randomNum}`);
        rl.close();
      }
    }
  });
}

askUser();
