const shareButton = document.querySelector('.card__share');

shareButton.addEventListener('click', () => {
  navigator.share({
    title: document.title,
    text: document.querySelector('.card__synopsis').textContent,
    url: window.location.href,
  });
});