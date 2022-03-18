const searchMobile = document.querySelector('.search--mobile')
const searchBtns = searchMobile.querySelectorAll('button');

searchBtns.forEach(item => {
  item.addEventListener('click', (event) => {
    event.preventDefault();
    searchMobile.classList.toggle('search--showed');
    document.querySelector('.header-top__container').classList.toggle('header-top__container--mobile');
  })
})
