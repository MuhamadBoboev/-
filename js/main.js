'use script'
const mainBlock = document.querySelector('.main');
const mainBlock1 = document.querySelector('.main-block__1');
const overBlock = document.querySelector('.over');
const overButton = document.querySelector('.over__button')
const fertigButton = document.querySelector('.fertig__button');

const numberQuestion = document.querySelectorAll('.number-1');0
const numberAnswer = document.querySelectorAll('.number');
const gefunden = document.querySelectorAll('.gefunden__text');
const button = document.querySelector('.button')


button1.addEventListener('click', ()=>{
  numberQuestion.forEach( (e)=>{
    e.style.color= 'black';
  })
})

button2.addEventListener('click', ()=>{

  numberQuestion.forEach( (e)=>{
    e.style.color= 'bisque'
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
  if ( (numberQuestion[0].value === numberAnswer[0].value) && Number(numberQuestion[0].value) > 0 ) {
    document.querySelectorAll('.win-1')[0].style.backgroundColor='green';
    document.querySelectorAll('.win-1')[1].style.backgroundColor='green';
    gefunden[0].innerText =  numberQuestion[0].value;
  } else {
    document.querySelectorAll('.win-1')[0].value = '';
    document.querySelectorAll('.win-1')[1].value = '';
    document.querySelectorAll('.win-1')[0].style.backgroundColor='bisque'
    document.querySelectorAll('.win-1')[1].style.backgroundColor='white'
  }
  ifen()

  const counter = document.querySelector('.versuche__span');
  const counterNumber = Number(counter.innerText);
  counter.innerText = counterNumber - 1;
  if(counter.innerText == 0) {
    mainBlock.style.display='none'
    overBlock.style.display = 'flex';
    for(let a in numberQuestion) {
      overBlock.querySelector('.ovet__answer').innerText = numberQuestion[0].value
    }

  } else {
    mainBlock.style.display='inherit'
    overBlock.style.display = 'none'
  }
  const overText = overBlock.querySelector('.ovet__answer').innerText = numberQuestion[0].value + numberQuestion[1].value +numberQuestion[2].value +numberQuestion[3].value
  const overSpan = document.querySelector('.over__span');
  if(overText.length == 4) {
    mainBlock.style.display='none'
    overBlock.style.display = 'flex';
    if(overText.length == 4) {
        overSpan.innerText= 'Выиграли!'
      } else {
          overSpan.innerText= 'Проиграли!'
      }
  }
  scale()
  function scale() {
    document.querySelector('.versuche__text').classList.toggle('active')
  }
  setTimeout(scale, 1000);

})
function ifen() {
  function BD(a, b) {
    if ( (numberQuestion[a].value === numberAnswer[b].value) && Number(numberQuestion[a].value) > 0 ) {
      document.querySelectorAll(`.win-${a+1}`)[0].style.backgroundColor='green';
      document.querySelectorAll(`.win-${a+1}`)[1].style.backgroundColor='green';
      gefunden[a].innerText =  numberQuestion[a].value;
    } else {
      document.querySelectorAll(`.win-${a+1}`)[0].value = '';
      document.querySelectorAll(`.win-${a+1}`)[1].value = '';
      document.querySelectorAll(`.win-${a+1}`)[0].style.backgroundColor='bisque'
      document.querySelectorAll(`.win-${a+1}`)[1].style.backgroundColor='white'
    }
  }
  if (true ) {
    BD(0, 0)
  }
  if (true ) {
    BD(1, 1)
  }
  if (true ) {
    BD(2, 2)
  }
  if (true ) {
    BD(3, 3)
  }
}
fertigButton.addEventListener('click', ()=> {
  over();
  ifen()
  function over() {
    mainBlock.style.display='none'
    overBlock.style.display = 'flex';
    const overText = overBlock.querySelector('.ovet__answer').innerText = numberQuestion[0].value + numberQuestion[1].value +numberQuestion[2].value +numberQuestion[3].value
    const overSpan = document.querySelector('.over__span');
    if(overText.length == 4) {
      overSpan.innerText= 'Выиграли!'
    } else {
        overSpan.innerText= 'Проиграли!'
    }
  }
})
overButton.addEventListener('click', function(){
  mainBlock.style.display='inherit'
  overBlock.style.display = 'none';

})
