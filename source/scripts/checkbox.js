const countryCheckboxes = document.querySelectorAll('input[name="country"]');

countryCheckboxes.forEach((box) => {
  box.addEventListener('keydown', (e) => {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      if (!box.disabled) box.checked = !box.checked;
      box.setAttribute('aria-checked', box.checked ? 'true' : 'false');
    }
  });
  box.addEventListener('change', () => {
    box.setAttribute('aria-checked', box.checked ? 'true' : 'false');
  });
});
