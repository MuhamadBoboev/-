'use script'
const numberQuestion = document.querySelectorAll('.number-1');0
const numberAnswer = document.querySelectorAll('.number');
const gefunden = document.querySelectorAll('.gefunden__text');
const button = document.querySelector('.button')

let array = numberQuestion;
button2.addEventListener('click', ()=>{

  numberQuestion.forEach( (e)=>{
    e.value= ''
  })
})


const arrayQuestion = {
  numberQ1: numberQuestion[0].value,
  numberQ2: numberQuestion[1].value,
  numberQ3: numberQuestion[2].value,
  numberQ4: numberQuestion[3].value,
}
const arrayAnswer = {
  numberA1: numberAnswer[0].value,
  numberA2: numberAnswer[1].value,
  numberA3: numberAnswer[2].value,
  numberA4: numberAnswer[3].value,
}

button.addEventListener('click', function() {
  if ( numberQuestion[0].value === numberAnswer[0].value) {
    document.querySelectorAll('.win-1')[0].style.backgroundColor='green';
    document.querySelectorAll('.win-1')[1].style.backgroundColor='green';
    gefunden[0].innerText =  numberQuestion[0].value;
    console.log('true');
  } else {
    document.querySelectorAll('.win-1')[0].value = '';
    document.querySelectorAll('.win-1')[1].value = '';
    document.querySelectorAll('.win-1')[0].style.backgroundColor='bisque'
    document.querySelectorAll('.win-1')[1].style.backgroundColor='white'
  }
  if ( arrayQuestion.number2 == arrayAnswer.number2) {
    console.log('2')
  }
  if ( arrayQuestion.number3 == arrayAnswer.number3) {
    console.log('3')
  }
  if ( arrayQuestion.number4 == arrayAnswer.number4) {
    console.log('4')
  }
})

