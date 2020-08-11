window.addEventListener('load', start);

const clickArray = [];

function $(item) {
  return document.querySelector(item);
}

function start() {
  const button = $('#clickButton');
  button.addEventListener('click', cliqueBotao);
}

function cliqueBotao() {
  clickArray.push(getDataAtual());
  render();
}
function render() {
  const ul = $('#data');
  ul.innerHTML = '';
  let lis = '';
  clickArray.map((item) => {
    lis += `<li>${item}</li>`;
  });
  ul.innerHTML = lis;

  document.title = clickArray.length;
}
