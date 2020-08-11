function zeroEsquerda(value, count = 2, char = '0') {
  let newValue = value.toString();

  if (value.toString().length < count) {
    for (let i = 0; i < count - value.toString().length; i++) {
      newValue = char + value.toString();
    }
  }
  return newValue;
}

function getDataAtual() {
  const now = new Date();

  const diaMesAno = `${zeroEsquerda(now.getDate())}/${zeroEsquerda(
    now.getMonth() + 1
  )}/${now.getFullYear()}`;
  const horaMinutoSegundoMilisegundo = `${zeroEsquerda(
    now.getHours()
  )}:${zeroEsquerda(now.getMinutes())}:${zeroEsquerda(
    now.getSeconds()
  )}.${zeroEsquerda(now.getUTCMilliseconds(), 3)}`;
  return `${diaMesAno} ${horaMinutoSegundoMilisegundo}`;
}
export { getDataAtual };
