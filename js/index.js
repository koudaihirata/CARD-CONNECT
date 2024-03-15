const btn = document.querySelector('button');
console.log(btn);

btn.addEventListener('click', () => {
  console.log('You clicked me');

  window.location.href = 'cardEditing.html';
});