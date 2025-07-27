const OPTION_SELECTED_CLASS = 'sort__option--selected';

const sortContainer = document.querySelector('.sort');

const initSort = (container) => {
  const sortButton = container.querySelector('.sort__current');
  const sortList = container.querySelector('.sort__list');
  const sortOptions = sortList.querySelectorAll('.sort__option');

  let selectedOptionIndex = Array.from(sortOptions).findIndex((option) =>
    option.classList.contains(OPTION_SELECTED_CLASS)
  );

  const openSort = () => {
    sortList.hidden = false;
    sortButton.setAttribute('aria-expanded', 'true');
    sortOptions[selectedOptionIndex].focus();
  };

  const closeSort = () => {
    sortList.hidden = true;
    sortButton.setAttribute('aria-expanded', 'false');
  };

  const updateSelected = (index) => {
    sortOptions.forEach((option, i) => {
      option.setAttribute('aria-selected', i === index);
      option.classList.toggle(OPTION_SELECTED_CLASS, i === index);
    });

    selectedOptionIndex = index;
    sortButton.childNodes[0].nodeValue = `${sortOptions[index].textContent} `;
  };

  sortButton.addEventListener('click', () => {
    if (sortList.hidden) {
      openSort();
    } else {
      closeSort();
    }
  });

  sortButton.addEventListener('keydown', (evt) => {
    if (['Enter', ' ', 'ArrowDown', 'ArrowUp'].includes(evt.key)) {
      evt.preventDefault();
      openSort();
    }
  });

  sortOptions.forEach((option, index) => {
    option.tabIndex = -1;

    option.addEventListener('click', () => {
      updateSelected(index);
      closeSort();
    });

    option.addEventListener('keydown', (evt) => {
      let nextIndex;

      switch (evt.key) {
        case 'ArrowDown':
          evt.preventDefault();
          nextIndex = (index + 1) % sortOptions.length;
          sortOptions[nextIndex].focus();
          break;
        case 'ArrowUp':
          evt.preventDefault();
          nextIndex = (index - 1 + sortOptions.length) % sortOptions.length;
          sortOptions[nextIndex].focus();
          break;
        case 'Home':
          evt.preventDefault();
          sortOptions[0].focus();
          break;
        case 'End':
          evt.preventDefault();
          sortOptions[sortOptions.length - 1].focus();
          break;
        case 'Enter':
        case ' ':
          evt.preventDefault();
          updateSelected(index);
          closeSort();
          break;
        case 'Escape':
          closeSort();
          break;
      }
    });
  });

  sortList.hidden = true;
  updateSelected(selectedOptionIndex);
};

if (sortContainer) {
  initSort(sortContainer);
}
