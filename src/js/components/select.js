const selectElement = document.querySelectorAll('.gallery-select');
const gallerySelectTrigger = document.querySelector('.gallery-select-trigger');

selectElement.forEach(el => {
  new Choices(el, {
    shouldSort: false,
    position: 'bottom',
    searchEnabled: false,
  })
})


const deleteSelectItem = (event) => {
  const gallerySelectTriggerEl = event.target.closest('.gallery-select-trigger');

  if (gallerySelectTriggerEl) {
    [...document.querySelectorAll('.gallery-select-item')].forEach(el => {
      if (el.classList.contains('select__item_selected')) {
        el.style.display = 'none'
      } else {
        el.style.display = 'block'
      }
    })
  }
  if (event.target !== gallerySelectTrigger) {
    selectElement.classList.remove('select_show')
  }
}
