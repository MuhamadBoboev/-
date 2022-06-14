'use script'
const mainBlock = document.querySelector('.main');
const overBlock = document.querySelector('.over');
const fertigButton = document.querySelector('.fertig__button');

const numberQuestion = document.querySelectorAll('.number-1');0
const numberAnswer = document.querySelectorAll('.number');
const gefunden = document.querySelectorAll('.gefunden__text');
const button = document.querySelector('.button')


button1.addEventListener('click', ()=>{
  numberQuestion.forEach( (e)=>{
    e.style.color= 'black';
  })
  console.log('balck')
})

button2.addEventListener('click', ()=>{

  numberQuestion.forEach( (e)=>{
    e.style.color= 'bisque'
  })
  console.log('red')
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
  if ( (numberQuestion[0].value === numberAnswer[0].value) && Number(numberQuestion[0].value) > 0 ) {
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

  const counter = document.querySelector('.versuche__span');
  const counterNumber = Number(counter.innerText);
  console.log(counterNumber)
  counter.innerText = counterNumber - 1;
  if(counter.innerText == 0) {
    mainBlock.style.display='none'
    overBlock.style.display = 'flex';
    for(let a in numberQuestion) {
      overBlock.querySelector('.ovet__answer').innerText = `${numberQuestion[a]}`
    }
    // overBlock.querySelector('.ovet__answer');

  } else {
    mainBlock.style.display='inherit'
    overBlock.style.display = 'none'
  }
})
fertigButton.addEventListener('click', ()=> {
  mainBlock.style.display='none'
  overBlock.style.display = 'flex';
  for(let a in numberQuestion) {
    overBlock.querySelector('.ovet__answer').innerText = `${numberQuestion[a]}`
  }
})
