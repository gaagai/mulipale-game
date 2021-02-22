// Get Elements
const $header = document.getElementById("top")
const $board = document.getElementById("board")
const $audioTag = document.getElementById("audio")
const $container = document.querySelector(".container")
const $answer = document.querySelector(".answer")
const $counter = document.querySelector(".count")
const $beginers = document.getElementById("beginner")
const $advanced = document.getElementById("advanced")
const $countDown = document.getElementById("countDown")

// Variables
let counter = 0

//******* */ Functions
const getRandom = () => {
  return Math.floor(Math.random() * 10 + 1)
}

// Create board
const createBoard = () => {
  $board.innerHTML = ""
  const firstRandom = getRandom()
  const secondRandom = getRandom()
  const numbers = [firstRandom, secondRandom]
  numbers.forEach((number, i) => {
    const divElement = document.createElement("div")
    divElement.innerText = number
    divElement.dataset.order = i
    divElement.classList.add("digit")
    if (i === 1) {
      const multiElement = document.createElement("div")
      multiElement.innerText = "x"
      multiElement.classList.add("multi")
      $board.appendChild(multiElement)
    }
    $board.appendChild(divElement)
    if (i === 1) {
      const equalElement = document.createElement("div")
      equalElement.innerText = "="
      $board.appendChild(equalElement)
    }
  })
  const answerInput = document.createElement("input")
  answerInput.classList.add("answer")
  answerInput.dataset.id = "answer"
  answerInput.dataset.answer = numbers[0] * numbers[1]
  answerInput.type = "number"
  answerInput.setAttribute("maxlength", "2")

  answerInput.setAttribute("autofocus", "true")
  $board.appendChild(answerInput)
  // $answer.focus()
}

createBoard()

let inputsDigitsArray = []

const submitAnswer = ($event) => {
  if ($event.type === "keyup" && $event.keyCode === 13) {
    const $inputVal = document.querySelector(".answer")
    const isAnswerCurrect = $inputVal.value === $inputVal.dataset.answer
    if (isAnswerCurrect) {
      console.log("Good!!!!!!!!!!")
      $container.classList.add("currect")
      // Currect Sound - play
      setTimeout(() => {
        counter = counter + 1
        console.log("counter", counter)
        $counter.innerText = counter
        $container.classList.remove("currect")
        createBoard()
        document.querySelector(".answer").focus()
      }, 700)

      // $inputVal.value = null
    } else {
      console.log("Can you do better ?????")
      $container.classList.add("wrong")
      setTimeout(() => {
        counter = 0
        $counter.innerText = counter
        $container.classList.remove("wrong")
        $inputVal.value = null
      }, 700)
    }
  }
}

// const handleBeginers = () => {
//   //
//   console.log("Begginers")
// }
// const handleAdvanced = () => {
//   //
//   $countDown.classList.add("visible")

//   let secondes = 10
//   const countDown = setInterval(() => {
//     secondes--
//     $countDown.innerText = secondes
//     console.log("secondes", secondes)
//     if (secondes === 0) {
//       console.log("Game Ended")
//       clearInterval(countDown)
//       $countDown.classList.remove("visible")
//     }
//   }, 1000)
// }

// Event listeners

$board.addEventListener("keyup", submitAnswer)
$board.addEventListener("change", submitAnswer)
// $beginers.addEventListener("click", handleBeginers)
// $advanced.addEventListener("click", handleAdvanced)
