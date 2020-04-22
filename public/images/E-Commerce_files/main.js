window.addEventListener('DOMContentLoaded', (event) => {
  console.log('loaded')
  const header = document.querySelector('header');
  
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
