function getRandomNumber() {
  return Math.floor(Math.random() * 2) + 1;
}

var c = document.getElementById("c");
var ctx = c.getContext("2d");

        c.height = window.innerHeight;
        c.width = window.innerWidth;

var matrix = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
matrix = matrix.split("");
var timeOut = false;
var font_size = 10;
var columns = c.width / font_size;
var drops = [];

for (var x = 0; x < columns; x++)
  drops[x] = 1;

function draw() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
  ctx.fillRect(0, 0, c.width, c.height);

  ctx.fillStyle = "#44CF07";
  ctx.font = font_size + "px arial";

  for (var i = 0; i < drops.length; i++) {
    var text = matrix[Math.floor(Math.random() * matrix.length)];
    ctx.fillText(text, i * font_size, drops[i] * font_size);

    if (drops[i] * font_size > c.height && Math.random() > 0.975)
      drops[i] = 0;

    drops[i]++;
  }
if (!timeOut) {
  var randomNumber = getRandomNumber();

  if (randomNumber == 1) {
    ctx.fillStyle = "#FFFFFF";
  } else {
    ctx.fillStyle = "#44CF07";
  }
font_size = 13;
}
  setTimeout(function() {
    timeOut = true;
  }, 4000); 
}

setInterval(draw, 35);


document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.key === 'u'  || event.ctrlKey && event.key === 'U' || event.ctrlKey && event.key === 'г' || event.ctrlKey && event.key === 'Г') {
    event.preventDefault();
    window.close();
  }
});






let typed = new Typed('#typed', {
  stringsElement: '#typed-strings',
  typeSpeed: 100, // Скорость печати
  startDelay: 500, // Задержка перед стартом анимации
  backSpeed: 50, // Скорость удаления
  loop: true
});

$(".element").typed({
  typeSpeed: 0, // Скорость печати
  backSpeed: 0, // Скорость удаления
  startDelay: 0, // Задержка перед стартом анимации
  backDelay: 500, // Пауза перед удалением 
  loop: false,
  loopCount: false,
  showCursor: true,
  attr: null,
  callback: function(){ }
});
