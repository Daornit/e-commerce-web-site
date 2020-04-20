window.addEventListener('DOMContentLoaded', (event) => {
  console.log('loaded')
  document.querySelector('.menu-toggle')
  .addEventListener('click', function (){
    document.querySelector('body').classList.toggle('open');
  })
});
