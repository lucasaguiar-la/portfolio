
document.getElementById("trocarTema").addEventListener('click', function() {
  document.body.classList.toggle('tema-escuro')
  document.body.classList.toggle('tema-claro')

  var logo = document.getElementById("logo");
  var botaoTema = document.getElementById("trocar-tema-icon");

  botaoTema.classList.add('girando')

  if(document.body.classList.contains('tema-escuro')) {
    logo.src = "./assets/images/geral/menu-image.png"
    botaoTema.src = "./assets/images/geral/escuro.png"
  } else {
    logo.src = "./assets/images/geral/menu-image-alt.svg"
    botaoTema.src = "./assets/images/geral/claro.png"
  }

  setTimeout(function() {
    botaoTema.classList.remove('girando');
  }, 250)
});