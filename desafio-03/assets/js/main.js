const sr = ScrollReveal({
  origin: 'top',
  distance: '50px',
  duration: 2000,
  reset: true
});



ScrollReveal().reveal('.card', { delay: 200 });
ScrollReveal().reveal('.card__img',{delay:300})
ScrollReveal().reveal('.card__conteudo', { delay: 400 });
ScrollReveal().reveal('.card__texto', { delay: 500 });


