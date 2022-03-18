import _vars from "../_vars";

function showHeaderSelect(item, event) {

  item.querySelectorAll('.header-select__item').forEach(i => {
    i.setAttribute('tabindex', '0');
  });

  _vars.headerSelect.forEach((i) => {
    if (i !== event.currentTarget) {
      i.classList.remove('header-select--showed');

      _vars.headerSelectTitles.forEach(title => {
        title.setAttribute('aria-expanded', 'false');
      })
    }
  })

  event.currentTarget.classList.toggle('header-select--showed');

  if (event.currentTarget.classList.contains('header-select--showed')) {
    item.querySelector('.header-select__top').setAttribute('aria-expanded', 'true');
  } else {
    item.querySelector('.header-select__top').setAttribute('aria-expanded', 'false');
  }
}

_vars.headerSelect.forEach((item) => {
  item.addEventListener('click', function (event) {
    showHeaderSelect(item, event);
  })
})

_vars.headerSelect.forEach((item) => {
  item.addEventListener('keydown', function (event) {
    if (event.keyCode === 13) {
      showHeaderSelect(item, event);
    } else if (event.keyCode === 27) {
      event.currentTarget.classList.remove('header-select--showed');
      item.querySelector('.header-select__top').setAttribute('aria-expanded', 'false');
    }
  })
})
