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
  const item = getDataAtual();
  clickArray.push(item);
  render(item);
}
function render(item) {
  const ul = $('#data');
  const li = document.createElement('li');
  li.textContent = item;
  ul.appendChild(li);
  /* ul.innerHTML = '';
  let lis = '';
  clickArray.map((item) => {
    lis += `<li>${item}</li>`;
  });
  ul.innerHTML = lis;
*/
  document.title = clickArray.length;
}
