scrollBtn = document.getElementById("scroll-top");

window.onscroll = function() {scrollBtnShow()};

function scrollBtnShow() {
    if(document.body.scrollTop > innerHeight || document.documentElement.scrollTop > innerHeight) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
}

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}