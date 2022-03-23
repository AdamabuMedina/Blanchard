function activatePopup(event) {
  const popup_link = event.target.closest('._popup-link');
  const popup_close_icon = event.target.closest('.popup__close');
  const popupsAll = document.querySelectorAll('.popup');

  if (popup_link) {
    popupsAll.forEach(el => {
      if (el.getAttribute('data-name') === popup_link.getAttribute('data-popupName')) {
        popup_open(el);
      }
    })
  } else if (popup_close_icon) {
    const popup_active = popup_close_icon.closest('.popup');
    popup_close(popup_active)
  } else if (!event.target.closest('.popup__body')) {
    popupsAll.forEach(el => {
      el.classList.contains('_active') ? popup_close(el) : false
    })
  }
}

let unlock = true;

function body_lock_add(delay) {
  let body = document.querySelector("body");
  if (unlock) {
    let lock_padding = document.querySelectorAll("._lp");
    for (let index = 0; index < lock_padding.length; index++) {
      const el = lock_padding[index];
      el.style.paddingRight = window.innerWidth - document.querySelector('.site-container').offsetWidth + 'px';
    }
    body.style.paddingRight = window.innerWidth - document.querySelector('.site-container').offsetWidth + 'px';
    body.classList.add("_lock");

    unlock = false;
    setTimeout(function () {
      unlock = true;
    }, delay);
  }
}

function body_lock_remove(delay) {
  let body = document.querySelector("body");
  if (unlock) {
    let lock_padding = document.querySelectorAll("._lp");
    setTimeout(() => {
      for (let index = 0; index < lock_padding.length; index++) {
        const el = lock_padding[index];
        el.style.paddingRight = '0px';
      }
      body.style.paddingRight = '0px';
      body.classList.remove("_lock");
    }, delay);

    unlock = false;
    setTimeout(function () {
      unlock = true;
    }, delay);
  }
}

function popup_open(item) {
  if (unlock) {

    if (!document.querySelector('.menu__body._active')) {
      body_lock_add(500);
    }
    item.classList.add('_active');
    // focusManager.capture(item)
  }
}

function popup_close(item, bodyUnlock = true) {
  if (unlock) {
    item.classList.remove('_active');
    if (!document.querySelector('.menu__body._active') && bodyUnlock) {
      body_lock_remove(500);
    }
  }
}


function addClickListener() {
  document.addEventListener('click', function (event) {
    activatePopup(event)
  });
};

addClickListener();
