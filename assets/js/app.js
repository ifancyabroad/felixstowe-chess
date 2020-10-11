$(document).ready(() => {

  // Fullscreen menu
  const documentElement = $(document.documentElement);
  const body = $(document.body);
  const menu = $('.menu-modal');
  const menuBtnContainer = $('.menu-btn-container');
  const menuBtn = $('.menu-btn');
  const menuCloseBtnMobile = $('#close-menu-mobile');
  const menuCloseBtn = $('#close-menu');
  let menuOpen = false;

  const openMenu = (time = 400) => {
    if (!menuOpen) {
      documentElement.addClass('modal-open');
      body.addClass('modal-open');
      menuBtn.addClass('open');
      menu.fadeIn(time);
      menuOpen = true;
    }
  }

  const closeMenu = (time = 400) => {
    if (menuOpen) {
      documentElement.removeClass('modal-open');
      body.removeClass('modal-open');
      menuBtn.removeClass('open');
      menu.fadeOut(time);
      menuOpen = false;
    }
  }

  menuBtnContainer.on('click', openMenu);
  menuCloseBtnMobile.on('click', closeMenu);
  menuCloseBtn.on('click', closeMenu);

  // Message banner
  const messageBanner = $('#message-banner');
  const messageBannerCloseBtnMobile = $('#close-message-banner-mobile');
  const messageBannerCloseBtn = $('#close-message-banner');

  const closeMessageBanner = (time = 400) => {
    messageBanner.fadeOut(time);
  }

  messageBannerCloseBtnMobile.on('click', closeMessageBanner);
  messageBannerCloseBtn.on('click', closeMessageBanner);

  // Fade scroll to anchor links
  const links = $('a.transition');
  links.on('click', function(e) {
    e.preventDefault();
    body.fadeOut(500, redirectPage.bind(this, this.href));
  })

  const redirectPage = (link) => {
    closeMenu(0);
    body.fadeIn(500);
    setTimeout(() => {
      window.location = link;
    }, 0);
  }
})
