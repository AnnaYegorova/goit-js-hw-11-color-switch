const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];
  const INTERVAL_DELAY = 1000
  let changeBgc = null

  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

const btnStart = document.querySelector('[data-action="start"]')
const btnStop = document.querySelector('[data-action="stop"]')

btnStart.addEventListener("click", () => {
  changeBgc = setInterval(() => {
    document.body.style.background = colors[randomIntegerFromInterval(0, colors.length-1)]}, INTERVAL_DELAY)
    btnStart.disabled = true
    btnStart.classList.add('disabled')
    
  })

btnStop.addEventListener("click", ()=> {
  clearInterval(changeBgc)
  btnStart.disabled = false
  btnStart.classList.remove('disabled')
  })

  