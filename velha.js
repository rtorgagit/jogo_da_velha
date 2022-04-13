var jogador = null;
var jogadorSelecionado = document.getElementById('jogador_selecionado');
var vencedorSelecionado = document.getElementById('vencedor_selecionado');
var combinacoes = [[1, 2, 3], [1, 5, 9], [1, 4, 7], [2, 5, 8], [3, 5, 7], [3, 6, 9], [4, 5, 6], [7, 8, 9]]


mudarJogador('X');

function escolherQuadrado(id) {
  var quadrado = document.getElementById(id);
  if (vencedorSelecionado.innerHTML != '') return;

  if (quadrado.innerHTML === '-') {
    quadrado.innerHTML = jogador;
    quadrado.style.color = "#000";

    (jogador === 'X') ? mudarJogador('O') : mudarJogador('X');
    for (i = 0; i < combinacoes.length; i++) {
      if (combinacoes[i].includes(parseInt(quadrado.id))) {
        if (verificaGanhador(...combinacoes[i])) {
          mudaCorQuadrado(...combinacoes[i]);
          mudarVencedor(combinacoes[i][0]);
        }
      }
    }
  }
}

function mudarJogador(valor) {
  jogador = valor;
  jogadorSelecionado.innerHTML = jogador;
}

function verificaGanhador(id1, id2, id3) {

  q1 = document.getElementById(id1);
  q2 = document.getElementById(id2);
  q3 = document.getElementById(id3);
  var eIgual = false;

  if (q1.innerHTML !== '-' && q1.innerHTML === q2.innerHTML && q2.innerHTML === q3.innerHTML) {
    eIgual = true;
  }
  return eIgual;
}

function mudaCorQuadrado(id1, id2, id3) {
  q1 = document.getElementById(id1);
  q2 = document.getElementById(id2);
  q3 = document.getElementById(id3);

  q1.style.background = '#0f0';
  q2.style.background = '#0f0';
  q3.style.background = '#0f0';
}

function mudarVencedor(id1) {
  q1 = document.getElementById(id1);
  jogador = q1.innerHTML;
  vencedorSelecionado.innerHTML = jogador;
}

function reiniciar() {
  vencedorSelecionado.innerHTML = '';
  jogadorSelecionado.innerHTML = 'X';
  for (i = 1; i <= 9; i++) {
    var q = document.getElementById(i);
    q.innerHTML = '-';
    q.style.color = '#eee';
    q.style.background = '#eee';
  }
}