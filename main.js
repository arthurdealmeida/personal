let ball = document.getElementById('ball');
let interval_id;
let x_incr = 1;
let y_incr = 1;

function init() {
  update_color();
  ball.style.position = 'absolute';
  setInterval(frame, 5);
}

function update_color() {
  let color = Math.round((Math.random() * 100));
  ball.style.fill = `hsl(${color},100%,50%)`;
}

function handle_collision() {
  let ball_height = ball.offsetHeight;
  let ball_width = ball.offsetWidth;
  let left = ball.offsetLeft;
  let top = ball.offsetTop;
  let win_height = window.innerHeight;
  let win_width = window.innerWidth;

  if (left <= 0 || left + ball_width >= win_width) {
    x_incr = ~x_incr + 1;
    update_color();
  }
  if (top <= 0 || top + ball_height >= win_height) {
    y_incr = ~y_incr + 1;
    update_color();
  }
}

function frame() {
  handle_collision();
  ball.style.top = ball.offsetTop + y_incr;
  ball.style.left = ball.offsetLeft + x_incr;
}

init();