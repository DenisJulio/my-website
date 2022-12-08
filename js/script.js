let button = document.querySelector('button');

button.addEventListener('click', function () {
    // this.classList.add('hide');
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
    });
});

window.addEventListener("scroll", function () {
    if (window.scrollY === 0) {
        button.classList.remove("hide");
    } else {
        button.classList.add("hide");
    }
});