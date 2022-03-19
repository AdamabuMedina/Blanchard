function getDomEl(selector) {
  return document.querySelector(selector)
}

function addClass(domEl, selector) {
  domEl.classList.add(selector)
};

function removeClass(domEl, selector) {
  domEl.classList.remove(selector)
}

function activateCheckBox(target) {
  const checkTarget = target.querySelector('.editions__check');
  const CheckBox = target.querySelector('.editions__checkbox-box');
  const allCheckBoxes = [...document.querySelectorAll('.editions__checkbox-box')]
  const allCheck = [...document.querySelectorAll('.editions__check')];
  const categoriesAccordionList = getDomEl('.editions__accordion-list');


  allCheckBoxes.forEach(el => removeClass(el, 'editions__checkbox-box--active'))
  allCheck.forEach(el => removeClass(el, 'editions__check--active'))
  addClass(checkTarget, 'editions__check--active');
  addClass(CheckBox, 'editions__checkbox-box--active');
  removeClass(categoriesAccordionList, 'editions__categories--active')
}

function activateEditionsCheckbox(event) {
  const allCheck = [...document.querySelectorAll('.editions__check')];
  const targetCheck = event.target.closest('.editions__check');
  const allCheckBoxes = [...document.querySelectorAll('.editions__checkbox-box')]
  const liItemEl = event.target.closest('.editions__accordion-item');
  if (targetCheck) {
    allCheckBoxes.forEach(el => removeClass(el, 'editions__checkbox-box--active'))
    const closestCheckBox = targetCheck.querySelector('.editions__checkbox-box');
    allCheck.forEach(el => removeClass(el, 'editions__check--active'))
    addClass(targetCheck, 'editions__check--active');
    addClass(closestCheckBox, 'editions__checkbox-box--active')
  }

  if (liItemEl) {
    activateCheckBox(liItemEl)
  }
}

function addClickListener() {
  document.addEventListener('click', function (event) {
    activateEditionsCheckbox(event)
  });
};

addClickListener();
