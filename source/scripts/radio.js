const milkRadios = document.querySelectorAll('input[name="milk"]');

milkRadios.forEach((radio, idx, arr) => {
  radio.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
      e.preventDefault();
      let nextIdx = (idx + 1) % arr.length;
      arr[nextIdx].focus();
      if (!arr[nextIdx].disabled) arr[nextIdx].click();
    }
    if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
      e.preventDefault();
      let prevIdx = (idx - 1 + arr.length) % arr.length;
      arr[prevIdx].focus();
      if (!arr[prevIdx].disabled) arr[prevIdx].click();
    }
  });
  radio.addEventListener('focus', () => {
    arr.forEach(r => r.setAttribute('tabindex', '-1'));
    radio.setAttribute('tabindex', '0');
  });
  radio.addEventListener('change', () => {
    arr.forEach(r => r.setAttribute('aria-checked', 'false'));
    radio.setAttribute('aria-checked', 'true');
  });
});
