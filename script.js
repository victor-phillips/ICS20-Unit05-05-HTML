// sets the values of numbers 1 and 2
let num1 = 0
let num2 = 0
let answer = 0
// detects when button is pressed and calculates the result
document.getElementById('button').addEventListener('click', solve)
// calculates the area
function solve () {
  num1 = document.getElementById('length').value
  num2 = document.getElementById('width').value
  answer = num1 * num2
  document.getElementById('answer').innerHTML = answer
}
