
// import { connect } from 'react-redux'

// Step 1

function wrongGuessCount(word, guesses) {
  let wrongGuesses = 0;
  guesses.forEach(function (guess) {
    if (word.indexOf(guess) !== -1)
    {
      return wrongGuesses;
  } else {
      return wrongGuesses ++;
  }});
  return wrongGuesses;
}

// console.log('test wrong guesses: ', wrongGuessCount('hello', ['e', 'd', 'x', 'o']) === 2);



// Step 2

function showGuess(word, guesses) {
console.log(guesses);
let string = word.split('')
.map(function(element) {
  if (guesses.indexOf(element) !== -1) return element
  return element = "_"
})
console.log(string.join(" "))
  return string.join(" ")
}

console.log('test show guess 1:', showGuess('hello', ['l']) === '_ _ l l _');
console.log('test show guess 2:', showGuess('hello', ['l', 'a', 'e']) === '_ e l l _');


//  Step 3


function isWinner(word, guesses) {
    let win;
    let string = showGuess(word, guesses);
    if (string.indexOf("_") === -1) {
        return win = true;
    } else if (wrongGuessCount(word, guesses) > 6) {
        return win = false;
    } else {
        return win
    }
}


// console.log('test winner 1:', !isWinner('hello', ['e', 'x']))
// console.log('test winner 2:', isWinner('hello', ['o', 'l', 'e', 'h']))


// Step 4

function next(word, guesses) {
  showGuess(word,guesses)

  if(wrongGuessCount(word,guesses) === 6){
    console.log('You lost.  Boohoo!');
    ;
//
  };
  if(isWinner(word,guesses)) {
    console.log('Yayy! You won!');
  }
  rl.question('next letter? ', answer => {
      console.log('player wrote:', answer)
      guesses.push(answer);
      next(word,guesses);// do something with answer
  })
}
next('hello', [])
