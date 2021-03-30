// i connected it to a button because I wanted to look at the website before getting spammed by 'guess my age'
document.getElementById('play').addEventListener('click', play)

// sets my age to 15, user guess to 0
const age = 15
let guess = 0

function play () {
  while (guess !== age) {
    guess = prompt('guess my age')
    if (age === guess) {
      alert('congrats, you guessed right')
    } else if (age > guess) {
      alert('try higher')
    } else if (age < guess) {
      alert('try lower')
    } else {
      alert('please enter a valid number')
    }
  }
}
