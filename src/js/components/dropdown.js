import SimpleBar from "simplebar";

const headerSelect = document.querySelectorAll('.header-select')
const headerSelectList = document.querySelectorAll('.header-select__list')
const headerSelectTitles = document.querySelectorAll('.header-select__top')

function showHeaderSelect(item, event) {
  item.querySelectorAll('.header-select__item').forEach(i => {
    i.setAttribute('tabindex', '0');
  });

  headerSelect.forEach((i) => {
    if (i !== event.currentTarget) {
      i.classList.remove('header-select--showed');

      headerSelectTitles.forEach(title => {
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

headerSelect.forEach((item) => {
  item.addEventListener('click', function (event) {
    showHeaderSelect(item, event);
  })
})

headerSelect.forEach((item) => {
  item.addEventListener('keydown', function (event) {
    if (event.keyCode === 13) {
      showHeaderSelect(item, event);
    } else if (event.keyCode === 27) {
      event.currentTarget.classList.remove('header-select--showed');
      item.querySelector('.header-select__top').setAttribute('aria-expanded', 'false');
    }
  })
})

headerSelectList.forEach(item => {
  let simplebar = new SimpleBar(item, {
    autoHide: false,
  });
})