document.addEventListener('DOMContentLoaded', () => {
  // Show button to top and handle fix navagation
  const backToTop = document.getElementById('scrollToTop');
  const navbar = document.getElementById('navbarDesktop');
  const bodyTag = document.getElementsByTagName('body')[0];
  let statusScroll = true;
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 200 && statusScroll && window.innerWidth > 1140) {
      backToTop.classList.add('show');
      navbar.classList.add('navbar-stuck');
      bodyTag.style.paddingTop = `${navbar.offsetHeight + 58}px`;
      statusScroll = false;
    } else if (
      window.pageYOffset <= 200 &&
      !statusScroll &&
      window.innerWidth > 1140
    ) {
      backToTop.classList.remove('show');
      navbar.classList.remove('navbar-stuck');
      bodyTag.removeAttribute('style');
      statusScroll = true;
    }
  });

  // Scroll to top
  backToTop.addEventListener('click', () => {
    window.scrollTo(0, 0);
  });
});
