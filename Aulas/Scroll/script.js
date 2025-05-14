const caixa = document.getElementById('caixa');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      caixa.classList.add('visivel');
    }
  });
});

observer.observe(caixa);