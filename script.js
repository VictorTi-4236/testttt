document.getElementById('trollButton').addEventListener('click', () => {
  alert('Você foi trollado com sucesso! Agora aguenta 😜');
  document.body.style.backgroundColor = 'lime';
  document.getElementById('rick').play();

  setTimeout(() => {
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"; // Rickroll clássico
  }, 4000);
});
