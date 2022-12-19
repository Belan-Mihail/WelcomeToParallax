window.addEventListener("scroll", e => {
    document.body.style.cssText += `--scrollTop: ${this.scrollY}px` // ! расчет скролла и запись значения в переменную
});
gsap.registerPligin(ScrollTrigger, ScrollSmoother);  // ! подключение новых плагинов
ScrollSmoother.create({
    wrapper: ".wrapper",
    content: ".content"
})