const sortBtn = document.getElementById('sortBtn');
const sortList = document.getElementById('sortList');
const sortOptions = sortList.querySelectorAll('.sort__option');
const currentText = sortBtn.querySelector('span');

let selectedOptionIdx = Array.from(sortOptions).findIndex(opt =>
  opt.classList.contains('sort__option--selected')
);

function openSort() {
  sortList.hidden = false;
  sortBtn.setAttribute('aria-expanded', 'true');
  sortOptions[selectedOptionIdx].focus();
}
function closeSort() {
  sortList.hidden = true;
  sortBtn.setAttribute('aria-expanded', 'false');
  sortBtn.focus();
}
function updateSelected(idx) {
  sortOptions.forEach((opt, i) => {
    opt.setAttribute('aria-selected', i === idx ? 'true' : 'false');
    opt.classList.toggle('sort__option--selected', i === idx);
  });
  selectedOptionIdx = idx;
  currentText.textContent = sortOptions[idx].textContent;
}

sortBtn.addEventListener('click', (e) => {
  if(sortList.hidden) {
    openSort();
  } else {
    closeSort();
  }
});

sortBtn.addEventListener('keydown', (e) => {
  if (["Enter", " ", "ArrowDown", "ArrowUp"].includes(e.key)) {
    e.preventDefault();
    openSort();
  }
});

sortOptions.forEach((option, idx) => {
  option.addEventListener('click', (e) => {
    updateSelected(idx);
    closeSort();
    // сюда вставить обработчик сортировки по option.dataset.value
  });
  option.addEventListener('keydown', (e) => {
    if(e.key === "ArrowDown") {
      e.preventDefault();
      let nextIdx = (idx + 1) % sortOptions.length;
      sortOptions[nextIdx].focus();
    } else if(e.key === "ArrowUp") {
      e.preventDefault();
      let prevIdx = (idx - 1 + sortOptions.length) % sortOptions.length;
      sortOptions[prevIdx].focus();
    } else if(e.key === "Home") {
      e.preventDefault();
      sortOptions[0].focus();
    } else if(e.key === "End") {
      e.preventDefault();
      sortOptions[sortOptions.length - 1].focus();
    } else if(e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      updateSelected(idx);
      closeSort();
    } else if(e.key === "Escape") {
      closeSort();
    }
  });
});

// Клик вне селекта — закрыть
document.addEventListener('mousedown', e => {
  if(!e.target.closest('.catalog__sort')) {
    closeSort();
  }
});

// Tab — закрытие списка
sortList.addEventListener('focusout', e => {
  setTimeout(() => {
    if(!sortList.contains(document.activeElement)) {
      closeSort();
    }
  }, 10);
});
