const slides = document.querySelectorAll('.slide')

for  (const slide of slides) {
    slide.addEventListener('click', () => {
        clearActiveclases()
    slide.classList.add('active')
    })
}
function clearActiveclases() {
    slides.forEach((slide)=>{
    slide.classList.remove('active')
    })
}
 
    