import { createPopper } from '@popperjs/core';

const el1 = document.querySelector(".tooltip__btn-1")
const tooltip1 = document.querySelector(".tooltip__txt-1")

const el2 = document.querySelector(".tooltip__btn-2")
const tooltip2 = document.querySelector(".tooltip__txt-2")

const el3 = document.querySelector(".tooltip__btn-3")
const tooltip3 = document.querySelector(".tooltip__txt-3")

const tooltipFunc = (el, tooltip) => {
  createPopper(el, tooltip, {
    placement: 'top-start'
  });
}

tooltipFunc(el1, tooltip1)
tooltipFunc(el2, tooltip2)
tooltipFunc(el3, tooltip3)
