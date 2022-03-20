function addClass(domEl, selector) {
  domEl.classList.add(selector)
};

function removeClass(domEl, selector) {
  domEl.classList.remove(selector)
}

function activateSpoller(event) {
  const spoller = event.target.closest('.catalog__accordion-btn');
  const allSpollersBody = [...document.querySelectorAll('.catalog__accordion-body')];
  const allSpollersLists = [...document.querySelectorAll('.catalog__accordion-list')];

  if (spoller) {
    const spollerBody = spoller.nextElementSibling;
    const allLists = spollerBody.querySelectorAll('.catalog__accordion-list');
    const btn = spollerBody.previousElementSibling;
    const btnAll = [...document.querySelectorAll('.catalog__accordion-btn')];

    if (spollerBody.classList.contains('catalog__accordion-body--active') && window.innerWidth > 440) {
      removeClass(spollerBody, 'catalog__accordion-body--active');
      removeClass(btn, '_active');
      [...spoller.nextElementSibling.querySelectorAll('.catalog__accordion-nameBtn')].forEach(el => {
        el.tabIndex = -1;
      })
      allLists.forEach(el => {
        removeClass(el, 'animate__flipInX')
        addClass(el, "animate__flipOutX")
      });
    } else if (window.innerWidth > 440) {
      allSpollersBody.forEach(el => removeClass(el, 'catalog__accordion-body--active'));
      btnAll.forEach(el => removeClass(el, '_active'));
      allSpollersLists.forEach(el => addClass(el, 'animate__flipOutX'));

      addClass(spollerBody, 'catalog__accordion-body--active');
      addClass(btn, '_active');
      [...spoller.nextElementSibling.querySelectorAll('.catalog__accordion-nameBtn')].forEach(el => {
        el.tabIndex = 0;
      })

      allLists.forEach(el => {
        removeClass(el, "animate__flipOutX")
        setTimeout(() => {
          addClass(el, 'animate__flipInX')
        }, 50);
      });
    } else if (spollerBody.classList.contains('catalog__accordion-body--active') && window.innerWidth <= 440) {
      removeClass(spollerBody, 'catalog__accordion-body--active');
      removeClass(btn, '_active');
      [...spoller.nextElementSibling.querySelectorAll('.catalog__accordion-nameBtn')].forEach(el => {
        el.tabIndex = -1;
      })
    } else if (window.innerWidth <= 440) {
      allSpollersBody.forEach(el => removeClass(el, 'catalog__accordion-body--active'));
      btnAll.forEach(el => removeClass(el, '_active'));

      addClass(spollerBody, 'catalog__accordion-body--active');
      addClass(btn, '_active');

      [...spoller.nextElementSibling.querySelectorAll('.catalog__accordion-nameBtn')].forEach(el => {
        el.tabIndex = 0;
      })
    }
  }
}

const catalogAccordionBtn = [...document.querySelectorAll('.catalog__accordion-btn')];

catalogAccordionBtn.forEach(el => {
  el.addEventListener('focus', ev => {
    const catalogAccordionBody = el.nextElementSibling;
    const catalogAccordionItem = [...catalogAccordionBody.querySelectorAll('.catalog__accordion-nameBtn')];

    if (!catalogAccordionBody.classList.contains('catalog__accordion-body--active')) {
      catalogAccordionItem.forEach(el => el.tabIndex = -1)
    }
  })
})

function setNameBtnAttr() {
  const allNameBtn = [...document.querySelectorAll('.catalog__accordion-nameBtn')];

  for (let index = 0; index < allNameBtn.length; index++) {
    if (index % 2 === 0) {
      allNameBtn[index].setAttribute('data-tabName', 'Художник 1')
    }
    if (index % 2 === 1) {
      allNameBtn[index].setAttribute('data-tabName', 'Художник 2')
    }
  }
};

function activateCatalogInfoBlock(event) {
  const nameBtn = event.target.closest('.catalog__accordion-nameBtn');
  if (nameBtn) {
    const allBlocks = [...document.querySelectorAll('.catalog__info-block')];
    const allBtnName = [...document.querySelectorAll('.catalog__accordion-nameBtn')];
    allBlocks.forEach(el => {
      if (el.getAttribute('data-blockName') === nameBtn.getAttribute('data-tabName')) {
        removeClass(el, 'catalog__info-block--hide');
        el.querySelector('.catalog__info-name').textContent = nameBtn.textContent;
        setTimeout(() => {
          addClass(el, 'catalog__info-block--show')
        }, 300);

        allBtnName.forEach(el => removeClass(el, 'catalog__accordion-nameBtn--active'))

        addClass(nameBtn, 'catalog__accordion-nameBtn--active')
      } else if (el.classList.contains('catalog__info-block--show')) {
        addClass(el, 'catalog__info-block--hide');
        setTimeout(() => {
          removeClass(el, 'catalog__info-block--show')
        }, 300);
      }
    })
  }
}

function addClickListener() {
  document.addEventListener('click', function (event) {
    activateSpoller(event)
    activateCatalogInfoBlock(event)
  });
};

setNameBtnAttr()
addClickListener();
