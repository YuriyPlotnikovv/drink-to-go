const NO_JS_CLASS = 'no-js';

const itemsNeedJs = document.querySelectorAll('.no-js');

const removeNoJSClass = (list) => {
  list.forEach((item) => {
    item.classList.remove(NO_JS_CLASS);
  });
};

if (itemsNeedJs.length) {
  removeNoJSClass(itemsNeedJs);
}
