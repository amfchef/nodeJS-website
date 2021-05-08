const contactForm = document.querySelector('.control');

contactForm.addEventListener('submitB', (e)=>{
    e.preventDefault();
    console.log('submit clicked')
})