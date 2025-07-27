const rangeContainer = document.querySelector('.range');

const initRange = (container) => {
  const minRange = container.querySelector('.range__slider--min');
  const maxRange = container.querySelector('.range__slider--max');
  const track = container.querySelector('.range__track');
  const minInput = container.querySelector('.range__values-input--min');
  const maxInput = container.querySelector('.range__values-input--max');

  const INACTIVE_CLASS = 'range__values-item--inactive';
  const MIN_GAP = 5;
  const RANGE_MIN = Number(minRange.min);
  const RANGE_MAX = Number(maxRange.max);

  const updateInactiveState = () => {
    minInput.classList.toggle(INACTIVE_CLASS, Number(minInput.value) === RANGE_MIN);
    maxInput.classList.toggle(INACTIVE_CLASS, Number(maxInput.value) === RANGE_MAX);
  };

  const updateTrack = () => {
    const min = Number(minRange.value);
    const max = Number(maxRange.value);
    const minPct = ((min - RANGE_MIN) / (RANGE_MAX - RANGE_MIN)) * 100;
    const maxPct = ((max - RANGE_MIN) / (RANGE_MAX - RANGE_MIN)) * 100;
    track.style.setProperty('--min', `${minPct}%`);
    track.style.setProperty('--max', `${maxPct}%`);
  };

  const syncFromRange = () => {
    minInput.value = minRange.value;
    maxInput.value = maxRange.value;
    updateInactiveState();
    updateTrack();
  };

  const syncFromInput = () => {
    let min = Number(minInput.value);
    let max = Number(maxInput.value);

    if (min > max - MIN_GAP) {
      min = max - MIN_GAP;
    }
    if (max < min + MIN_GAP) {
      max = min + MIN_GAP;
    }

    min = Math.max(RANGE_MIN, Math.min(min, RANGE_MAX - MIN_GAP));
    max = Math.min(RANGE_MAX, Math.max(max, RANGE_MIN + MIN_GAP));

    minInput.value = min;
    maxInput.value = max;
    minRange.value = min;
    maxRange.value = max;

    updateInactiveState();
    updateTrack();
  };

  minRange.addEventListener('input', () => {
    if (+minRange.value > +maxRange.value - MIN_GAP) {
      minRange.value = +maxRange.value - MIN_GAP;
    }
    syncFromRange();
  });

  maxRange.addEventListener('input', () => {
    if (+maxRange.value < +minRange.value + MIN_GAP) {
      maxRange.value = +minRange.value + MIN_GAP;
    }
    syncFromRange();
  });

  minInput.addEventListener('input', syncFromInput);
  maxInput.addEventListener('input', syncFromInput);

  syncFromRange();
};

if (rangeContainer) {
  initRange(rangeContainer);
}
