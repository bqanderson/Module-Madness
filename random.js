module.exports = {
  randomNum : randomAmount(100, 1000000)
}

function randomAmount(min, max) {
  return (Math.random() * (max - min)) + min;
};
