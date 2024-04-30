(function () {
  const header = document.querySelector('h1');
  header.style.color = '#ff0000';
  document.querySelector('body').addEventListener('click', function () {
    header.style.color = generateRandomHex();
  });
})();

function generateRandomHex() {
  const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  return randomColor;
}
