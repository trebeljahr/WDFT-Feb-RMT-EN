const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const centDecElement = document.getElementById('milDec');
const centUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime(time) {
  console.log('Hello', time);
  // "00:01:00"
  minDecElement.innerText = time[0];
  minUniElement.innerText = time[1];
  secDecElement.innerText = time[3];
  secUniElement.innerText = time[4];
  centDecElement.innerText = time[6];
  centUniElement.innerText = time[7];

  // ... your code goes here
}

function printMinutes() {
  // ... your code goes here
}

function printSeconds() {
  // ... your code goes here
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  const splitElement = document.createElement('li');
  splitElement.innerText = chronometer.split();

  splitsElement.appendChild(splitElement);
  // ... your code goes here
}

function resetTheClock() {
  splitsElement.innerHTML = '';
  chronometer.reset();
  printTime('00:00:00');
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  const isStopped = btnLeftElement.innerText === 'START';
  // btnLeftElement.classList.toggle('stop');
  // btnLeftElement.classList.toggle('start');
  btnLeftElement.innerText = isStopped ? 'STOP' : 'START';
  btnLeftElement.className = isStopped ? 'btn stop' : 'btn start';
  btnRightElement.innerText = isStopped ? 'SPLIT' : 'RESET';
  btnRightElement.className = isStopped ? 'btn split' : 'btn reset';

  isStopped ? chronometer.start(printTime) : chronometer.stop();
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  const isStopped = btnLeftElement.innerText === 'START';

  isStopped ? resetTheClock() : printSplit();
});
