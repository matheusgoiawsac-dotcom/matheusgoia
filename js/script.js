// Aguarda o carregamento completo do DOM antes de interagir
document.addEventListener('DOMContentLoaded', () => {
  const btnAcao = document.getElementById('btn-acao');

  if (btnAcao) {
    btnAcao.addEventListener('click', () => {
      alert('Estrutura funcionando perfeitamente!');
    });
  }
});