const minRange = document.getElementById('range-min');
const maxRange = document.getElementById('range-max');
const track = document.querySelector('.range__track');
const minBox = document.getElementById('range__values-min');
const maxBox = document.getElementById('range__values-max');
const minGap = 5; // шаг — минимум, кратно step
const rangeMin = parseInt(minRange.min);
const rangeMax = parseInt(maxRange.max);

function drawFill() {
  let min = parseInt(minRange.value);
  let max = parseInt(maxRange.value);
  // позиция в процентах
  let minPct = ((min - rangeMin)/(rangeMax - rangeMin))*100;
  let maxPct = ((max - rangeMin)/(rangeMax - rangeMin))*100;

  track.style.setProperty('--min', minPct + '%');
  track.style.setProperty('--max', maxPct + '%');
}

function syncInputs() {
  let min = parseInt(minRange.value);
  let max = parseInt(maxRange.value);
  minBox.textContent = min;
  maxBox.textContent = max;
  drawFill();
}

minRange.addEventListener('input', function() {
  if (parseInt(minRange.value) > parseInt(maxRange.value) - minGap) {
    minRange.value = parseInt(maxRange.value) - minGap;
  }
  syncInputs();
});

maxRange.addEventListener('input', function() {
  if (parseInt(maxRange.value) < parseInt(minRange.value) + minGap) {
    maxRange.value = parseInt(minRange.value) + minGap;
  }
  syncInputs();
});

// начальная отрисовка
syncInputs();
