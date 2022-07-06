
let inputNumber = document.getElementById("number-input")
let convertBtn = document.getElementById("convert-btn")
let lengthLine = document.getElementById("length-line")
let volumeLine = document.getElementById("volume-line")
let massLine = document.getElementById("mass-line")

const meterToFeet =  3.281
const literToGallon =  0.264
const kiloToPound =  2.204


convertBtn.addEventListener("click", function() {
  let baseValue = inputNumber.value
  lengthLine.textContent = `${baseValue} meters = ${(baseValue * meterToFeet).toFixed(3)} feets | 
  ${baseValue} feets = ${(baseValue / meterToFeet).toFixed(3)} meters`
  volumeLine.textContent = `${baseValue} litres = ${(baseValue * literToGallon).toFixed(3)} gallons | 
  ${baseValue} gallons = ${(baseValue / literToGallon).toFixed(3)} litres`
  massLine.textContent = `${baseValue} kilos = ${(baseValue * kiloToPound).toFixed(3)} pounds | 
  ${baseValue} pounds = ${(baseValue / kiloToPound).toFixed(3)} kilos`

})