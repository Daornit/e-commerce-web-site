window.addEventListener('DOMContentLoaded', (event) => {
  console.log('loaded')
  const header = document.querySelector('header');
  document.querySelector('.menu-toggle')
  .addEventListener('click', function (){
    header.classList.toggle('open');
  });
  const dropdown = document.querySelectorAll('.nav-dropdown');

  for(let i=0; i < dropdown.length; i++){
    dropdown[i].addEventListener('click', function(){
      dropdown[i].classList.toggle('clicked');
      for(let j=0; j < dropdown.length; j++){
        if(dropdown[j] != dropdown[i]){
          dropdown[j].classList.remove('clicked');
        }
      }
    });
  }

  window.addEventListener('scroll', function(){
    if (window.scrollY > 50) {
      header.classList.add('nav-fixed');
    } else {  
      header.classList.remove('nav-fixed');
    }
  });
});
