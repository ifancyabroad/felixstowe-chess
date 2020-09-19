$(document).ready(() => {
  // Fade scroll to anchor links
  const links = document.querySelectorAll('a.transition');
  $(links).on('click', function(e) {
    e.preventDefault();
    $(document.body).fadeOut(500, redirectPage.bind(this, this.href));
  })

  const redirectPage = (link) => {
    closeMenu(0);
    $(document.body).fadeIn(500);
    setTimeout(() => {
      window.location = link;
    }, 0);
  }

  // Menu Code
  const menu = document.querySelector('.menu-modal');
  const menuBtnContainer = document.querySelector('.menu-btn-container');
  const menuBtn = document.querySelector('.menu-btn');
  const menuCloseBtn = document.querySelector('.close-menu');
  let menuOpen = false;

  const openMenu = (time = 400) => {
    if (!menuOpen) {
      document.documentElement.classList.add('modal-open');
      document.body.classList.add('modal-open');
      menuBtn.classList.add('open');
      $(menu).fadeIn(time);
      menuOpen = true;
    }
  }

  const closeMenu = (time = 400) => {
    if (menuOpen) {
      document.documentElement.classList.remove('modal-open');
      document.body.classList.remove('modal-open');
      menuBtn.classList.remove('open');
      $(menu).fadeOut(time);
      menuOpen = false;
    }
  }

  menuBtnContainer.addEventListener('click', openMenu);
  menuCloseBtn.addEventListener('click', closeMenu);
})
