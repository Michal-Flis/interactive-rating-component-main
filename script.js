const btn = document.querySelector('.btn');
const startBody = document.querySelector('.main-body');
const thankBody = document.querySelector('.thank-you');
const ratingBtn = document.querySelectorAll('.rating');
const span = document.querySelector('span');

btn.addEventListener('click', () => {
  startBody.style.display = 'none';
  thankBody.style.display = 'block';
});

ratingBtn.forEach((rating) => {
  rating.addEventListener('click', () => {
    span.innerHTML = rating.innerHTML;
  });
});