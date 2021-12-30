const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel-button-right');
const previousButton = document.querySelector('.carousel-button-left');
const dotsNav = document.querySelector('.carousel-nav');
const dots = Array.from(dotsNav.children);
const slideWidth = slides[0].getBoundingClientRect().width;

const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px'
}

slides.forEach(setSlidePosition)

const changeSlide = (currentSlide, targetSlide) => {
    track.style.transform = `translateX(-${targetSlide.style.left})`;
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide')
}

const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
}
nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const currentDot =  dotsNav.querySelector('.current-slide');
    let targetSlide
    let targetDot
    if (currentSlide === slides[slides.length - 1]) {
        targetSlide = slides[0]
        targetDot = dots[0]
    }else{
        targetSlide = currentSlide.nextElementSibling
        targetDot = currentDot.nextElementSibling
    }  
    changeSlide(currentSlide, targetSlide)
    updateDots(currentDot, targetDot)
});
previousButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const currentDot =  dotsNav.querySelector('.current-slide');
    let targetSlide    
    let targetDot
    if (currentSlide === slides[0]) {
        targetSlide = slides[slides.length - 1]
        targetDot = dots[slides.length - 1]
    }else{
        targetSlide = currentSlide.previousElementSibling
        targetDot = currentDot.previousElementSibling
    }
    changeSlide(currentSlide, targetSlide)
    updateDots(currentDot, targetDot)
})

dotsNav.addEventListener('click', e => {
    const targetDot = e.target.closest('button');

    if (!targetDot) return;

    const currentSlide = track.querySelector('.current-slide');
    const currentDot =  dotsNav.querySelector('.current-slide');
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    const targetSlide = slides[targetIndex];
    
    changeSlide(currentSlide, targetSlide)
    updateDots(currentDot, targetDot)
})