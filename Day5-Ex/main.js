//Mini Project : Play The Game

function playTheGame() {
    const isUserReady = confirm("Do you want to play?")

    if (isUserReady){
        alert("No problem, Goodbaye")
        return
    }

const computerNumber = generateRandomNumber()
let answer = prompt("enter a number")
while(Number(answer) != computerNumber) {


  if (isOnlyNumbers (Number((answer))) {
    alert ("sorry not a number, Goodbaye")
  }

  if (isBetweenZeroAndTen(answer)){
    alert("sorry it not the good answer")
    return
  }
  answer = prompt("enter a number")
}


  console.log("computernumber:" , computerNumber)
  console.log("we are playing the game")
}


function cangameContinue() {


}


function isOnlyNumbers(str){
    const regex = new RegExp(/[0-9]*$/)
    return regex.test(str)
}
function isBetweenZeroAndTen(number){
    return number >= 0 && number <= 10
}

function generateRandomNumber(){
    return Math.floor(math.random() *11)
}

function computerNumber(userNumber,computerNumber){
    if (userNumber === computerNumber){
        alert("Winner")
        return
    }
    if (userNumber > computerNumber){
        alert("your number is bigger than the computer")
    }
}







