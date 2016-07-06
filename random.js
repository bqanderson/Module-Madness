module.exports = {
  randomNum : randomAmount
}

function randomAmount(min, max) {
  return (Math.random() * (max - min)) + min;
};
