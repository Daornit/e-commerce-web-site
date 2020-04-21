window.addEventListener('DOMContentLoaded', (event) => {
  console.log('loaded')
  document.querySelector('.menu-toggle')
  .addEventListener('click', function (){
    document.querySelector('header').classList.toggle('open');
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
});
