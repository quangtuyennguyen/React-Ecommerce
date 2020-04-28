document.addEventListener('DOMContentLoaded', () => {
    // Show button to top and handle fix navagation
    const onToTop = document.getElementById('scrollToTop');
    const navFix = document.getElementById('navbarDesktop');
    const navDesktop = document.getElementById('navDesktop');
    const navMobile = document.getElementById('navbarMobile');
    const body = document.getElementsByTagName('body')[0];
    let statusScroll = true;
    if (navFix) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 200 && statusScroll) {
                onToTop.classList.add('show');
                (window.innerWidth > 900) && navFix.classList.add('navbar-stuck');
                (window.innerWidth > 900) ? body.style.paddingTop = `${navFix.offsetHeight + 58}px` : body.style.paddingTop = '72px';
                (window.innerWidth <= 900) && navMobile.classList.add('navbar-stuck');
                return statusScroll = false;
            } else if (window.pageYOffset <= 200 && !statusScroll) {
                onToTop.classList.remove('show');
                window.innerWidth > 900 && navFix.classList.remove('navbar-stuck');
                navDesktop.classList.remove('show');
                body.removeAttribute('style');
                (window.innerWidth <= 900) && navMobile.classList.remove('navbar-stuck');
                return statusScroll = true;
            };
        });
    }

    // Scroll to top
    if (onToTop) {
        onToTop.addEventListener('click', () => {
            window.scrollTo(0, 0);
        });
    };
});