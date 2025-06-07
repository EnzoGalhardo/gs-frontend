
function ativarAlerta() {
  const alerta = document.getElementById('alerta');
  alerta.style.display = 'block';
  setTimeout(() => {
    alerta.style.display = 'none';
  }, 5000);
}
